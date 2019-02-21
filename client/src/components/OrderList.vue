<template>
  <div>
        <!--content-->
        <table class="table is-fullwidth is-hoverable">
            <thead>
                <th>Item</th>
                <th>Quanitity</th>
                <th>Price</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <!--loop through cart items!-->
                <tr v-for="(item,index) in items" v:bind:key="index">
                    <td>{{item.product.name}}</td>
                    <td>{{item.quantity}}</td>
                    <td> $ {{item.product.price * item.quantity}}</td>
                    <td>
                        <button class="delete" aria-label="close" v-on:click="removeItem(index)"></button>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { iOrderItem } from "@/models";
import { iProduct, iImage } from "../models";

@Component
export default class OrderList extends Vue {
  @Prop(Boolean) isShowing!: boolean;

    //items = this.$store.state.CartItems;

    //temp items
    temp_image: iImage = {
        id: 0,
        url: "imageURL",
    }
    temp_product: iProduct = {
        id: "id",
        name: "product name",
        brand: "brand name",
        price: 100,
        stock: 100,
        shipping: "shipping",
        description: "product description",
        category: {id:"id", name:"category", subcategories: []},
        subcategory: {id: "id", name:"subcat"},
        images: [this.temp_image],
    }
    items: iOrderItem[] = [
        {id:0, quantity: 1, price: 100, product:this.temp_product},
        {id:1, quantity: 2, price: 100, product:this.temp_product},
        {id:2, quantity: 1, price: 100, product:this.temp_product},
        {id:3, quantity: 2, price: 100, product:this.temp_product}
    ]



    removeItem(index: number){
        //remove that item from cart by index
    }

}
</script>