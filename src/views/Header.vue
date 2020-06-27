<template>
  <v-app-bar app dark src="@/assets/three.png" height="110">
    <v-spacer></v-spacer>
    <v-toolbar-title>GETTUTOR</v-toolbar-title>

    <v-btn icon @click="logout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>

    <v-btn icon to="/help">
      <v-icon>mdi-help</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { LOGIN } from "@/store/types.js";

export default {
  methods: {
    logout() {}
  }
};
</script>
