<template>

  <div class="container mt-5">
     <h2 class="text-center">ToDo App</h2>
    <div class="d-flex mt-5">
      <input
        v-model="task"
        type="text"
        placeholder="Enter Task"
        class="form-control"
      />
      <button @click="submitTask" class="btn btn-warning rounded-0">
        SUBMIT
      </button>
    </div>

    <table class="table table-borderless mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">#</th>
          <th scope="col" class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tsk, index) in tasks" :key="index">
          <th>
            <span :class="{ 'taskFinished': tsk.status === 'finished' }">{{
              tsk.name
            }}</span>
          </th>
          <td style="width: 120px">
            <span class="pointer" :class="{'text-danger': tsk.status === 'to-do',
            'text-warning': tsk.status === 'in-progress',
            'text-success': tsk.status === 'finished'}" @click="changeStatus(index)" >{{
              firstCharUpper(tsk.status)
            }}</span>
          </td>
          <td>
            <div class="text-center" @click="editTask(index)">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div class="text-center" @click="deleteTask(index)">
              <span class="fa fa-trash"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "TodoApp",
  props: {
    msg: String,
  },

  data() {
    return {
      task: "",
      editTasks: null,
      availableStatuses: ["to-do", "in-progress", "finished"],
      tasks: [
        {
          name: "Steal bananas from the store",
          status: "to-do",
        },
        {
          name: "Eat 1kg chocolate in 1hr",
          status: "in-progress",
        },
      ],
    };
  },

  methods: {
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editTasks === null) {
        this.tasks.push({
          name: this.task,
          status: "to-do",
        });
      } else {
        this.tasks[this.editTasks].name = this.task;
        this.editTasks = null;
      }
      this.task = "";
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editTasks = index;
    },
    changeStatus(index) {
      let newindex = this.availableStatuses.indexOf(this.tasks[index].status);
      if (++newindex > 2) newindex = 0;
      this.tasks[index].status = this.availableStatuses[newindex];
    },
    firstCharUpper(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.taskFinished {
  text-decoration: line-through;
}
</style>
