<template>
  <modal
    v-bind:is-showing="isShowing"
    title="Add a Service"
    success-button="Submit"
    v-on:success="success"
    v-on:cancel="cancel"
  >
    <form v-on:submit.prevent="onSubmit">
      <p v-if="error">{{ error }}</p>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Service Title" v-model="newservice.title">
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input textarea" type="text" placeholder="Service Description" v-model="newservice.description">
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input class="input" type="number" placeholder="$000" v-model="newservice.price">
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
import { iOrder} from "@/models";
import { iService } from "../models";

@Component({
  components: {
    Modal
  }
})
export default class NewService extends Vue {

  error: string | boolean = false;
  @Prop(Boolean) isShowing: boolean = false;

  newservice: iService = {
    id: "",
    title: "",
    description: "",
    price: 0,
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
      .post(APIConfig.buildUrl("/services"), {
        
      })
      .then((response: AxiosResponse<iOrder>) => {
        this.$emit("success");
        this.$router.push("/services");
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
