<template>
  <div id="recetas">
    <Articles filter="Recetas" />
  </div>
</template>

<script>
import Articles from "@/components/Articles";

export default {
  components: {
    Articles
  },
  data: () => ({
    sectionTitle: "Recetas"
  }),
  mounted() {
    this.$emit("sectionTitle", this.sectionTitle);
  }
};
</script>
