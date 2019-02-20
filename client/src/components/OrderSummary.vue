<template>
  <div class="small-box">
        <!--header>-->
        <header class="header">
            <h1 class="subtitle">Order Summary</h1>
        </header>
      
        <!--content-->
        <section class="section">
            <table class="table is-fullwidth">
                <tr>
                    <td>Subtotal</td>
                    <td class="price">$10</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td class="price">$11</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td class="price">$12</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td class="price">$idk</td>
                </tr>
                <tr class="is-selected">
                    <td >total</td>
                    <td class="price">$10000</td>
                </tr> 
            </table>
        </section>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { iOrderSummary } from "@/models";

@Component
export default class OrderSummary extends Vue {
  @Prop(Boolean) isShowing!: boolean;


      //this.$store.state.cart
  //get the list of items (may have duplicates?)
  //calculate the totals

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
