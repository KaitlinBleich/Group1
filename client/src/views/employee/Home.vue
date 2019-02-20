<template>
  <div class="home">

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome, Employee.
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
          <nav class="panel">

            <!--
            <p class="panel-heading">
              Choose a path
            </p>

          -->

            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              <router-link class="navbar-item " to="/employee/orders" exact-active-class="is-active"> <h1 class="subtitle">Manage Orders</h1></router-link> 
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              <router-link class="navbar-item" to="/employee/inventory" exact-active-class="is-active"><h1 class="subtitle">Manage Inventory</h1></router-link>
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              <router-link class="navbar-item" to="/employee/services" exact-active-class="is-active"><h1 class="subtitle">Manage Services</h1></router-link>
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              <router-link class="navbar-item" to="/employee/storeinfo" exact-active-class="is-active"><h1 class="subtitle">Manage Store Info</h1></router-link>
            </a>
            <!--only show if admin is logged in-->
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
              </span>
              <router-link class="navbar-item" to="/employee/employees" exact-active-class="is-active"><h1 class="subtitle">Manage Employees</h1></router-link>
            </a>
          </nav>
        </div>
    </section>

  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { iUser } from "@/models";


@Component
export default class Home extends Vue {
 
}
</script>