<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="tutors"
      sort-by="user.name"
      sort-desc="true"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Tutors</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn color="#5482ba" text @click="initialize">
            Reset The Table
          </v-btn>

          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>

          <v-dialog v-model="dialog" max-width="500px">
            <!-- <template v-slot:activator="{ on, attrs }">
              <v-btn color="#5482ba" dark class="mb-2" v-bind="attrs" v-on="on">
                Add Course
              </v-btn>
            </template> -->

            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="ClassName"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.weight"
                        label="Weight"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.lowestMark"
                        label="LowestMark"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <router-link
          :to="`/information/${item.id}`"
          v-if="item.quantity < item.ranges"
        >
          Apply
        </router-link>
        <v-icon disabled="" small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <!-- <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon> -->
      </template>

      <template v-slot:no-data>
        <v-btn color="#5482ba" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <br />

    <p class="font-weight-thin text-end">
      ps :You must set the course weight and Lowestmark, otherwise you will not
      be able to get a comprehensive ranking of students
    </p>
  </div>
</template>

<script>
import { GET_INDEX_STUDENT } from "@/store/types.js";

import { mapState } from "vuex";
export default {
  data: () => ({
    search: "",
    dialog: false,
    headers: [
      {
        text: "TutorName*",
        align: "start",
        sortable: false,
        value: "user.name"
      },
      { text: "Ranges", value: "ranges" },
      { text: "Quantity", value: "quantity" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      weight: 0.5,
      lowestMark: 60
    },
    defaultItem: {
      name: "",
      weight: 0.5,
      lowestMark: 60
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    ...mapState(["student", "tutors"])
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.$store.dispatch(GET_INDEX_STUDENT);
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = this.courses;
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {}
  }
};
</script>
