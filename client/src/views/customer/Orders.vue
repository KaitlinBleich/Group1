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
              <a class="button is-light">
                Enter Order Number
              </a>
            </div>
        </div>
    </section>

  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
@Component
export default class Orders extends Vue {

}
</script>