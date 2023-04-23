<template>
  <main>
    <h1>Address Book</h1>

    <div id="panel">
      <ul class="nav">
        <li
          @click="tab"
          role="tab"
          aria-controls="panel1"
          aria-selected="true"
          tabindex="1"
        >
          All contacts
        </li>

        <li
          role="tab"
          aria-controls="panel2"
          aria-selected="false"
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
      <div class="space"></div>
        <table-item
          :title="'All contacts'"
          :columns="['Name', 'Last name', 'E-mail', 'Country']"
          :data="contacts"
          :hover="false"
        />
      </div>
      <div
        id="panel2"
        class="panel"
        role="tabpanel"
        aria-hidden="true"
        tabindex="0"
      >
        <ul class="nav" id="navList">
          <li @click="showSection(1, 'null')">+ Add contact</li>

          <li @click="showSection(2, 'delete')">
            <i class="fa fa-trash-o"></i> Delete contact
          </li>

          <li @click="showSection(3, 'edit')">
            <i class="fa fa-gear"></i> Edit contact
          </li>
        </ul>

        <contact-form id="toggle1" :title="'Add Contact'" :action="'add'" />

        <section id="toggle2">
          <table-item
            :title="'Delete contact'"
            :info="'Click to delete the desired contact.'"
            :columns="['Name', 'Last name', 'E-mail', 'Country']"
            :data="contacts"
            :rowClick="() => openPopUp('delete')"
            @action="toBeDeleted"
            :hover="true"
          />

          <pop-up
            @actionPopUp="confirmDelete()"
            @closePopUp="closePopUp('delete')"
            :title="'Delete'"
            :name="modifyTitle"
            :action="'delete'"
            :btn="'Delete'"
          />
        </section>
        <section id="toggle3">
          <table-item
            :title="'Edit contact'"
            :info="'Click to edit the desired contact.'"
            :columns="['Name', 'Last name', 'E-mail', 'Country']"
            :data="contacts"
            :rowClick="() => openPopUp('edit')"
            @action="toBeEdited"
            :hover="true"
          />

          <pop-up

            @closePopUp="closePopUp('edit')"
            :title="'Edit'"
            :name="modifyTitle"
            :action="'edit'"
            :btn="'Save'"
            :formInput="editContact"
          />
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { mapState } from "vuex";
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
  data() {
    return {
      modifyTitle: "",
      editContact: {}
    };
  },
  computed: {
    ...mapState(["contacts"]),
  },
  methods: {
    tab() {
      Panel.tab("panel");
    },
    showSection(i: any, source: any) {
      Panel.showSection(i, source);
    },
    toBeDeleted(value: any) {
      let contact = Contact.toBeDeleted(value);
      this.modifyTitle = contact.name;
    },
    toBeEdited(value: any) {
      let contact = Contact.toBeEdited(value);
      this.modifyTitle = contact.name;
      this.editContact = contact;
    },
    openPopUp(source: any) {
      PopUpTs.openPopUp(source);
    },
    closePopUp(source: any) {
      PopUpTs.closePopUp(source);
    },
    confirmDelete() {
      Contact.deleteContact();
    },
  },
  async mounted() {
  await  this.tab();
  await  this.showSection(1, "null");
  },
});
</script>

<style>
@import "../../styles/style.css";
</style>
