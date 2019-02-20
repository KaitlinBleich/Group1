<template>
  <div class="inventory">

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Manage Inventory
          </h1>
          <h2 class="subtitle">
            put the greeting here??????
          </h2>
        </div>
      </div>
    </section>

    <!--create new inventory-->
    <section class="section">
        <div class="container">
            <div class="buttons">
              <a class="button is-light" v-on:click="showAddProductModal()">
                Add Product
              </a>
            </div>
        </div>
    </section>

    <!--add current inventory stats here?-->

     <!--list of current stock-->
    <section class="section">
        <div class="container">

        </div>
    </section>

    <!--add new product-->
    <router-view/>
      <NewProduct v-bind:is-showing="showNewProduct" v-on:success="successAddProduct" v-on:cancel="cancelAddProduct"/>

  </div>

</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NewProduct from "@/components/NewProduct.vue";
import { iProduct } from "@/models";

@Component({
  components: {
    NewProduct
  }
})
export default class Inventory extends Vue {
  public showNewProduct: boolean = false;

  showAddProductModal() {
    this.showNewProduct = true;
  }
  successAddProduct() {
    this.showNewProduct = false;
  }
  cancelAddProduct() {
    this.showNewProduct = false;
  }
}
</script>

