<template>
  <div class="cart">
    
    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
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
              <a href="/checkout">temp link to checkout page</a>
            </div>

            <!--order summary-->
            <div class="column">
              <div class="container">
                <OrderSummary />
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
import { iOrderItem, iOrderSummary} from "@/models";
import OrderSummary from "@/components/OrderSummary.vue";

@Component({
  components: {
    OrderSummary
  }
})
export default class Cart extends Vue {

  

}
</script>