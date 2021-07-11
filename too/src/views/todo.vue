<template>
  <div class="home pa-6">
    <v-subheader>
      <div id="app">
        Last updated: {{ new Date().toLocaleString() }}
      </div></v-subheader
    >
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup="addTask"
      class="pa-3"
      outlined
      label="Wassup?"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>
    <v-list class="pt-0" flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'pink lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': (task.done = true) }"
                >{{ task.title }}</v-list-item-title
              ></v-list-item-content
            >
            <v-list-item-action>
              <v-btn @click.stop="deleteTask(task.id)" icon>
                <v-icon color="primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      newTaskTitle: "",
      tasks: [{ id: 1, title: "gesrr", done: "false" }],
    };
  },
  methods: {
    addTask() {
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done: "false",
      };
      this.tasks.push(newTask), (this.newTaskTitle = "");
    },
    doneTask(id) {
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done != task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
