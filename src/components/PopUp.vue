<template>
  <section class="popup" :id="action" @click="closePopUp">
    <div class="popup__content" @click.stop>
      <i @click="closePopUp(action)" class="fa fa-close popup__content--close"></i>
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
          <button class="btn" @click="closePopUp(action)">Close</button>
        </div>
      </div>

      <div class="loader" id="loader"></div>


      <btn-row
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
  components:{
    btnRow,
    ContactForm
  },
  props: {
    title:{
      type: String,
      required: true,
      default: ""
    },
    action:{
      type: String,
      required: true,
      default: ""
    },
    btn:{
      type: String,
      required: true,
      default: ""
    },
  },
  methods: {
    closePopUp(source:any) {
      this.$emit("closePopUp", source);
    },
    actionPopUp() {
      this.$emit("actionPopUp");
    },
  },
});
</script>