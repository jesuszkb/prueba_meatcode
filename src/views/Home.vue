<template>
  <div id="home">
    <Articles filter="" />
  </div>
</template>

<script>
import Articles from "@/components/Articles";

export default {
  components: {
    Articles
  },
  data: () => ({
    sectionTitle: "Nuestros Articulos"
  }),
  mounted() {
    this.$emit("sectionTitle", this.sectionTitle);
  }
};
</script>
