<template>
  <modal
    v-bind:is-showing="isShowing"
    title="Add an Employee"
    success-button="Submit"
    v-on:success="success"
    v-on:cancel="cancel"
  >
    <form v-on:submit.prevent="onSubmit">
      <p v-if="error">{{ error }}</p>
      <div class="field">
        <label class="label">First name</label>
        <div class="control">
          <input class="input" type="text" placeholder="First Name" v-model="newuser.firstName">
        </div>
      </div>
      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last name" v-model="newuser.lastName">
        </div>
      </div>
      <div class="field">
        <label class="label">Employee ID</label>
        <div class="control">
          <input class="input" type="number" placeholder="####?" v-model="newuser.id">
        </div>
      </div>
      <div class="field">
            <label class="label">Role</label>
            <div class="control">
                <div class="select">
                <select v-model="newuser.role">
                    <option>EMPLOYEE</option>
                    <option>ADMIN</option>
                </select>
                </div>
            </div>
        </div>
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" placeholder="Username" v-model="newuser.username">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="text" placeholder="Password" v-model="newuser.password">
        </div>
      </div>
    </form>

  </modal>
</template>

<script lang="ts">
import axios, { AxiosError, AxiosResponse } from "axios";
import { APIConfig } from "../utils/api.utils";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Modal from "./Modal.vue";
import { iUser } from "@/models";

@Component({
  components: {
    Modal
  }
})
export default class NewEmployee extends Vue {

  error: string | boolean = false;
  @Prop(Boolean) isShowing: boolean = false;

  newuser: iUser = {
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "",
    profileUrl: undefined,
  }

  @Watch("isShowing")
  handleShowing(isShowingStart: boolean, isShowingEnd: boolean) {
    if (!isShowingStart && isShowingEnd) {
        /*
      this.order = {
        orderNumber: "",
      };
      */
    }
  }

  success() {
    this.error = false;
    axios
      .post(APIConfig.buildUrl("/api/users"), 
      {
        firstName : this.newuser.firstName,
        lastName : this.newuser.lastName,
        username : this.newuser.username,
        password : this.newuser.password,
        role : this.newuser.role,
      }, 
      {
        headers : {
          token: this.$store.state.userToken
        }
      })
      .then((response: AxiosResponse) => {
        this.$emit("success");
        console.log("success");
        this.$router.push("/employee/employees");
      })
      .catch((res: AxiosError) => {
        this.error = res.response && res.response.data.error;
      });
  }

  cancel() {
    this.$emit("cancel");
  }
}

</script>
