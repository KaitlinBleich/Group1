<template>
  <div class="about">
    
    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            About Us
          </h1>
          <h2 class="subtitle">
            subtitle?
          </h2>
        </div>
      </div>
    </section>

    <!--Add content-->
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <!--not sure how to make this picture larger?????-->
            <figure class="image is-5by4">
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
          </div>
          <div class="column">
            <div class="container">
              <h1 class="subtitle"><strong>About Our Business</strong></h1>
              <div class="content">
                <p>
                  <!--PULL DATA FROM DATABASE-->
                  For over 100 years, FoxCycle has been providing the best bikes <br>
                  and bike service to the residents of San Luis Obispo County. 
                  <br>BIke bikes bikes bikes yes bikes<br>
                  <br>
                  <br>
                </p>
              </div>
            </div>
            <div class="container">
              <!--<h1 class="subtitle"><strong>Store Info</strong></h1>-->
              <div class="content">
                <p>
                  <!--PULL DATA FROM DATABASE - display in list form???-->
                  <strong>Store Location:</strong><br>123 Address Drive <br> San Luis Obispo, CA 93405<br>
                  <br><strong> Contact Info:</strong><br>Phone: (123) 456 - 789 <br> email: email@email.com<br>
                  <br><strong>Store Hours:</strong><br> Mon-Fri: 9am - 6pm <br> Sat-Sun: 10am-5pm <br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { iProduct } from "@/models";

@Component
export default class ProductDetail extends Vue {

}
</script>