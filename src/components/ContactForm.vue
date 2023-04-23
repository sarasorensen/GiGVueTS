<template>
  <form>
    <h2>{{ title }}</h2>
    <div class="input-group">
      <p class="warning warning__input" v-if="nameWatcher">Name is required.</p>
      <input
        type="text"
        required="true"
        name="firstName"
        id="name"
        v-model="formData.name"
      />
      <label for="firstName"> First name </label>
    </div>
    <div class="input-group">
      <p class="warning warning__input" v-if="lastNameWatcher">
        Last name is required.
      </p>
      <input
        type="text"
        required="true"
        name="lastName"
        id="lastname"
        v-model="formData.lastName"
      />
      <label for="lastName"> Last name </label>
    </div>
    <div class="input-group">
      <p
        class="warning warning__input"
        v-if="!validEmail && formData.email !== ''"
      >
        Make sure your e-mail is spelled correctly.
      </p>

      <p class="warning warning__input" v-if="emailWatcher">
        E-mail is required.
      </p>

      <input
        type="text"
        required="true"
        name="email"
        id="mail"
        v-model="formData.email"
      />
      <label for="email"> E-mail </label>
    </div>

    <div class="input-group">
      <select
        name="country"
        id="cont"
        required="true"
        v-model="formData.country"
      >
        <option :value="i" v-for="(c, i) in countries" :key="i">{{ i }}</option>
      </select>
      <label for="country">Country</label>
    </div>
    <p class="warning" v-if="nameWatcher || lastNameWatcher || emailWatcher">
      Some input is missing, please make sure all fields have correct
      information.
    </p>

    <btn-row
      v-if="!addingInPrgs && !addSuccess && !editSuccess"
      :btn1="'Reset'"
      :btn2="btn2"
      :btn1Click="() => resetForm()"
      :btn2Click="() => validateForm()"
      :disabled="nameWatcher || lastNameWatcher || emailWatcher"
    />

    <div v-if="addingInPrgs" class="loader" id="loaderForm"></div>
    <p class="success" v-if="addSuccess">
      New contact is added <i class="fa fa-check"></i>
    </p>
    <p class="success" v-if="editSuccess">
      Contact is updated <i class="fa fa-check"></i>
    </p>
  </form>
</template>

<script lang="ts">
import store from "../store/index";
import { mapActions, mapState } from "vuex";
import * as Contact from "../scripts/EditContact";
import { defineComponent } from "vue";
const countryList = require("country-list");

//components
import btnRow from "./BtnRow.vue";
export default defineComponent({
  name: "ContactForm",
  components: {
    btnRow,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    formInput: {
      type: Object,
    },
  },
  data() {
    return {
      countries: [],
      formData: {
        name: "",
        lastName: "",
        email: "",
        country: "andorra",
        id: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
      },
      nameWatcher: false,
      lastNameWatcher: false,
      validEmail: true,
      emailWatcher: false,
      reset: false,
      btn2: "+ Add contact",
    };
  },
  computed: {
    ...mapState(["addingInPrgs", "addSuccess", "editSuccess"]),
  },
  methods: {
    ...mapActions(["addContact", "editContact"]),
    validateForm() {
      if (this.formData.name == "") {
        this.nameWatcher = true;
      } else {
        this.nameWatcher = false;
      }
      if (this.formData.lastName == "") {
        this.lastNameWatcher = true;
      } else {
        this.lastNameWatcher = false;
      }
      if (this.formData.email == "" || !this.validEmail) {
        this.emailWatcher = true;
      } else {
        this.emailWatcher = false;
      }

      if (
        this.emailWatcher == false &&
        this.lastNameWatcher == false &&
        this.nameWatcher == false
      ) {
        if (this.action == "add") {
          this.addContact(this.formData);
        } else {
          this.editContact(this.formData);
        }
      }
    },
    resetForm() {
      this.reset = true;
      this.formData = {
        name: "",
        lastName: "",
        email: "",
        country: "andorra",
        id: "",
      };
    },
  },
  async mounted() {
    this.countries = await countryList.getNameList();

    if (this.action !== "add") {
      this.btn2 = "Save";
    }
  },
  watch: {
    formInput() {
      if (this.formInput !== undefined) {
        this.formData = {
          name: this.formInput.name,
          lastName: this.formInput.lastName,
          email: this.formInput.email,
          country: this.formInput.country,
          id: this.formInput.id,
        };
      }
    },
    "formData.name"() {
      if (this.formData.name == "" && this.reset !== true) {
        this.nameWatcher = true;
      } else {
        this.nameWatcher = false;
      }
    },
    "formData.lastName"() {
      if (this.formData.lastName == "" && this.reset !== true) {
        this.lastNameWatcher = true;
      } else {
        this.lastNameWatcher = false;
      }
    },
    "formData.email"() {
      if (this.formData.email == "" && this.reset !== true) {
        this.emailWatcher = true;
      } else {
        this.emailWatcher = false;
        this.validEmail = Contact.validateEmail(this.formData.email);
      }
    },
    addSuccess() {
      setTimeout(() => {
        store.state.addSuccess = false;
        this.reset = true;
        this.formData = {
          name: "",
          lastName: "",
          email: "",
          country: "andorra",
          id: "",
        };
      }, 1500);
    },
    editSuccess() {
      setTimeout(() => {
        store.state.editSuccess = false;
        this.reset = true;
        this.$emit("closePopUp", true);
      }, 1500);
    },
  },
});
</script>
