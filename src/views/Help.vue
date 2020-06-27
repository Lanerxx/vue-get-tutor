<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="5.5">
          <v-card>
            <v-toolbar flat color="white">
              <h2>Tutor</h2>
            </v-toolbar>
            <v-timeline dense="">
              <v-timeline-item
                v-for="(tutor, i) in tutors"
                :key="i"
                :color="tutor.color"
                small
              >
                <!-- <template v-slot:opposite>
                  <span
                    :class="`headline font-weight-bold ${tutor.color}--text`"
                    v-text="tutor.step"
                  ></span>
                </template> -->
                <div class="py-4">
                  <h2
                    :class="
                      `headline font-weight-light mb-4 ${tutor.color}--text`
                    "
                  >
                    {{ tutor.step }}
                  </h2>
                  <div>
                    {{ tutor.detail }}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5.5">
          <v-card>
            <v-toolbar flat color="white">
              <h2>Student</h2>
            </v-toolbar>
            <v-timeline dense="">
              <v-timeline-item
                v-for="(student, i) in students"
                :key="i"
                :color="student.color"
                small
              >
                <template v-slot:opposite>
                  <!-- <span
                    :class="`headline font-weight-bold ${student.color}--text`"
                    v-text="student.step"
                  ></span> -->
                </template>
                <div class="py-4">
                  <h2
                    :class="
                      `headline font-weight-light mb-4 ${student.color}--text`
                    "
                  >
                    {{ student.step }}
                  </h2>
                  <div>
                    {{ student.detail }}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    tutors: [
      {
        color: "#9FA8DA",
        step: "One",
        detail: "Modify the Ranges, ReservedRange in User"
      },
      {
        color: "#7986CB",
        step: "Two",
        detail:
          "You can import transcripts directly before adding students and courses.\n------1. Please download and view the report card template before uploading your own files, otherwise the import will fail.------2. Courses will be added and students will be added in bulk when the transcript is entered (existing courses and students will not be affected.------3. When entering the transcript, if the course selection record already exists, the student's score will be updated."
      },
      {
        color: "#5C6BC0",
        step: "Three",
        detail: "Modify Rangs, Quant, etc in User"
      },
      {
        color: "#3949AB",
        step: "Four",
        detail: "Modify Rangs, Quant, etc in User"
      }
    ],
    students: [
      {
        color: "#9FA8DA",
        step: "One",
        detail: "Modify Rangs, Quant, etc in User"
      },
      {
        color: "#7986CB",
        step: "Two",
        detail: "Modify Rangs, Quant, etc in User"
      },
      {
        color: "#5C6BC0",
        step: "Three",
        detail: "Modify Rangs, Quant, etc in User"
      },
      {
        color: "#3949AB",
        step: "Four",
        detail: "Modify Rangs, Quant, etc in User"
      }
    ]
  })
};
</script>
