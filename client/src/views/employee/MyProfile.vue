<template>
  <div class="myprofile">
    <!--not exactly sure what this does???-->
    <Profile v-if="user" v-bind:user="user"/>

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
             My Profile
          </h1>
          <h2 class="subtitle">
            Welcome, _your name here_.
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
                    <td>_first last_</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="subtitle"><strong>EmpID</strong></td>
                    <td> _12345_ </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="subtitle"><strong>Email</strong></td>
                    <td> hello@email.com </td>
                    <td>
                      <a class="button is-light is-small">UPDATE</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="subtitle"><strong>Username</strong></td>
                    <td>_username_</td>
                    <td>
                      <a class="button is-light is-small">UPDATE</a>
                    </td>
                  </tr>
                  <tr>
                    <td class="subtitle"><strong>Password</strong></td>
                    <td>***********</td>
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

import Profile from "@/components/Profile.vue";

@Component({ components: { Profile } })
export default class MyProfile extends Vue {
  get user() {
    return this.$store.state.user;
  }
  mounted() {
    if (!this.$store.state.user) {
      //this.$router.push({ name: "home" });
    }
  }
}
</script>
