<template>
  <div id="productos">
    <Articles filter="Productos" />
  </div>
</template>

<script>
import Articles from "@/components/Articles";

export default {
  components: {
    Articles
  },
  data: () => ({
    sectionTitle: "Productos"
  }),
  mounted() {
    this.$emit("sectionTitle", this.sectionTitle);
  }
};
</script>
