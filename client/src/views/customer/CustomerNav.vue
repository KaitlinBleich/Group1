<template>
  <div>
      
    <!--customer navigation bar-->
    <nav class="navbar" role="navigation" aria-label="dropdown navigation">

        <!--logo-->
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </div>

      <!--links-->
      <div class="navbar-menu">
        <!--left side-->
        <div class="navbar-start">
          <router-link class="navbar-item " to="/" exact-active-class="is-active">Home</router-link> 
          <router-link class="navbar-item" to="/about" exact-active-class="is-active">About</router-link>
          <router-link class="navbar-item " to="/shopall" exact-active-class="is-active">Shop All</router-link>
          <div class="navbar-item has-dropdown is-hoverable"> 
              <router-link class="navbar-item  " to="/shopbikes" exact-active-class="is-active">Shop Bikes</router-link>
              <div class="navbar-dropdown">
                  <router-link class="navbar-item" to="/shopbikes" exact-active-class="is-active">Mountain</router-link>
                  <router-link class="navbar-item" to="/shopbikes" exact-active-class="is-active">Path</router-link>
                  <router-link class="navbar-item" to="/shopbikes" exact-active-class="is-active">Kids</router-link>
              </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable"> 
              <router-link class="navbar-item " to="/shopparts" exact-active-class="is-active">Shop Parts</router-link>
              <div class="navbar-dropdown">
                  <router-link class="navbar-item" to="/shopparts" exact-active-class="is-active">Idk</router-link>
                  <router-link class="navbar-item" to="/shopparts" exact-active-class="is-active">Idk</router-link>
                  <router-link class="navbar-item" to="/shopparts" exact-active-class="is-active">Idk</router-link>
                  <router-link class="navbar-item" to="/shopparts" exact-active-class="is-active">Idk</router-link>
                  <router-link class="navbar-item" to="/shopparts" exact-active-class="is-active">Idk</router-link>
              </div>
          </div>
          <router-link class="navbar-item" to="/services" exact-active-class="is-active">Services</router-link>
        </div>

        <!--right side-->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Search">
              </p>
              <p class="control">
                <a class="button is-light">Search</a>
              </p>
          </div>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <router-link class="navbar-item" to="/orders" exact-active-class="is-active">
                <a class="button is-light">Orders</a>
              </router-link>
              <router-link class="navbar-item" to="/cart" exact-active-class="is-active">
                <a class="button is-light">Cart</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </nav>
    

    <router-view/>
    <Login v-bind:is-showing="showLogin" v-on:success="successLogin()" v-on:cancel="cancelLogin()"/>

    <!--footer - not fixed-->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>FoxCycle</strong> <br> store info and what not
        </p>
        <div v-if="this.$store.getters.isLoggedIn">
          <p>Logged in as {{ this.$store.getters.fullName }}</p>
          <router-link class="button is-light" to="/employee">Go to employee pages</router-link>
        </div>
        <div v-else>
          <a class="button is-light" v-on:click="showLoginModal()">
              Log in
          </a>
        </div>
        <router-link class="navbar-item" to="/employee" exact-active-class="is-active">temp link to employee pages</router-link>
      </div>
    </footer>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Login from "@/components/Login.vue";

@Component({
  components: {
    Login
  }
})
export default class CustomerNav extends Vue {
  public showLogin: boolean = false;

  showLoginModal() {
    this.showLogin = true;
  }
  successLogin() {
    this.showLogin = false;
  }
  cancelLogin() {
    this.showLogin = false;
  }
}
</script>


<style lang="scss">
@import "~bulma/css/bulma.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
