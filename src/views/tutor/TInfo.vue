<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" sm="8">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">INFORMATION</div>
                <v-list-item-title class="headline mb-1">
                  {{ this.tutor.user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  Some of the basic information has been set to default, you can
                  go to modify the data. e.g. the rangs , reservedRange, the
                  weight and lowestMark of Course
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Number</th>
                    <th class="text-left">Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in myStudents" :key="item.name">
                    <td>{{ item.user.name }}</td>
                    <td>{{ item.user.number }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card class="mx-auto" max-width="344" outlined>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-subheader class="pl-0">
                    The total number of students that can be instructed
                  </v-subheader>
                  <v-slider
                    :min="tutor.quantity"
                    max="30"
                    v-model="tutor.ranges"
                    thumb-label="always"
                  ></v-slider>
                </v-col>

                <v-col cols="12">
                  <v-subheader class="pl-0">
                    Limit the number of students to be screened for rank
                  </v-subheader>
                  <v-slider
                    max="50"
                    v-model="tutor.reservedRange"
                    :thumb-size="24"
                    thumb-label="always"
                  ></v-slider>
                </v-col>

                <v-col cols="12">
                  <v-subheader class="pl-0">
                    The number of students who have been instructed has been
                    determined
                  </v-subheader>
                  <v-slider
                    color="#5482ba"
                    :max="tutor.ranges"
                    readonly
                    v-model="tutor.quantity"
                    :thumb-size="24"
                    thumb-label="always"
                  ></v-slider>
                </v-col>
              </v-row>
            </v-container>

            <v-card-actions>
              <v-btn text @click="submit">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { GET_INDEX_TUTOR } from "@/store/types.js";
import { UPDATE_RANGE_TUTOR } from "@/store/types.js";
export default {
  computed: {
    ...mapState(["myStudents", "tutor"])
  },
  created() {
    this.$store.dispatch(GET_INDEX_TUTOR);
    this.initialize();
  },
  methods: {
    submit() {
      console.log(this.tutor.ranges);
      console.log(this.tutor.reservedRange);

      this.$store.dispatch(UPDATE_RANGE_TUTOR, {
        ranges: this.tutor.ranges,
        reservedRange: this.tutor.reservedRange
      });
    }
  },
  data() {
    return {
      ranges: 0,
      reservedRange: 0,
      name: "",
      max: 30
    };
  }
};
</script>
