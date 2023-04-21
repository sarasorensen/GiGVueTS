<template>
  <form>
    <h3>{{ title }}</h3>
    <div class="input-group">
      <input type="text" required="true" name="firstName" id="firstName" />
      <label for="firstName"> First name </label>
    </div>
    <div class="input-group">
      <input type="text" required="true" name="lastName" id="lastName" />
      <label for="lastName"> Last name </label>
    </div>
    <div class="input-group">
      <input type="text" required="true" name="email" id="email" />
      <label for="email"> E-mail </label>
    </div>

    <div class="input-group">
      <select name="country" id="country" required="true">
        <option value="Norway">Norway</option>
      </select>
      <label for="country">Country</label>
    </div>
    <btn-row
      v-if="action == 'add'"
      :btn1="'Cancel'"
      :btn1Click="() => clearForm()"
      :btn2="'+ Add Contact'"
      :btn2Click="() => clearForm()"
    />
  </form>
</template>

<script lang="ts">
import * as Contact from "../scripts/EditContact";
import { defineComponent } from "vue";

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
  },
  methods: {
    clearForm() {
      Contact.clearForm();
    },
  },
});
</script>