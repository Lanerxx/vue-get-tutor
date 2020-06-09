<template>
  <v-card class="mx-auto" width="380" min-height="620" outlined>
    <v-list>
      <v-list-item to="/tutorInformation">
        <v-list-item-icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>User</v-list-item-title>
      </v-list-item>

      <v-list-group prepend-icon="mdi-home" value="true">
        <template v-slot:activator>
          <v-list-item-title>Home</v-list-item-title>
        </template>

        <v-list-group no-action sub-group value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Course</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item to="/tutorCourse">
            <v-list-item-title>List of Courses</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-file</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group sub-group no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Student</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item to="/tutorStudent">
            <v-list-item-title>List of Students</v-list-item-title>
            <v-list-item-action>
              <v-icon>mdi-file</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item to="/tutorGradeManage">
            <v-list-item-title>Grade Management</v-list-item-title>
            <v-list-item-action>
              <v-icon>mdi-update</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item to="/tutorSelectAdvance">
            <v-list-item-title>Selection in advance</v-list-item-title>
            <v-list-item-action>
              <v-icon>mdi-alert</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>
