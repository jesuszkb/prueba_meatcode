import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
// import colors from "vuetify/lib/util/colors";
// import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: "#D8AD3D",
        secondary: "#009CD9",
        accent: "#3F454A",
        error: "#B72C2C"
      }
    }
  },
  icons: {
    iconfont: "fa"
  }
};

export default new Vuetify(opts);
