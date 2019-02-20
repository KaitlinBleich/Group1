<template>
  <div class="orders">

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            These are your orders
          </h1>
          <h2 class="subtitle">
            put the greeting here??????
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="buttons">
              <a class="button is-light" v-on:click="showOrderNumberModal">
                Enter Order Number
              </a>
            </div>
        </div>
    </section>


  <router-view/>
    <OrderConfirmation v-bind:is-showing="showOrderNumber" v-on:success="showOrderNumberModal" v-on:cancel="cancelOrderNumberModal"/>


  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { iOrderItem, iOrder, iAddress } from "@/models";
import OrderConfirmation from "@/components/OrderConfirmation.vue";

@Component({
  components: {
    OrderConfirmation
  }
})
export default class Orders extends Vue {

//temp_address : iAddress = {0, "","","","","",""};
  
  temp_address : iAddress = {id: 0,
                              firstName: "",
                              lastName: "",
                              street: "",
                              city: "",
                              state:  "",
                              zip:""};

  order : iOrder = {
    id: 0,
    orderNumber: "", 
    status: "",
    date: new Date(),
    subtotal: 0,
    discount: 0,
    shipping: 0,
    total: 0,
    address: this.temp_address,
    orderItems: [],
  }

  public showOrderNumber: boolean = false;
  showOrderNumberModal() {
    this.showOrderNumber = true;
  }
  successOrderNumberModal() {
    this.showOrderNumber = false;
  }
  cancelOrderNumberModal() {
    this.showOrderNumber = false;
  }

}
</script>