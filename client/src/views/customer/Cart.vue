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

            <!--Items in cart-->
            <div class="column is-four-fifths">
                <OrderList/>
            </div>

            <!--order summary-->
            <div class="column">
              <div class="container">
                <OrderSummary />
                <button class="button"><a href="/checkout">CHECKOUT</a></button>
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
import OrderList from "@/components/OrderList.vue";

@Component({
  components: {
    OrderSummary,
    OrderList
  }
})
export default class Cart extends Vue {

  

}
</script>