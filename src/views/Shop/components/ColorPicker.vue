<template>
  <label
    v-on:mouseenter="sendColor($event)"
    v-on:mouseleave="clearColor()"
    class="colorPick_container"
  >
    <input
      type="checkbox"
      :name="colorName"
      :value="colorName.toLowerCase()"
      v-model="checkedColor"
      id=""
    />
    <span class="colorPick"></span>
  </label>
</template>

<script setup lang="ts" name="">
  //引入
  defineProps(["colorName", "colorValue", "sendColor", "clearColor"]);

  //數據
  const checkedColor = defineModel();

  //方法
</script>

<style scoped>
  .colorPick_container {
    padding: 0;
    position: relative;
    display: inline-block;
  }

  .colorPick_container input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .colorPick {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 28px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .colorPick:hover::before {
    opacity: 0.75;
  }

  .colorPick::before {
    content: "";
    position: absolute;
    width: 80%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: v-bind(colorValue);
    border-radius: 50%;
    border: 1px solid #c9c9c9;
  }

  .colorPick_container input:checked ~ .colorPick {
    border: 1px solid CurrentColor;
  }
</style>
