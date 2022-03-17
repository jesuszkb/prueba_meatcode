<template>
  <div>
    <v-app>
      <v-overlay :value="isLoading" opacity="0.9" z-index="999">
        <v-progress-circular
          indeterminate
          size="64"
          color="primary"
        ></v-progress-circular>
      </v-overlay>
      <Hero />
      <v-container>
        <SectionTitle :title="sectionTitle" />
        <v-row>
          <v-col cols="3">
            <Menu />
          </v-col>
          <v-col cols="9">
            <router-view @sectionTitle="handleSecTitle" />
          </v-col>
        </v-row>
        <SectionTitle title="Contáctanos" />
        <FormContact />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Hero from "@/components/base/Hero";
import SectionTitle from "@/components/SectionTitle";
import Menu from "@/components/base/Menu";
import FormContact from "@/components/base/FormContact";

export default {
  components: {
    Hero,
    SectionTitle,
    Menu,
    FormContact
  },
  data: () => ({
    isLoading: true,
    sectionTitle: ""
  }),
  methods: {
    handleSecTitle(value) {
      this.sectionTitle = value;
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoading = false;
      }
    };
  }
};
</script>
