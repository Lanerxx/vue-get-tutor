<template>
  <div>
    <br />
    <br />
    <br />
    <template>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Welcome to GETTUTOR</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">
          Please enter your number and password
        </v-card-subtitle>

        <v-card-text class="text">
          <form ref="form">
            <label>用户名</label>
            <input type="text" v-model="number" />
            <br />
            <label>密码</label>
            <input type="password" v-model="password" />
            <br />
            <button @click="login" type="button"></button>
          </form>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text @click="login">
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-row justify="center">
        <v-card></v-card>
      </v-row>
    </template>
  </div>
</template>

<script>
import { LOGIN } from "@/store/types.js";
import { mapState } from "vuex";

export default {
  data: () => ({
    number: null,
    password: null
  }),

  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        number: this.number,
        password: this.password
      });
      this.$refs.form.reset();
      if (this.isLogin != null) {
        this.dialog = false;
      }
    }
  }
};
</script>
