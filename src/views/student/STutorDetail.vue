<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">lowestMark</th>
            <th class="text-left">Your Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in courseDe" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.lowestMark }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">No.</th>
            <th class="text-left">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(s, index) in studentsDe" :key="index">
            <td>{{ index }}</td>
            <td>{{ s.user.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { GET_TUTORDETAIL_STUDENT } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  props: ["tid"],
  created() {
    this.$store.dispatch(GET_TUTORDETAIL_STUDENT, { tid: 2 });
  },
  computed: {
    ...mapState(["courseDe", "electivesDe", "studentsDe", "qualified"])
  }
};
</script>
