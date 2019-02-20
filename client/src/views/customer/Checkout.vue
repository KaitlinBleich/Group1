<template>
  <div class="checkout">

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Checkout
          </h1>
          <h2 class="subtitle">
            put the greeting here??????
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="columns is-centered">

                <div class="column is-half">
                    <form>  
                        <!--<form  v-on:submit.prevent="onSubmit">-->
                        <p v-if="error">{{ error }}</p>

                        <!--Payment-->
                        <h1 class="subtitle">Payment Method</h1>
                        <label class="label">Name</label>
                        <div class="field-body">
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="first">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="last">
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Card Number</label>
                            <div class="control ">
                                <input class="input" type="text" placeholder="#### #### #### ####">
                            </div>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <label class="label">Exp Date</label>
                                <div class="control ">
                                    <input class="input" type="month" >
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">CVC</label>
                                <div class="control ">
                                    <input class="input" type="number" placeholder="###">
                                </div>
                            </div>
                        </div>
                        
                        <!--not sure how to add spacing???-->
                        <p><br><br></p>
                        
                        <!--Shipping Info-->
                        <h1 class="subtitle">Shipping Information</h1>
                        <label class="label">Name</label>
                        <div class="field-body">
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="first">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="last">
                                </div>
                            </div>
                        </div>
                        <label class="label">Address</label>
                        <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="Street">
                                </div>
                            </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="State">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="Country">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="Zipcode">
                                </div>
                            </div>
                        </div>

                        <!--not sure how to add spacing???-->
                        <p><br><br></p>

                        <!--Billing Info-->
                        <h1 class="subtitle">Billing Information</h1>  
                        <div class="field">
                        <div class="control">
                            <label class="checkbox">
                            <input type="checkbox">
                            Same as Shipping Information
                            </label>
                        </div>
                        </div>
                        <label class="label">Name</label>
                        <div class="field-body">
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="first">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="last">
                                </div>
                            </div>
                        </div>
                        <label class="label">Address</label>
                        <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="Street">
                                </div>
                            </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="State">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="Country">
                                </div>
                            </div>
                            <div class="field">
                                <div class="control ">
                                    <input class="input" type="text" placeholder="Zipcode">
                                </div>
                            </div>
                        </div>

                        <!--not sure how to add spacing???-->
                        <p><br><br></p>

                        <!--submit button-->
                        <div class="field is-grouped is-grouped-centered">
                            <p class="control">
                                <a class="button is-primary">
                                Submit
                                </a>
                            </p>
                            <p class="control">
                                <a class="button is-light">
                                Cancel
                                </a>
                            </p>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </section>


  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { iOrder, iOrderSummary } from "@/models";

@Component
export default class Checkout extends Vue {

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

}
</script>