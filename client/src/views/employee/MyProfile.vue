<template>
  <div class="myprofile">
    <!--not exactly sure what this does???-->
    <Profile v-if="user" v-bind:user="user"/>

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
             My Profile
          </h1>
          <h2 class="subtitle">
            Welcome, <span>{{firstname}}</span>!
          </h2>
        </div>
      </div>
    </section>

    <!--employee info-->
    <section class="section">
          <div class="container">
              <table class="table">
                <tbody>
                  <tr>
                    <td class="subtitle"><strong>Name</strong></td>
                    <td>{{fullname}}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="subtitle"><strong>EmpID</strong></td>
                    <td> {{empid}} </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="subtitle"><strong>Role</strong></td>
                    <td> {{role}} </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="subtitle"><strong>Username</strong></td>
                    <td> {{username}} </td>
                    <td>
                      <a class="button is-light is-small">UPDATE</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="subtitle"><strong>Password</strong></td>
                    <td> {{password}} </td>
                    <td>
                      <a class="button is-light is-small">UPDATE</a>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
    </section>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import axios, { AxiosResponse } from "axios";
import { APIConfig } from "@/utils/api.utils";
import { iUser } from "@/models/user.interface";

@Component
export default class MyProfile extends Vue {
  get user() {
    return this.$store.state.user;
  }
  mounted() {
    if (!this.$store.state.user) {
      //this.$router.push({ name: "home" });
    }
  }

  firstname: string = this.$store.state.user.firstName;
  lastname : string = this.$store.state.user.lastName;
  fullname : string = this.$store.getters.fullName;
  username : string = this.$store.state.user.username;
  password : string = this.$store.state.user.password;
  role : string = this.$store.state.user.role;
  empid : number = this.$store.state.user.id;


}
</script>
