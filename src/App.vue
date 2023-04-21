<template>
  <main>
    <h1>Address Book</h1>

    <div id="panel">
      <ul class="nav-list">
        <li
          @click="tab"
          role="tab"
          aria-controls="panel1"
          aria-selected="false"
          tabindex="1"
        >
          All contacts
        </li>

        <li
          role="tab"
          aria-controls="panel2"
          aria-selected="true"
          tabindex="0"
          @click="tab"
        >
          Modify contact(s)
        </li>
      </ul>

      <div
        id="panel1"
        class="panel"
        role="tabpanel"
        aria-hidden="false"
        tabindex="0"
      >
        <table-item
          :title="'All contacts'"
          :columns="['Name', 'Last name', 'E-mail', 'Country']"
          :data="['Sara', '12345', 'mail@mail.com', 'Spain']"
        />
      </div>
      <div
        id="panel2"
        class="panel"
        role="tabpanel"
        aria-hidden="false"
        tabindex="0"
      >
        <h2>Modify contact(s)</h2>

        <ul class="nav-list" id="navList">
          <li @click="showSection(1)">+ Add contact</li>

          <li @click="showSection(2)">
            <i class="fa fa-trash-o"></i> Delete contact
          </li>

          <li @click="showSection(3)">
            <i class="fa fa-gear"></i> Edit contact
          </li>
        </ul>

        <contact-form id="toggle1" :title="'+ Add Contact'" :action="'add'" />

        <section id="toggle2">
          <table-item
            :title="'- Delete contact'"
            :columns="['Name', 'Last name', 'E-mail', 'Country', 'Delete']"
            :data="['Sara', '12345', 'mail@mail.com', 'Spain', 'X']"
            :rowClick="() => openPopUp('delete', 1)"
          />

          <pop-up
            @actionPopUp="deleteContact()"
            @closePopUp="closePopUp()"
            :title="'Delete'"
            :action="'delete'"
            :btn="'Delete'"
          />
        </section>
        <section id="toggle3">
          <table-item
            :title="'Edit contact'"
            :columns="['Name', 'Last name', 'E-mail', 'Country', 'Edit']"
            :data="['Sara', '12345', 'mail@mail.com', 'Spain', 'X']"
          />

          <pop-up
            @actionPopUp="edit()"
            @closePopUp="closePopUp()"
            :title="'Edit'"
            :action="'edit'"
            :btn="'Save'"
          />
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as Panel from "./scripts/panel";
import * as PopUpTs from "./scripts/PopUp";
import * as Contact from "./scripts/EditContact";

//components
import PopUp from "./components/PopUp.vue";
import ContactForm from "./components/ContactForm.vue";
import TableItem from "./components/TableItem.vue";
export default defineComponent({
  components: {
    ContactForm,
    PopUp,
    TableItem,
  },
  methods: {
    tab() {
      Panel.tab("panel");
    },
    showSection(source: any) {
      Panel.showSection(source);
    },
    openPopUp(source: any, i: any) {
      PopUpTs.openPopUp();
    },
    closePopUp() {
      PopUpTs.closePopUp();
    },
    deleteContact() {
      Contact.deleteContact();
    },
    edit() {
      Contact.edit();
    },
  },
  mounted() {
    this.tab();
    this.showSection(1);
  },
});
</script>

<style>
@import "../../styles/style.css";
</style>
