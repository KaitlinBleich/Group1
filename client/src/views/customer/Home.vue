<template>
  <div class="home">

    <!--page banner-->
    <section class="hero is-small is-bold">
      <div class="hero-body">
        <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title"> Welcome to, FoxCycle!</h1>
                    <h2 class="subtitle">Greeting message?</h2>
                </div>
            </div>
      </div>
    </section>

    <!--Add the Shopping Links here-->
    <section class="section">
        <div class="columns">

            <!--left cards-->
            <div class="column">
              <!--first card-->
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <!--replace with button-->
                      <router-link class="navbar-item  " to="/shopbikes" exact-active-class="is-active"><h1 class="subtitle">Shop Bikes</h1></router-link>
                    </div>
                  </div>
                </article>
              </div>
              <!--second card-->
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <!--replace with button-->
                      <router-link class="navbar-item  " to="/services" exact-active-class="is-active"><h1 class="subtitle">Services</h1></router-link>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <!--right cards-->
            <div class="column">
              <!--first card-->
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <!--replace with button-->
                      <router-link class="navbar-item  " to="/shopparts" exact-active-class="is-active"><h1 class="subtitle">Shop Parts</h1></router-link>
                    </div>
                  </div>
                </article>
              </div>
              <!--second card-->
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <!--replace with button-->
                      <router-link class="navbar-item  " to="/shopall" exact-active-class="is-active"><h1 class="subtitle">Shop All</h1></router-link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
        </div>
    </section>

  </div>
</template>

<style lang="scss">
@import "~bulma/css/bulma.css";
</style>
