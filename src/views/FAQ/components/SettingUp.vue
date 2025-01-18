<template>
  <div class="content">
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
      accordion
    >
      <el-collapse-item
        title="How do I add a new question & answer?"
        name="1"
      >
        <template #icon="{ isActive }">
          <span class="icon-ele">
            <el-icon v-if="isActive"><ArrowUp /></el-icon>
            <el-icon v-else><ArrowDown /></el-icon>
          </span>
        </template>
        <ol class="mb-4">
          <li>To add a new FAQ follow these steps:</li>
          <li>1. Manage FAQs from your site dashboard or in the Editor</li>
          <li>2. Add a new question & answer</li>
          <li>3. Assign your FAQ to a category</li>
          <li>4. Save and publish.</li>
        </ol>
        <div>You can always come back and edit your FAQs.</div>
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
        title="Can I insert an image, video, or GIF in my FAQ?"
        name="2"
      >
        <template #icon="{ isActive }">
          <span class="icon-ele">
            <el-icon v-if="isActive"><ArrowUp /></el-icon>
            <el-icon v-else><ArrowDown /></el-icon>
          </span>
        </template>
        <ol class="mb-4">
          <li>Yes. To add media follow these steps:</li>
          <li>1. Manage FAQs from your site dashboard or in the Editor</li>
          <li>2. Create a new FAQ or edit an existing one</li>
          <li>
            3. From the answer text box click on the video, image or GIF icon
          </li>
          <li>4. Add media from your library and save.</li>
        </ol>

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
        title="How do I edit or remove the 'Frequently Asked Questions' title?"
        name="3"
      >
        <template #icon="{ isActive }">
          <span class="icon-ele">
            <el-icon v-if="isActive"><ArrowUp /></el-icon>
            <el-icon v-else><ArrowDown /></el-icon>
          </span>
        </template>
        <div>
          You can edit the title from the FAQ 'Settings' tab in the Editor. To
          remove the title from your mobile app go to the 'Site & App' tab in
          your Owner's app and customize.
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
    letter-spacing: 0.5px;
    padding-bottom: 20px;
    color: #000;
  }
  ::v-deep(.el-collapse-item__content) {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
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
