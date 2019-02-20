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
              <a class="button is-light" v-on:click="showAddServiceModal">
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

    <router-view/>
    <NewService v-bind:is-showing="showAddService" v-on:success="successAddService" v-on:cancel="cancelAddService"/>

  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { iService } from "@/models";
import NewService from "@/components/NewService.vue";

@Component({
  components: {
    NewService
  }
})
export default class Services extends Vue {

  public showAddService: boolean = false;
  showAddServiceModal() {
    this.showAddService = true;
  }
  successAddService() {
    this.showAddService = false;
  }
  cancelAddService() {
    this.showAddService = false;
  }

}
</script>