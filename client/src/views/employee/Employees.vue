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

     <!--show existing employees-->
    <section class="section">
        <div class="container">
            <table class="table is-fullwidth">
              <thead>
                <th>Name</th>
                <th>Username</th>
                <th>Role</th>
                <th>Delete</th>
              </thead>
              <tbody>
                <tr v-for="(emp,index) in employee_list" v-bind:key="index">
                  <td> {{emp.firstName}} {{emp.lastName}}</td>
                  <td>{{emp.username}}</td>
                  <td>{{emp.role}}</td>
                  <td><button class="delete" aria-label="close" ></button></td>
                </tr>
              </tbody>
            </table>
        </div>
    </section>

    <router-view/>
    <NewEmployee v-bind:is-showing="showAddEmployee" v-on:success="successAddEmployee" v-on:cancel="cancelAddEmployee"/>

  </div>
</template>


<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import axios, { AxiosError, AxiosResponse } from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iUser } from "@/models";
import NewEmployee from "@/components/NewEmployee.vue";

@Component({
  components: {
    NewEmployee
  }
})
export default class Employees extends Vue {

    error: string | boolean = false;
    employee_list: iUser[] = [];

    mounted(){
        this.error = false;
        axios
        .get(APIConfig.buildUrl("/api/users"), {
          headers : {
            token: this.$store.state.userToken
          }
        })
        .then((response: AxiosResponse) =>{
            this.employee_list = response.data.users;
            console.log(this.employee_list);
        })
        .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
      });
    }



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