<template>
  <div id="consejos">
    <Articles filter="Consejos" />
  </div>
</template>

<script>
import Articles from "@/components/Articles";

export default {
  components: {
    Articles
  },
  data: () => ({
    sectionTitle: "Consejos"
  }),
  mounted() {
    this.$emit("sectionTitle", this.sectionTitle);
  }
};
</script>
