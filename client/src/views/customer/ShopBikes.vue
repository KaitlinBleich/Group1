<template>
  <div class="shopbikes">

    <!--page banner-->
    <section class="hero is-small is-bold">
      <div class="hero-body">
        <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title"> Shop All Bikes</h1>
                    <h2 class="subtitle">Greeting message?</h2>
                </div>
            </div>
      </div>
    </section>

    <!--trying to do the tile things-->
     <section class="section">

      <div class="container">
      <div class="tile is-ancestor">

        <div class="tile is-2"></div>

        <div class="tile is-8">
          <div class="tile is-vertical is-parent">
            <div class="tile is-child ">
              <router-link class="navbar-item  " to="/shopbikes" exact-active-class="is-active"><h1 class="subtitle">Mountain</h1></router-link>
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/480x320.png">
              </figure>
            </div>
            <div class="tile is-child ">
              <router-link class="navbar-item  " to="/shopbikes" exact-active-class="is-active"><h1 class="subtitle">Path</h1></router-link>
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/480x320.png">
              </figure>
            </div>
          </div>
          <div class="tile is-vertical is-parent">
            <div class="tile is-child ">
              <router-link class="navbar-item  " to="/shopbikes" exact-active-class="is-active"><h1 class="subtitle">Kids</h1></router-link>
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/480x320.png">
              </figure>
            </div>
            <div class="tile is-child ">
              <router-link class="navbar-item  " to="/shopbikes" exact-active-class="is-active"><h1 class="subtitle">All Bikes</h1></router-link>
              <figure class="image is-3by2">
                <img src="https://bulma.io/images/placeholders/480x320.png">
              </figure>
            </div>
          </div>
        </div>

      </div>
      </div>
    </section>

  </div>
</template>


<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
@Component
export default class ShopBikes extends Vue {

}
</script>
