<template>
  <div class="orders">

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Manage Orders
          </h1>
          <h2 class="subtitle">
            put the greeting here??????
          </h2>
        </div>
      </div>
    </section>

    <!--Add the Shopping Links here-->
    <section class="section">
        <div class="container">

            <!--display the list of orders-->
            <table class="table">

            </table>
        </div>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { iOrder, iOrderItem } from "@/models";

@Component
export default class Orders extends Vue {
 

}
</script>