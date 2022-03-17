<template>
  <div id="articles">
    <v-row>
      <template v-if="loading">
        <v-col md="4" sm="12" xs="12" class="pt-0 mb-4" v-for="n in 3" :key="n">
          <v-card class="card-article v-card">
            <v-sheet color="grey lighten-4">
              <v-skeleton-loader type="image, article" />
            </v-sheet>
          </v-card>
        </v-col>
      </template>
      <v-col
        md="4"
        sm="12"
        xs="12"
        class="pt-0 mb-4"
        v-for="(article, i) in articles"
        :key="i"
      >
        <v-card
          :href="article.url"
          target="_blank"
          class="card-article v-card"
          outlined
        >
          <v-img :src="article.image" height="200px"></v-img>
          <v-card-title>
            {{ article.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ article.content }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import apiArticles from "@/assets/js/api/articles";

export default {
  props: {
    filter: String
  },
  data: () => ({
    loading: true,
    articles: []
  }),
  methods: {
    getArticles() {
      apiArticles
        .fetch({
          filter: this.filter
        })
        .then(response => {
          this.loading = false;
          this.articles = response.data;
        });
    }
  },
  created() {
    this.getArticles();
  }
};
</script>
