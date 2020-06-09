<template>
  <div>
    <v-card class="d-flex flex-row-reverse">
      <v-card-actions>
        <v-btn class="ma-2" outlined fab color="#5482ba">
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
        <v-file-input
          autofocus
          multiple
          label="File input"
          placeholder="Please import the transcript."
        ></v-file-input>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="weightedGrade"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Grade Manage</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer>
            <v-card-text class="text-end">
              You must import the student's transcript and assign weights to
              each subject before you can view the rankings.
            </v-card-text>
          </v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
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
                        v-model="editedItem.weightedGrade"
                        label="WeightedGrade"
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
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "StudentName*",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Number*", value: "number" },
      { text: "WeightedGrade", value: "weightedGrade" }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      number: 0,
      state: "未选"
    },
    defaultItem: {
      name: "",
      number: 0,
      state: "未选"
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        { name: "兰二", number: 201701, weightedGrade: 80 },
        { name: "久久", number: 201702, weightedGrade: 80 },
        { name: "小老锤", number: 201703, weightedGrade: 78 },
        { name: "咸鱼", number: 201704, weightedGrade: 76 },
        { name: "巴掌", number: 201705, weightedGrade: 78 },
        { name: "Jelly bean", number: 201706, weightedGrade: 77 },
        { name: "Lollipop", number: 201707, weightedGrade: 70 }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
