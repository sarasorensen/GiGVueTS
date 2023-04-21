<template>
  <section class="popup" id="popUp" @click="closePopUp">
    <div class="popup__content" @click.stop>
      <i @click="closePopUp()" class="fa fa-close popup__content--close"></i>
      <div id="verify">
        <h2>{{title}} / contact name</h2>

        <p v-if="action == 'delete'">
          Do you really want to delete /contact name/ ? This cannot be undone.
        </p>

        <contact-form v-if="action == 'edit'" :title="'Edit Contact'" :action="'edit'"/>
      </div>

      <div id="verified">
        <h2>Success <i class="fa fa-check"></i></h2>
        <div class="wrap__buttons">
          <button class="btn" @click="closePopUp()">Close</button>
        </div>
      </div>

      <div class="loader" id="loader"></div>

      <div class="wrap__buttons" id="btns-action">
        <button class="btn btn__neutral" @click="closePopUp()">
          <i class="fa fa-close"></i> Cancel
        </button>

        <button class="btn" @click="actionPopUp()">
          <i class="fa fa-trash-o"></i> {{ btn }}
        </button>
      </div>
      <hr />
    </div>
  </section>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

import ContactForm from "./ContactForm.vue";
export default defineComponent({
  name: "PopUp",
  components:{
    ContactForm
  },
  props: {
    title:{
      type: String,
      required: true
    },
    action:{
      type: String,
      required: true
    },
    btn:{
      type: String,
      required: true
    },
  },
  methods: {
    closePopUp() {
      console.log("emit");
      this.$emit("closePopUp");
    },
    actionPopUp() {
      this.$emit("actionPopUp");
    },
  },
});
</script>