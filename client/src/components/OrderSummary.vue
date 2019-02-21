<template>
  <div class="small-box">
        <!--header>-->
        <header class="header">
            <h1 class="subtitle"><strong>Order Summary</strong></h1>
        </header>
      
        <!--content-->
        <section class="section">
            <table class="table is-fullwidth">
                <tr>
                    <td>Subtotal</td>
                    <td class="price">$100</td>
                    <!--<td class="price">{{}}</td>-->
                </tr>
                <tr>
                    <td>Discount</td>
                    <td class="price">$0</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td class="price">$0</td>
                </tr>
                <tr class="is-selected">
                    <td >Total</td>
                    <td class="price">$100</td>
                </tr> 
            </table>
        </section>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { iOrderSummary, iOrderItem } from "@/models";

@Component
export default class OrderSummary extends Vue {
  @Prop(Boolean) isShowing!: boolean;

  get current_subtotal() {
      var sum = 0;
      if (this.$store.state.cart.CartItems){
        for (let i=0; i<this.$store.state.cart.CartItems.length; i++){
          sum +=( this.$store.state.cart.CartItems.price * this.$store.state.cart.CartItems.quantity);
        }
      }
       return sum;
  }

}
</script>

<style scoped>

.small-box {
    height: 50%;
    width: 20%;
    padding: 1%;
    border-radius: 25px;
    border: 0.5px solid #DCDCDC;
    box-shadow:  0.5px 0.5px 0.5px 0.5px #DCDCDC;
}

.header {
    text-align: center;
    padding-top: 5%;
}

.price {
    text-align: right;
}

</style>
