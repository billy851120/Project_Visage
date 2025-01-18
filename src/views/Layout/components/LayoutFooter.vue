<template>
  <div class="app-footer">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-3 footer-content_logo">
          <div class="logo">
            <a
              class="textColor_1"
              href="#"
              >VISAGE</a
            >
          </div>
        </div>
        <div class="col-3 footer-content">
          <h3>Shop</h3>
          <ul>
            <li><a href="#">Shop all</a></li>
            <li><a href="#">Adults</a></li>
            <li><a href="#">kids</a></li>
          </ul>
        </div>
        <div class="col-3 footer-content">
          <h3>Policy</h3>
          <ul>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Store Policy</a></li>
            <li><a href="#">Payment Methods</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="col-3 footer-content">
          <h3>Contact Us</h3>
          <ul>
            <li>Tel. 123-456-7890</li>
            <li><a href="#">info@mysite.com</a></li>
          </ul>
          <div class="footer_mesh">
            <ul>
              <li>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i class="fa-brands fa-pinterest"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 footer-bottom">
          <p>
            © 2035 by Visage. Powered and secured by
            <span><a href="#">Wix</a></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
  //引入
  import { ref, reactive } from "vue";

  //數據

  //方法
</script>

<style scoped>
  .logo {
    text-align: center;
  }

  .logo a {
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 6px;
  }

  .footer-content {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border-right: 1px solid #c7c7c7;
    border-top: 1px solid #c7c7c7;
    min-height: 398px;
  }

  .footer-content_logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #c7c7c7;
    border-top: 1px solid #c7c7c7;
    min-height: 398px;
    border-left: 1px solid #c7c7c7;
  }

  .footer-content h3 {
    color: #0a1fe0;
    margin-bottom: 20px;
  }

  .footer-content ul a {
    letter-spacing: 1px;
    font-size: 0.9rem;
    text-decoration: none;
    color: #000;
  }

  .footer-content li {
    text-align: center;

    padding: 8px 0;
  }

  .footer-bottom {
    font-size: 0.9rem;
    letter-spacing: 1px;
    padding: 15px 0;
    text-align: center;
    border: 1px solid #c7c7c7;
    color: #000;
  }

  .footer-bottom a {
    color: #000;
  }

  .footer_mesh {
    margin-top: 36px;
  }

  .footer_mesh li {
    display: inline-block;
  }

  .footer_mesh li a {
    font-size: 1.5rem;
    padding: 0 4px;
  }
</style>
