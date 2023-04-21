<template>
  <section>
    <h3>{{ title }}</h3>
    <p class="desc">{{ info }}</p>
    <table>

      <tr>
        <th v-for="(col, i) in columns" :key="i">{{ col }}</th>
      </tr>

      <tr @click="rowClick('abc')" v-for="(object, k) in data" :key="k">
        <td v-for="(value, k) in object" :key="k">{{ value}}</td>
      </tr>

    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    info: {
      type: String,
    },
    columns: {
      type: Array,
    },
    data: {
      type: Array,
    },
    rowClick: {
      type: Function,
      required: false,
      default: () => 0,
    },
  },
  methods: {
    getFields(contact: any) {
      let fields = [
        {
          label: "Name",
          value: contact.name,
        },
        {
          label: "Last name",
          value: contact.lastName,
        },
        {
          label: "E-mail",
          value: contact.email,
        },
        {
          label: "Country",
          value: contact.country,
        },
      ];

      return fields;
    },
  },
});
</script>
