<template>
  <div class="wrap__buttons">
    <button class="btn btn__neutral" @click.prevent="btn1Click('abc')" v-if="btn1 !== 'null'">
      <i class="fa fa-close"></i> {{ btn1 }}
    </button>

    <button class="btn" :disabled="disabled" @click.prevent="btn2Click('abc')">{{ btn2 }}</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    btn1: {
      type: String,
    },
    btn2: {
      type: String,
    },
    disabled: {
type: Boolean,
default: false
    },
    btn1Click:{
        type: Function,
      required: false,
      default: () => 0,
    },
    btn2Click:{
        type: Function,
      required: false,
      default: () => 0,
    }
  },
};
</script>