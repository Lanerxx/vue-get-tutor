<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="state"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>My Student</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#5482ba" dark class="mb-2" v-bind="attrs" v-on="on">
                Add Student
              </v-btn>
            </template>
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
                        label="StudentName"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.number"
                        label="Number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.state"
                        label="State"
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
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn color="#5482ba" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <br />
    <p class="font-weight-thin text-end">
      ps :You can import students in batches by importing transcripts！
    </p>
  </div>
</template>

<script>
import { LIST_STUDENTS_TUTOR } from "@/store/types.js";
import { UPDATE_STUDENT_TUTOR } from "@/store/types.js";
import { ADD_STUDENT_TUTOR } from "@/store/types.js";
import { DELETE_STUDENT_TUTOR } from "@/store/types.js";
import { mapState } from "vuex";
export default {
  data: () => ({
    search: "",
    dialog: false,
    headers: [
      {
        text: "StudentName*",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Number*", value: "number" },
      { text: "State", value: "state" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    dessert: {},
    editedIndex: -1,
    editedItem: {
      name: "",
      number: 0
    },
    defaultItem: {
      name: "",
      number: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    ...mapState(["students"])
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
    this.$store.dispatch(LIST_STUDENTS_TUTOR);
  },

  methods: {
    initialize() {
      var j = 0;
      var len = this.students.length;
      for (j; j < len; j++) {
        var dessert = {
          id: -1,
          name: "",
          number: 0,
          state: "未选"
        };
        if (this.students[j].tutor != null) {
          dessert.state = "已选";
        } else {
          dessert.state = "未选";
        }

        dessert.id = this.students[j].id;
        dessert.name = this.students[j].user.name;
        dessert.number = this.students[j].user.number;
        this.desserts.push(dessert);
      }
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
      this.$store.dispatch(DELETE_STUDENT_TUTOR, {
        id: item.id
      });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      var flag = true;
      if (
        !this.editedItem.name ||
        !this.editedItem.number ||
        this.editedItem.number.length < 6
      ) {
        flag = false;
      }
      if (this.editedIndex > -1) {
        this.$store.dispatch(UPDATE_STUDENT_TUTOR, {
          id: this.desserts[this.editedIndex].id,
          user: { name: this.editedItem.name, number: this.editedItem.number }
        });
        if (flag) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        }
      } else {
        if (flag) this.desserts.push(this.editedItem);
        this.$store.dispatch(ADD_STUDENT_TUTOR, {
          user: { name: this.editedItem.name, number: this.editedItem.number }
        });
      }
      this.close();
    }
  }
};
</script>
