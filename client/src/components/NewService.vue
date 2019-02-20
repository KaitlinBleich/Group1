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
          <input class="input" type="text" placeholder="Service Title" >
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input textarea" type="text" placeholder="Service Description" >
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input class="input" type="number" placeholder="$000" >
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
import { iService } from "@/models";

@Component({
  components: {
    Modal
  }
})
export default class NewService extends Vue {

  error: string | boolean = false;
  @Prop(Boolean) isShowing: boolean = false;


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
      .post(APIConfig.buildUrl("/orders"), {
        
      })
      .then((response: AxiosResponse<iOrder>) => {
        this.$emit("success");
        this.$router.push("/orders");
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
