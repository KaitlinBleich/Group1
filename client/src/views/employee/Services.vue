<template>
  <div class="services">

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Manage Services
          </h1>
          <h2 class="subtitle">
            put the greeting here??????
          </h2>
        </div>
      </div>
    </section>

     <!--create new service-->
    <section class="section">
        <div class="container">
            <div class="buttons">
              <a class="button is-light" >
                Add Service
              </a>
            </div>
        </div>
    </section>

    <!--show current list of service
        - allow user to change order?
        - allow use to delete order?
    -->
    <section class="section">
        <div class="container">

        </div>
    </section>

  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
@Component
export default class Services extends Vue {

}
</script>