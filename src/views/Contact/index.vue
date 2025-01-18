<template>
  <div class="banner"><h1>Get in Touch</h1></div>
  <div class="container-fluid p-0">
    <div class="container_box row">
      <div class="content_title col-4">
        <div>
          <h6>Inquiries</h6>
          <p>
            For questions regarding our products and services you can also
            contact us by filling out this form.
          </p>
        </div>
      </div>
      <div class="content_form col-8">
        <div>
          <h6>Fill in Your Details</h6>
          <div class="form_box">
            <form action="">
              <div class="form_column pb-4">
                <div class="form_item">
                  <label for=""> First name * </label>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div class="form_item">
                  <label for=""> Last name * </label>
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div class="form_column mb-4">
                <div class="form_item">
                  <label for=""> Email * </label>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div class="form_item">
                  <label for=""> Last Subject</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div class="form_column mb-4">
                <div class="form_item">
                  <label for=""> Leave us a message </label>
                  <div>
                    <textarea
                      name=""
                      id=""
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="form_submit">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入

  //數據

  //方法
</script>

<style scoped>
  .form_submit button {
    background-color: transparent;
    width: 100%;
    border: 1px solid #0a1fe0;
    color: #0a1fe0;
    padding: 14px 0;
    border-radius: 3px;
    font-size: 0.9rem;
    font-weight: normal;
  }
  .form_submit button:hover {
    background-color: #0a1fe0;
    color: #fff;
    transition: all 0.3s;
  }
  .form_item textarea {
    resize: none;
    width: 100%;
    height: 100px;
    border-radius: 3px;
    padding: 10px;
    border: 1px solid #000;
  }
  .form_item {
    flex: 1;
    min-width: 200px;
  }
  .form_box {
    width: 537px;
  }
  .form_column input[type="text"] {
    width: 100%;
    border: 1px solid #000;
    border-radius: 3px;
    padding: 10px 10px;
  }
  .form_column {
    display: flex;
    flex-wrap: wrap;
    gap: 0 24px;
  }
  .form_column label {
    color: #0a1fe0;
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: 7px;
  }
  .content_form {
    display: flex;
    justify-content: center;
  }
  .content_form > div {
    margin-top: 150px;
  }
  .content_title div {
    width: 240px;
    margin-top: 150px;
  }
  .content_title div h6,
  .content_form div h6 {
    color: #0a1fe0;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    font-weight: normal;
    margin-bottom: 45px;
  }
  .content_form input:hover,
  .content_form textarea:hover {
    border: 1px solid #0a1fe0;
  }
  .content_form input:focus,
  .content_form textarea:focus {
    outline: none;
    border: 1px solid #0a1fe0;
  }
  .content_title div p {
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 0.8px;
    padding-bottom: 20px;
    color: #000;
    line-height: 1.7;
  }
  .content_title {
    display: flex;
    justify-content: center;
    border-right: 1px solid #000;
  }
  .container_box {
    min-height: 707px;
    border: 1px solid #000;
    margin: 40px 0;
  }
  .banner {
    width: 100%;
    background-color: #fdf8ec;
    text-align: center;
    padding: 20px 0;
  }
  .banner h1 {
    color: #0a1fe0;
    font-size: 4rem;
    font-weight: normal;
    letter-spacing: 10px;
  }
</style>
