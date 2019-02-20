<template>
  <div class="cart">
    
    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Your Cart
          </h1>
          <h2 class="subtitle">
            order summary and stuff
          </h2>
        </div>
      </div>
    </section>

    <!--Add content-->
    <section class="section">
        <div class="container">
          <div class="columns">

            <!--Itmes in cart-->
            <div class="column is-four-fifths">
              <!--list of current items in cart-->

              <a href="/checkout">
                temp link to checkout
              </a>
            </div>

            <!--order summary-->
            <div class="column">
              <div class="container">
                <h1 class="subtitle">
                  Order Summary
                </h1>
                <table class="table">
                  <tr>
                    <td>SubTotal</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>123</td>
                  </tr>
                  <tr class="is-selected">
                    <td>Total</td>
                    <td>123</td>
                  </tr>
                </table>
              </div>
            </div>

          </div>
        </div>
    </section>
    
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { iOrderItem } from "@/models";


@Component
export default class Cart extends Vue {


  //create a list of iOrderItems

 
}
</script>