<template>
  <section class="table-item__popup" @click="closePopUp">
    <div class="table-item__popup--content" @click.stop>
      <ul v-for="(field, i) in fields" :key="i">
        {{
          field
        }}
      </ul>

      <div class="wrap__buttons">
        <button class="btn btn__neutral">
          <i class="fa fa-close"></i> Cancel
        </button>
        <button class="btn"><i class="fa fa-trash-o"></i> Go</button>
      </div>
    </div>
  </section>
</template>
  
  <script lang="ts">
export default {
  name: "PopUp",
  props: {
    fields: {
      type: Array,
      required: true,
    },
  },
  methods: {
    closePopUp() {
      this.$emit("closePopUp", true);
    },
  },
};
</script>