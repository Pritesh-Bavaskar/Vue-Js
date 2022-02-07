<template>
  <div class="container mt-5">
    <h2 class="text-center">ToDo App</h2>
    <div class="float-end p-4 mt-3">
      <router-link to="/contacts" tag="button" class="btn btn-primary"
        >Contact Us</router-link
      >
    </div>

    <div class="d-flex mt-5">
      <input
        v-model="task"
        type="text"
        placeholder="Enter Task"
        class="form-control"
      />
      <button
        v-on:click="
          getTask(task);
          submitTask();
        "
        class="btn btn-warning rounded-0"
      >
        SUBMIT
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerApp",
  props: {
    getTask: Function,
    sendTask: String,
  },
  data() {
    return {
      task: "",
    };
  },
  watch: {
    sendTask: {
      handler: function (newValue) {
        // console.log('Current vaules:' + newValue );
        this.task = newValue;
      },
      deep: true,
    },
  },
  methods: {
    submitTask() {
      this.task = "";
    },
  },
};
</script>

<style  scoped>
</style>