import { createStore } from "vuex";

export default createStore({
  state: {
    toBeDeleted: {},
    contacts: [
      {
        name: "Sara",
        lastName: "Sørensen",
        email: "sarasorensen97@hotmail.com",
        country: "norway",
        id: 1,
      },
      {
        name: "Michael",
        lastName: "Smith",
        email: "smith@hotmail.com",
        country: "greenland",
        id: 2,
      },
    ],
    addingInPrgs: false,
    addSuccess: false,
    deleteInPrgs: false,
    editInPrgs: false,
    editSuccess: false,
  },
  getters: {},
  mutations: {},
  actions: {
    addContact(i, formInfo) {
      this.state.addingInPrgs = true;
      this.state.contacts.push(formInfo);
      this.state.addingInPrgs = false;
      this.state.addSuccess = true;
    },
    deleteContact(i, contact) {
      this.state.deleteInPrgs = true;
      let removeIndex = this.state.contacts
        .map((item) => item.id)
        .indexOf(contact.id);
      this.state.contacts.splice(removeIndex, 1);
      this.state.deleteInPrgs = false;
    },
    editContact(i, contact) {
      this.state.editInPrgs = true;

      this.dispatch("deleteContact", contact);
      this.dispatch("addContact", contact);
      this.state.addSuccess = false;
      this.state.editInPrgs = false;
      this.state.editSuccess = true;
    },
  },
  modules: {},
});
