<template>
  <div class="wrap-btns">
    <button
      v-if="btn1 !== 'null'"
      class="btn btn__neutral"
      @click.prevent="btn1Click('abc')"
    >
      <i class="fa fa-close"></i> {{ btn1 }}
    </button>

    <button
      v-if="btn2 !== 'null'"
      class="btn"
      :disabled="disabled"
      @click.prevent="btn2Click('abc')"
    >
      {{ btn2 }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BtnRow',
  props: {
    btn1: {
      type: String,
    },
    btn2: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    btn1Click: {
      type: Function,
      required: false,
      default: () => 0,
    },
    btn2Click: {
      type: Function,
      required: false,
      default: () => 0,
    },
  },
};
</script>
