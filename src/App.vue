<template>
  <main>
    <h1>Address Book</h1>

    <div id="panel">
      <ul class="nav-list">
        <li
          role="tab"
          aria-controls="panel1"
          aria-selected="false"
          tabindex="1"
        >
          All contacts
        </li>

        <li role="tab" aria-controls="panel2" aria-selected="true" tabindex="0">
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

          <ul class="nav-list">
            @click="showSection(1, 2 , 3)"
            <li>+ Add contact</li>
            @click="showSection(2, 1, 3)"
            <li><i class="fa fa-trash-o"></i> Delete contact</li>
            @click="showSection(3, 1, 2)"
            <li><i class="fa fa-gear"></i> Edit contact</li>
          </ul>

          <add-contact />
 
          <section id="toggle2">
            <table-item
              :title="'- Delete contact'"
              :columns="['Name', 'Last name', 'E-mail', 'Country', 'Delete']"
              :data="['Sara', '12345', 'mail@mail.com', 'Spain', 'X']"
              :rowClick="() => openPopUp('delete', 1)"
            />

  
            <pop-up
              @closePopUp="closePopUp()"
              :fields="['test']"
            />


          </section>
          <section id="toggle3">
            <h3><i class="fa fa-gear"></i> Edit contact</h3>
            <table-item
              :title="'Edit contact'"
              :columns="['Name', 'Last name', 'E-mail', 'Country', 'Edit']"
              :data="['Sara', '12345', 'mail@mail.com', 'Spain', 'X']"
            />
            <table>
              <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>E-mail</th>
                <th>Country</th>
                <th>Edit</th>
              </tr>
              <tr>
                <td>Sara 1</td>
                <td>9122334455</td>
                <td>lala@hotmail.com</td>
                <td>4316, Germany</td>

                <td @click="openEdit()"><i class="fa fa-gear"></i></td>
              </tr>
              <tr>
                <td>Sara 2</td>
                <td>9122334455</td>
                <td>lala@hotmail.com</td>
                <td>4318, Mexico</td>

                <td @click="openEdit()"><i class="fa fa-gear"></i></td>
              </tr>

              <section class="popup" id="popUpEdit" @click="closePopUp()">
                <div class="popup__content" @click.stop>
                  <i
                    @click="closePopUp()"
                    class="fa fa-close popup__content--close"
                  ></i>

                  <section id="verify">
                    <h3>Editing /contact name/</h3>
                    <div class="input-group">
                      <input
                        type="text"
                        required="true"
                        name="firstName"
                        id="firstName"
                      />
                      <label for="firstName"> First name </label>
                    </div>
                    <div class="input-group">
                      <input
                        type="text"
                        required="true"
                        name="lastName"
                        id="lastName"
                      />
                      <label for="lastName"> Last name </label>
                    </div>
                    <div class="input-group">
                      <input
                        type="text"
                        required="true"
                        name="email"
                        id="email"
                      />
                      <label for="email"> E-mail </label>
                    </div>

                    <div class="input-group">
                      <select name="country" id="country" required="true">
                        <option value="Norway">Norway</option>
                      </select>
                      <label for="country">Country</label>
                    </div>
                  </section>

                  <div id="verified">
                    <h2>Contact edited <i class="fa fa-check"></i></h2>
                    <div class="wrap__buttons">
                      <button class="btn" @click="closePopUp()">Close</button>
                    </div>
                  </div>

                  <div class="loader" id="loader"></div>

                  <div class="wrap__buttons">
                    <button class="btn btn__neutral" @click="closePopUp()">
                      <i class="fa fa-close"></i> Cancel
                    </button>
                    @click="deleteContact()"
                    <button class="btn">
                      <i class="fa fa-arrow"></i> Save
                    </button>
                  </div>
                  <hr />
                </div>
              </section>
            </table>
          </section>
   
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as PopUpTs from "./scripts/PopUp";
import * as Contact from "./scripts/EditContact";

//components
import PopUp from "./components/PopUp.vue";
import AddContact from "./components/AddContact.vue";
import TableItem from "./components/TableItem.vue";
export default defineComponent({
  components: {
    AddContact,
    PopUp,
    TableItem,
  },
  methods: {
   async openPopUp(source:any, i:any) {
      console.log(source, i)
     await PopUpTs.openPopUp();
    },
    closePopUp() {
      PopUpTs.closePopUp();
    },
    openEdit() {
      PopUpTs.openEdit();
    },
    deleteContact() {
      Contact.deleteContact();
    },

  },
});
</script>

<style>
@import "../../styles/style.css";
</style>
