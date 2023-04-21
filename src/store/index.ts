import { createStore } from "vuex";

export default createStore({
  state: {
    toBeDeleted: {},
    contacts: [
      {
        name: "Sara",
        lastName: "Sørensen",
        email: "sarasorensen97@hotmail.com",
        country: "Norway",
      },
      {
        name: "Michael",
        lastName: "Smith",
        email: "smith@hotmail.com",
        country: "USA",
      },
    ],
    addingInPrgs: false,
    addSuccess: false,
  },
  getters: {},
  mutations: {},
  actions: {
    addContact (i, formInfo) {
      this.state.addingInPrgs = true;
      this.state.contacts.push(formInfo)
      this.state.addingInPrgs = false;
      this.state.addSuccess = true;
    },
    deleteContact (i, contact) {
      this.state.addingInPrgs = true;
      this.state.contacts.push(contact)
      this.state.addingInPrgs = false;
      this.state.addSuccess = true;
    }
  },
  modules: {},
});
