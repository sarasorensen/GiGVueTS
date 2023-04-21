<template>
  <form>
    <h3>{{ title }}</h3>
    <div class="input-group">
      <p class="warning warning__input" v-if="nameWatcher">Name is required.</p>
      <input
        type="text"
        required="true"
        name="firstName"
        id="firstName"
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
        id="lastName"
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
        id="email"
        v-model="formData.email"
      />
      <label for="email"> E-mail </label>
    </div>

    <div class="input-group">
      <select
        name="country"
        id="country"
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
      v-if="action == 'add' && !addingInPrgs && !addSuccess"
      :btn1="'null'"
      :btn2="'+ Add Contact'"
      :btn2Click="() => validateForm()"
      :disabled="nameWatcher || lastNameWatcher || emailWatcher"
    />

    <div v-if="addingInPrgs" class="loader" id="loaderForm"></div>
    <p class="success" v-if="addSuccess">
      New contact is added <i class="fa fa-check"></i>
    </p>
  </form>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex'
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
  data() {
    return {
      countries: [],
      formData: {
        name: "",
        lastName: "",
        email: "",
        country: "andorra",
      },
      nameWatcher: false,
      lastNameWatcher: false,
      validEmail: true,
      emailWatcher: false,
    };
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
  },
  computed: {
    ...mapState(["addingInPrgs", "addSuccess"]),
  },
  methods: {
    ...mapActions([
      'addContact'
    ]),
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
        this.addContact(this.formData)
      }
    },
  },
  mounted() {
    this.countries = countryList.getNameList();
  },
  watch: {
    "formData.name"() {
      if (this.formData.name == "") {
        this.nameWatcher = true;
      } else {
        this.nameWatcher = false;
      }
    },
    "formData.lastName"() {
      if (this.formData.lastName == "") {
        this.lastNameWatcher = true;
      } else {
        this.lastNameWatcher = false;
      }
    },
    "formData.email"() {
      if (this.formData.email == "") {
        this.emailWatcher = true;
      } else {
        this.emailWatcher = false;
        this.validEmail = Contact.validateEmail(this.formData.email);
      }
    },
  },
});
</script>
