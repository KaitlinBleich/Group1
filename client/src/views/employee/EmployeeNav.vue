<template>
  <div>
      
    <!--employee navigation bar-->
    <nav class="navbar" role="navigation" aria-label="dropdown navigation">

        <!--logo-->
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img src="../../assets/logo+name.png" alt="logo" width="112" height="28">
        </a>
      </div>

      <!--links-->
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item " to="/employee" exact-active-class="is-active">Home</router-link> 
          <router-link class="navbar-item " to="/employee/orders" exact-active-class="is-active">Orders</router-link> 
          <router-link class="navbar-item" to="/employee/inventory" exact-active-class="is-active">Inventory</router-link> 
          <router-link class="navbar-item" to="/employee/services" exact-active-class="is-active">Services</router-link>
          <router-link class="navbar-item" to="/employee/storeinfo" exact-active-class="is-active">Store Info</router-link>
          <router-link class="navbar-item" to="/employee/employees" exact-active-class="is-active">Employees</router-link>
        </div>

        <!--right side-->
        <div class="navbar-end">
          <div class="navbar-item">

            <!--Put Employee Profile Button Here-->

            <div class="buttons">
                <router-link class="button is-light" to="/employee/myprofile" exact-active-class="is-active">Profile</router-link>
              <a class="button is-light">
                LogOut
              </a>
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
        <router-link class="navbar-item" to="/" exact-active-class="is-active">temp link to customer pages</router-link>
      </div>
    </footer>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Signup from "@/components/Signup.vue";
import Login from "@/components/Login.vue";

@Component({
  components: {
    Signup,
    Login
  }
})
export default class CustomerNav extends Vue {
  public showSignup: boolean = false;
  public showLogin: boolean = false;

  showSignupModal() {
    this.showSignup = true;
  }
  successSignup() {
    this.showSignup = false;
  }
  cancelSignup() {
    this.showSignup = false;
  }
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
