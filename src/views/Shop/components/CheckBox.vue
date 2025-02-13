<template>
  <label class="container">
    <input
      type="checkbox"
      :name="checkTitle"
      :id="checkTitle"
      :value="checkTitle"
      v-model="checkedType"
    />
    <span class="checkmark">
      <i class="fa-solid fa-check"></i>
    </span>
    <span class="checkTitle">
      {{ checkTitle }}
    </span>
  </label>
</template>

<script setup lang="ts" name="">
  //引入

  //數據
  defineProps(["checkTitle"]);
  const checkedType = defineModel();

  //方法
</script>

<style scoped>
  .container {
    display: block;
    position: relative;
    padding-left: 15px;
    cursor: pointer;
    user-select: none;
    margin: 5px 0;
  }

  .container input {
    opacity: 0;
  }

  .checkmark {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: 1px solid #000;
  }

  .checkmark .fa-check {
    position: absolute;
    top: 3px;
    left: 3px;
    font-size: 0.55rem;
    color: #0a1fdb;
    opacity: 0;
  }

  .container input:checked ~ .checkmark .fa-check {
    opacity: 1;
  }

  input[type="checkbox"]:checked .customCheckbox {
    background: #000;
  }

  .container .checkTitle {
    font-size: 1rem;
  }
</style>
