<template>
  <section class="popup" id="popUp" @click="closePopUp">
    <div class="popup__content" @click.stop>
      <i @click="closePopUp()" class="fa fa-close popup__content--close"></i>
      <div id="verify">
        <h2>Are you sure?</h2>
        <p>
          Do you really want to delete /contact name/ ? This cannot be undone.
        </p>
      </div>

      <div id="verified">
        <h2>Contact deleted <i class="fa fa-check"></i></h2>
        <div class="wrap__buttons">
          <button class="btn" @click="closePopUp()">Close</button>
        </div>
      </div>

      <div class="loader" id="loader"></div>

      <div class="wrap__buttons">
        <button class="btn btn__neutral" @click="closePopUp()">
          <i class="fa fa-close"></i> Cancel
        </button>

        <button class="btn" @click="deleteContact()">
          <i class="fa fa-trash-o"></i> Delete
        </button>
      </div>
      <hr />
    </div>
  </section>
</template>
  
  <script lang="ts">
import * as PopUpTs from "../scripts/PopUp";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PopUp",
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  methods: {
    closePopUp() {
      console.log("emit");
      this.$emit("closePopUp");
    },
    deleteContact() {
      console.log("deleteContact");
      this.$emit("deleteContact");
    },
  },
});
</script>