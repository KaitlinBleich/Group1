<template>
  <div id="app">

    <!--Reroute to homepage-->
    <router-view/>
    <!--if customer go to customer pages-->
    <!--if employee go to employee pages-->

  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

export default class App extends Vue {}
</script>


<style lang="scss">
@import "~bulma/css/bulma.css";
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/grid/columns.sass";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
