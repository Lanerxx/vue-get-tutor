<template>
  <v-app-bar app dark src="@/assets/three.png" height="110">
    <v-spacer></v-spacer>

    <v-toolbar-title>Application</v-toolbar-title>

    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
</template>
