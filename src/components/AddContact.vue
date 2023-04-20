<template>
  <form id="toggle1">
    <h3>+ Add contact</h3>
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
    <div class="wrap__buttons">
      <button class="btn btn__neutral" @click="clearForm()">
        <i class="fa fa-close"></i> Reset
      </button>
      <input type="submit" value="+ Add contact" class="btn" />
    </div>
  </form>
</template>

<script lang="ts">
import * as Contact from "../scripts/EditContact";
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    clearForm() {
      Contact.clearForm();
    },
  },
});
</script>