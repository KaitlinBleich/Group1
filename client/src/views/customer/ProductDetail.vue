<template>
  <div class="productdetail">
    
    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Product Name
          </h1>
          <h2 class="subtitle">
            Brand <br>
            $0000.00
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
            <div class="container is-centered">
                <h3 class="subtitle">Product Description:</h3>
                <p> im a bike that is make of bike parts that is great for bike riding</p>
            </div>
            <div class="container is-centered">
                <p>
                  <br><br><br><br>
                  Available for In-Store Pickup</p>
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