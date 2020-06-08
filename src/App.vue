<template>
  <v-app id="app">
    <v-container fluid>
      <v-row>
        <v-col sm="6" md="3"><login id="login" /></v-col>
        <v-col sm="6" md="9">
          <router-view id="router" :key="$route.path" />
        </v-col>
      </v-row>
    </v-container>
    <router-view />

    <alertdialog />
  </v-app>
</template>
<script>
import login from "@/views/Login";
export default {
  components: {
    login,
    alertdialog: () => import("@/components/AlertDialog.vue")
  }
};
</script>
