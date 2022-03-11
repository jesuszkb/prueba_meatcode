<template>
  <div id="navbarTop">
    <v-app-bar color="light-green darken-1" dark flat fixed>
      <v-toolbar-title class="d-none d-md-flex">
        <!-- <router-link :to="{ name: 'Home' }">
          <v-img :src="require('@/assets/img/logo.png')" />
        </router-link> -->
        <span class="logo" @click="goHome">
          Alcaldía Angostura del Orinoco
        </span>
      </v-toolbar-title>
      <v-row class="d-flex d-md-none">
        <v-col cols="1" class="pl-0 pr-0">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="11" class="text-center mt-1 pl-0 pr-0">
          <span class="logo logo-xs" @click="goHome">
            Alcaldía Angostura del Orinoco
          </span>
        </v-col>
      </v-row>
      <v-spacer class="d-none d-md-flex"></v-spacer>
      <v-toolbar-items class="d-none d-md-flex">
        <v-btn text class="font-weight-medium" :to="{ name: 'Home' }" exact>
          Inicio
        </v-btn>
        <v-btn text class="font-weight-medium" :to="{ name: 'Noticias' }" exact>
          Noticias
        </v-btn>
        <v-menu offset-y transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">
              Nosotros
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :href="item.href"
            >
              <v-list-item-title class="light-green--text text--darken-3">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "La Alcaldía", href: "#" },
      { title: "El Alcalde", href: "#" },
      { title: "Ciudad Bolívar", href: "#" }
    ]
  }),
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style>
.logo {
  /* Lobster, Playball */
  font-family: "Playball" !important;
  font-size: 25pt;
}
.logo-xs {
  font-size: 20pt !important;
}
.logo:hover {
  cursor: pointer;
}
</style>
