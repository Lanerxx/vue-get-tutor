<template>
  <v-row justify="center">
    <v-card>
      <form ref="form">
        <label>用户名</label>
        <input type="text" v-model="number" />
        <br />
        <label>密码</label>
        <input type="password" v-model="password" />
        <br />
        <button @click="login" type="button">登录</button>
      </form>
    </v-card>
  </v-row>
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
