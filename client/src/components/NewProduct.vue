<template>
  <modal v-bind:is-showing="isShowing" title="New Product" success-button="Add Product  " v-on:success="success" v-on:cancel="cancel">
    <form >
      <!--<form  v-on:submit.prevent="onSubmit">-->
      <p v-if="error">{{ error }}</p>
      <div class="field">
        <label class="label">Product Name</label>
        <div class="control">
          <input class="input" type="text" id="n" placeholder="Product Name" v-model="newitem.name"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Product ID</label>
        <div class="control">
          <input class="input" type="string" id="n" placeholder="Product ID" v-model="newitem.id"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Brand Name</label>
        <div class="control">
          <input class="input" type="string" id="n" placeholder="Brand Name" v-model="newitem.brand"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input class="input" type="number" id="n" placeholder="Price" v-model="newitem.price"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Stock</label>
        <div class="control">
          <input class="input" type="number" id="n" placeholder="Stock" v-model="newitem.stock"/>
        </div>
      </div>
      <div class="field">
        <label class="label">Shipping</label>
        <div class="control">
          <div class="select" >
            <select v-model="newitem.shipping">
              <option disabled value="">Select Shipping Option</option>
              <option >Flat Rate</option>
              <option>In-Store Pickup</option>
              <option> Enter Custom? </option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="label">Categories</label>
        <div class="control">
          <input type="radio" id="category1" value="category1" v-model="newitem.categories">
          <label for="category1">  category1</label> <br>
          <input type="radio" id="category2" value="category2" v-model="newitem.categories">
          <label for="category2">  category2</label> <br>
          <input type="radio" id="category3" value="category3" v-model="newitem.categories">
          <label for="category3">  category3</label> <br>
        </div>
      </div>
      <div class="field">
        <label class="label">Sub-Categories</label>
        <div class="control">
          <input type="radio" id="category1" value="category1" v-model="newitem.subcategories">
          <label for="category1">  category1</label> <br>
          <input type="radio" id="category2" value="category2" v-model="newitem.subcategories">
          <label for="category2">  category2</label> <br>
          <input type="radio" id="category3" value="category3" v-model="newitem.subcategories">
          <label for="category3">  category3</label> <br>
        </div>
      </div>
      <div class="field">
        <label class="label">Decription</label>
        <div class="control">
          <input class="input textarea" type="text" v-model="newitem.decription" placeholder="Product Description"/>

        </div>
      </div>
      <div class="field">
        <label class="label">Images?</label>
        <div class="control">
          <input class="input" type="string" id="n" placeholder="Images?" v-model="newitem.images"/>
        </div>
      </div>
    </form>
  </modal>
</template>



<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Modal from "./Modal.vue";
import { iProduct } from "@/models";

@Component({
  components: {
    Modal
  }
})

export default class NewProduct extends Vue {

//use iProduct when its finished
  newitem : any = {
    name: "",
    id: "",
    brand: "",
    price: 0,
    stock: 0,
    shipping: "",
    categories: "",
    subcategories: "",
    description: "",
    images: [], 
  }

  error: string | boolean = false;
  @Prop(Boolean) isShowing: boolean = false;

  success() {
    this.error = false; 
    //console.log("adding item: " + this.add_item.title +", due: " + this.add_item.duedate);
    //this.$emit("success",this.add_item);
    this.clearForm();
  }

  cancel() {
    //console.log("cancel add item");
    this.$emit("cancel");
    this.clearForm();
  }

  clearForm(){
  }
}


</script>
