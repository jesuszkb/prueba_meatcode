<template>
  <div id="contactanos">
    <v-row align="center" justify="center">
      <v-col md="8" sm="12" class="text-center">
        <v-alert
          border="left"
          :color="colorAlert"
          dark
          v-if="responseForm"
          transition="scale-transition"
        >
          {{ message }}
        </v-alert>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="formD.firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="NOMBRE"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="formD.lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="APELLIDO"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="formD.email"
                  :rules="emailRules"
                  label="MAIL"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="formD.phone"
                  label="TELÉFONO"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="text-right">
                <v-btn
                  :disabled="loading"
                  color="primary"
                  class="font-weight-bold"
                  rounded
                  x-large
                  :loading="loading"
                  @click="sendForm()"
                >
                  ENVIAR
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import apiContact from "@/assets/js/api/contact";

export default {
  data: () => ({
    loading: false,
    valid: false,
    formD: {},
    nameRules: [
      v => !!v || "Campo obligatorio",
      v => v.length <= 10 || "Debe tener menos de 10 caracteres"
    ],
    emailRules: [
      v => !!v || "Campo obligatorio",
      v => /.+@.+/.test(v) || "El mail debe ser válido"
    ],
    responseForm: false,
    colorAlert: "",
    message: ""
  }),
  methods: {
    sendForm() {
      if (this.valid) {
        this.loading = true;
        this.responseForm = false;
        const keys = Object.keys(this.formD);
        const formData = new FormData();
        keys.forEach(k => {
          formData.append(
            k,
            typeof this.formD[k] === "object"
              ? JSON.stringify(this.formD[k])
              : this.formD[k]
          );
        });
        apiContact
          .create(formData)
          .then(() => {
            this.loading = false;
            this.message =
              "Hemos recibido su mensaje, nos pondremos en contacto con usted.";
            this.colorAlert = "success";
            this.formD = {};
            this.responseForm = true;
          })
          .catch(error => {
            this.loading = false;
            this.message = error.response.statusText;
            this.colorAlert = "error";
            this.responseForm = true;
          });
      } else {
        this.colorAlert = "error";
        this.message = "Debe rellenar el formulario";
        this.responseForm = true;
      }
    }
  }
};
</script>
