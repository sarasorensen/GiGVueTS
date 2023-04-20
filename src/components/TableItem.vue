<template>
  <table>
    <h3>{{ title }}</h3>
    <tr>
      <th v-for="(col, i) in columns" :key="i">{{ col }}</th>
    </tr>

    <tr @click="rowClick('abc')">
      <td v-for="(d, i) in data" :key="i">{{ d }}</td>
    </tr>

  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    rowClick: {
      type: Function,
      required: false,
      default: '-'
    },
  },
});
</script>