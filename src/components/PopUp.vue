<template>
  <section class="popup" :id="action" @click="closePopUp">
    <i
      @click="closePopUp(action)"
      class="fa fa-close popup__content--close"
    ></i>
    <div class="popup__content" @click.stop>
      <div id="verify">
        <h2>{{ title }} {{ name }}</h2>

        <p v-if="action == 'delete'" class="desc">
          Do you really want to delete {{ name }}? This cannot be undone.
        </p>

        <contact-form
          v-if="action == 'edit'"
          :title="'Edit Contact'"
          :action="'edit'"
          :formInput="formInput"
          @closePopUp="closePopUp(action)"
        />
      </div>

      <div id="verified">
        <h2>Success</h2>
        <div class="wrap__buttons">
          <button class="btn" @click="closePopUp(action)">Close</button>
        </div>
      </div>

      <div class="loader" id="loader"></div>

      <btn-row
      v-if="action !== 'edit'"
        id="btns-action"
        :btn1="'Cancel'"
        :btn1Click="() => closePopUp(action)"
        :btn2="btn"
        :btn2Click="() => actionPopUp()"
      />

      <hr />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//components
import btnRow from "./BtnRow.vue";
import ContactForm from "./ContactForm.vue";
export default defineComponent({
  name: "PopUp",
  components: {
    btnRow,
    ContactForm,
  },
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    name: {
      type: String,
    },
    action: {
      type: String,
      required: true,
      default: "",
    },
    btn: {
      type: String,
      required: true,
      default: "",
    },
    formInput: {
      type: Object,
    }
  },
  methods: {
    closePopUp(source: any) {
      this.$emit("closePopUp", source);
    },
    actionPopUp() {
      this.$emit("actionPopUp");
    },
  },
});
</script>
