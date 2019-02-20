<template>
  <modal
    v-bind:is-showing="isShowing"
    title="Find Your Order"
    success-button="Submit"
    v-on:success="success"
    v-on:cancel="cancel"
  >
    <form v-on:submit.prevent="onSubmit">
      <p v-if="error">{{ error }}</p>
      <div class="field">
        <label class="label">Order Confirmation Number</label>
        <div class="control">
          <input class="input" type="text" placeholder="1234567" v-model="order.orderNumber">
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
import { iOrderItem, iOrder, iAddress } from "@/models";

@Component({
  components: {
    Modal
  }
})
export default class OrderConfirmation extends Vue {

  error: string | boolean = false;
  @Prop(Boolean) isShowing: boolean = false;

  //temp_address : iAddress = {0, "","","","","",""};
  
  temp_address : iAddress = {id: 0,
                              firstName: "",
                              lastName: "",
                              street: "",
                              city: "",
                              state:  "",
                              zip:""};

  order : iOrder = {
    id: 0,
    orderNumber: "", 
    status: "",
    date: new Date(),
    subtotal: 0,
    discount: 0,
    shipping: 0,
    total: 0,
    address: this.temp_address,
    orderItems: [],
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
