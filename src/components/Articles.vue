<template>
  <div id="articles">
    <v-row>
      <v-col
        md="4"
        sm="6"
        class="pt-0"
        v-for="(article, i) in articles"
        :key="i"
      >
        <v-card :href="article.url" target="_blank" class="card-article" outlined>
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
    articles: []
  }),
  methods: {
    getArticles() {
      apiArticles
        .fetch({
          filter: this.filter
        })
        .then(response => {
          this.articles = response.data;
        });
    }
  },
  created() {
    this.getArticles();
  }
};
</script>
