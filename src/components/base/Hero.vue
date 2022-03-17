<template>
  <div class="hero">
    <v-row>
      <v-col md="6" sm="4" xs="4">
        <div class="hero-text font-caveat">
          Logo
        </div>
      </v-col>
      <v-col
        cols="12"
        class="text-right mt-12 pt-6 pr-10"
        style="position: fixed; z-index: 999;"
      >
        <div class="hero-social-media">
          <v-btn
            class="blue--text mr-4 btn-social-media"
            icon
            href="https://www.facebook.com"
            target="_blank"
            outlined
          >
            <v-icon size="25px">fa-brands fa-facebook-f</v-icon>
          </v-btn>
          <v-btn
            class="red--text mr-4 btn-social-media"
            icon
            href="https://twitter.com"
            target="_blank"
            outlined
          >
            <v-icon size="25px">fa-brands fa-instagram</v-icon>
          </v-btn>
          <v-btn
            class="orange--text btn-social-media"
            icon
            href="https://www.youtube.com"
            target="_blank"
            outlined
          >
            <v-icon size="25px">fa-brands fa-youtube</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="hero-bg-sc">
        <div class="hero-text hero-sc font-caveat">
          El secreto<br />
          de tu cocina
        </div>
      </v-col>
    </v-row>
    <div class="hero-gradient"></div>
  </div>
</template>

<script>
import "@/assets/css/hero.css";

export default {};
</script>
