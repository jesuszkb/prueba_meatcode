<template>
  <v-parallax style="height: 100vh" :src="require('@/assets/img/hero.png')">
    <v-row>
      <v-col cols="6">
        <div class="hero-text font-caveat">
          Logo
        </div>
      </v-col>
      <v-col cols="6" class="text-right pr-10">
        <div class="hero-social-media">
          <v-btn
            class="blue--text mr-4"
            icon
            href="https://www.facebook.com"
            target="_blank"
            outlined
            large
          >
            <v-icon size="30px">mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            class="red--text mr-4"
            icon
            href="https://twitter.com"
            target="_blank"
            outlined
            large
          >
            <v-icon size="30px">mdi-instagram</v-icon>
          </v-btn>
          <v-btn
            class="orange--text"
            icon
            href="https://www.youtube.com"
            target="_blank"
            outlined
            large
          >
            <v-icon size="30px">mdi-youtube</v-icon>
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
  </v-parallax>
</template>

<script>
import "@/assets/css/hero.css";

export default {};
</script>
