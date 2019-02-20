<template>
  <div class="storeinfo">

    <!--page banner-->
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Manage Store Info
          </h1>
          <h2 class="subtitle">
            put the greeting here??????
          </h2>
        </div>
      </div>
    </section>

    <!--Update Information-->
    <section class="section">
        <div class="container">

          <form>

            <div class="field">
              <label class="label">Greeting</label>
              <div class="control">
                <input class="input textarea" type="text" id="n" placeholder="pull existing from database"/>
              </div>
            </div>

            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <input class="input textarea" type="text" id="n" placeholder="pull existing from database"/>
              </div>
            </div>

            <div class="field">
              <label class="label">Location</label>
              <div class="control">
                <input class="input textarea" type="text" id="n" placeholder="pull existing from database"/>
              </div>
            </div>

            <div class="field">
              <label class="label">Hours</label>
              <div class="control">
                <input class="input textarea" type="text" id="n" placeholder="pull existing from database"/>
              </div>
            </div>

            <div class="field">
              <label class="label">Image</label>
              <div class="control">
                <input class="input" type="text" id="n" placeholder="pull existing from database"/>
              </div>
            </div>

            <div class="buttons">
              <button class="button is-success" v-on:click="successHandler()">Save</button>
              <button class="button" v-on:click="cancelHandler()">Cancel</button>
            </div>
            
          </form>

        </div>
    </section>

  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Prop, Component } from "vue-property-decorator";
import { iAbout } from "@/models";
@Component
export default class StoreInfo extends Vue {
  @Prop({ type: String, default: "Save" })

  successHandler(): void {
    this.$emit("success");
  }

  cancelHandler(): void {
    this.$emit("cancel");
  }

}
</script>
