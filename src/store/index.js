import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import axios from "@/axios/MyAxios";
import { updateRoutes } from "@/router/index";
import { author } from "@/util/Const";
Vue.use(Vuex);

const myState = {
  exception: { message: null },
  isLogin: false,
  notLogin: true,
  name: null,
  user: {
    name: "BO",
    address: "956"
  },
  courses: []
};

const myMutations = {
  [types.GET_EXCEPTION](state, data) {
    state.exception = data;
  },
  [types.LOGIN](state, data) {
    state.isLogin = data;
  },
  [types.LIST_COURSES_TUTOR](state, data) {
    state.courses = data;
  }
};

const myActions = {
  // 登录
  async [types.LOGIN]({ commit }, data) {
    let resp = await axios.post("login", data);
    let auth = resp.headers[author];

    console.debug("ihiuhihihhuih");
    if (auth != null) {
      sessionStorage.setItem(author, auth);
      sessionStorage.setItem("role", resp.data.role);
      updateRoutes();
      commit(types.LOGIN, true);
    }
  },

  // ------以下为向springboot发出请求
  // 需要取消mock，配置后端跨域
  async backendindex({ commit }, data) {
    let resp = await axios.get("teacher/index");

    commit("teacher", resp.data.teacher);
    commit("courses", resp.data.courses);
  },
  async addCourse({ commit }, data) {
    let resp = await axios.post("teacher/courses", data);
  },
  async [types.LIST_COURSES_TUTOR]({ commit }, data) {
    let resp = await axios.get("tutor/courses");
    commit(types.LIST_COURSES_TUTOR, resp.data.courses);
  },
  async [types.UPDATE_COURSE_TUTOR]({ commit }, data) {
    let resp = await axios.patch("tutor/course", data);
  },
  async [types.ADD_COURSE_TUTOR]({ commit }, data) {
    let resp = await axios.post("tutor/course", data);
  },
  async [types.DELETE_COURSE_TUTOR]({ commit }, data) {
    let resp = await axios.delete(`tutor/courses/${data.id}`);
  }
};

export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});

// --------------------------
// 执行时判断，刷新时检测；也可以添加长度等更严格判断
if (sessionStorage.getItem(author) != null) {
  myState.isLogin = true;
  myState.notLogin = false;
}
