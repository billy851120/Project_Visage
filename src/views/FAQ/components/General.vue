<template>
  <div class="content">
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
      accordion
    >
      <el-collapse-item
        title="What is an FAQ section?"
        name="1"
      >
        <template #icon="{ isActive }">
          <span class="icon-ele">
            <el-icon v-if="isActive"><ArrowUp /></el-icon>
            <el-icon v-else><ArrowDown /></el-icon>
          </span>
        </template>
        <div>
          An FAQ section can be used to quickly answer common questions about
          your business like "Where do you ship to?", "What are your opening
          hours?", or "How can I book a service?".
        </div>
        <ul class="share-link mt-3">
          <li>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </li>

          <li class="ms-3">
            <a href="#"><i class="fa-solid fa-link"></i></a>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item
        title="Why do FAQs matter?"
        name="2"
      >
        <template #icon="{ isActive }">
          <span class="icon-ele">
            <el-icon v-if="isActive"><ArrowUp /></el-icon>
            <el-icon v-else><ArrowDown /></el-icon>
          </span>
        </template>
        <div>
          FAQs are a great way to help site visitors find quick answers to
          common questions about your business and create a better navigation
          experience.
        </div>
        <ul class="share-link mt-3">
          <li>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </li>

          <li class="ms-3">
            <a href="#"><i class="fa-solid fa-link"></i></a>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item
        title="Where can I add my FAQs?"
        name="3"
      >
        <template #icon="{ isActive }">
          <span class="icon-ele">
            <el-icon v-if="isActive"><ArrowUp /></el-icon>
            <el-icon v-else><ArrowDown /></el-icon>
          </span>
        </template>
        <div>
          FAQs can be added to any page on your site or to your Wix mobile app,
          giving access to members on the go.
        </div>
        <ul class="share-link mt-3">
          <li>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </li>

          <li class="ms-3">
            <a href="#"><i class="fa-solid fa-link"></i></a>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref } from "vue";

  const activeNames = ref(["1"]);
  const handleChange = (val: string[]) => {
    console.log(val);
  };

  //數據

  //方法
</script>

<style scoped>
  .icon-ele {
    margin: 0 8px 0 auto;
  }
  ::v-deep(.el-collapse-item) {
    padding-top: 25px;
  }
  ::v-deep(.el-collapse-item button) {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    padding-bottom: 20px;
    color: #000;
  }
  ::v-deep(.el-collapse-item__content) {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #000;
  }
  .el-collapse-item button {
    font-size: 1rem;
    font-weight: normal;
  }
  .share-link {
    display: flex;
  }
  .share-link a {
    font-size: 1rem;
    color: #000;
    padding: 0px 8px;
  }
  .share-link a:hover {
    color: #4c4c4c;
  }
</style>
