<template>
  <div class="wrap__buttons">
    <button class="btn btn__neutral" @click="btn1Click('abc')">
      <i class="fa fa-close"></i> {{ btn1 }}
    </button>
    <button class="btn" @click="btn2Click('abc')"><i class="fa fa-arrow"></i> {{ btn2 }}</button>
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