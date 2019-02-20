<template>
  <div class="employees">

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Manage Employees
          </h1>
          <h2 class="subtitle">
            put the greeting here??????
          </h2>
        </div>
      </div>
    </section>

     <!--create new employee-->
    <section class="section">
        <div class="container">
            <div class="buttons">
              <a class="button is-light" v-on:click="showAddEmployeeModal">
                Add Employee
              </a>
            </div>
        </div>
    </section>

    <router-view/>
    <NewEmployee v-bind:is-showing="showAddEmployee" v-on:success="successAddEmployee" v-on:cancel="cancelAddEmployee"/>

  </div>
</template>


<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import NewEmployee from "@/components/NewEmployee.vue";

@Component({
  components: {
    NewEmployee
  }
})
export default class Employees extends Vue {

  public showAddEmployee: boolean = false;

  showAddEmployeeModal() {
    this.showAddEmployee = true;
  }
  successAddEmployee() {
    this.showAddEmployee = false;
  }
  cancelAddEmployee() {
    this.showAddEmployee = false;
  }

}
</script>