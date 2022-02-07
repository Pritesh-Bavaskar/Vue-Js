<template>
  <div class="container mt-5">
    <h2>Contacts Us</h2>

    <!-- <div>
        <pre>
            {{JSON.stringify(formValues, null, 2)}}
        </pre>
    </div> -->
    <form @submit="submitForm">
      <div class="form-group mb-1 mt-5">
        <label for="LabelInputProblemTitle">Problem Title: </label>
        <input
          type="text"
          class="form-control"
          id="InputTitle"
          placeholder="Enter Problem Title"
          v-model="formValues.InputTitle"
        />
      </div>
      <br />
      <div class="form-group mb-1">
        <label for="LabelInputProblemDesc">Problem Description:</label>
        <textarea
          type="text"
          class="form-control"
          id="InputProblemDesc"
          placeholder="Enter Problem Description"
          v-model="formValues.InputProblemDesc"
        />
      </div>
      <br />

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "contacts",
  data() {
    return {
      formValues: {
        InputTitle: "",
        InputProblemDesc: "",
      },
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log("form values = ", this.formValues);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>