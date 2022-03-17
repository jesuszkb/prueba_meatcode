<template>
  <div id="menu">
    <v-card outlined class="v-card">
      <v-list flat>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="{ name: item.page }"
            link
          >
            <v-list-item-content>
              <v-list-item-title
                class="text-uppercase"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="item.page == $route.name">
              <v-icon>fa-solid fa-arrow-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: "Todos", page: "Home" },
      { text: "Productos", page: "Productos" },
      { text: "Recetas", page: "Recetas" },
      { text: "Consejos", page: "Consejos" }
    ]
  })
};
</script>
