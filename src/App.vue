<template>
  <v-app id="app">
    <v-container fluid class="grey lighten-5">
      <v-row align="stretch" justify="space-around">
        <v-col>
          <MyHeader id="MyHeader" />
        </v-col>
      </v-row>
      <v-spacer>
        <br />
        <br />
        <br />
      </v-spacer>
      <v-row align="stretch" justify="space-around" top="120">
        <v-col cols="3">
          <sidebar id="sidebar" />
        </v-col>
        <v-col cols="9">
          <router-view id="router" :key="$route.path"></router-view>
        </v-col>
      </v-row>
      <v-row>
        <MyFooter id="MyFooter" />
      </v-row>
    </v-container>
    <alertdialog />
  </v-app>
</template>
<script>
import sidebar from "@/views/Sidebar.vue";
import MyFooter from "@/views/Footer.vue";
import MyHeader from "@/views/Header.vue";
export default {
  components: {
    MyHeader,
    MyFooter,
    sidebar,
    alertdialog: () => import("@/components/AlertDialog.vue")
  }
};
</script>
