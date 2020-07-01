<template>
  <div class="container">
    <form>
      <div class="row">
        <!-- Exercise 1 -->
        <!-- Create a Signup Form where you retrieve the following Information -->
        <!-- Full Name (First Name + Last Name) -->
        <!-- Mail -->
        <!-- Password -->
        <!-- Store Data? Yes/No -->

        <!-- Exercise 2 -->
        <!-- Only display the Form if it has NOT been submitted -->
        <!-- Display the Data Summary ONCE the Form HAS been submitted -->

        <!-- Exercise 3 -->
        <!-- Edit the Example from above and create a custom "Full Name" Control -->
        <!-- which still holds the First Name and Last Name Input Field -->
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Full name"
            class="form-control"
            id="fullName"
            v-model.trim="fullName"
          />
        </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="email">email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            id="email"
            v-model.trim="email"
          />
        </div>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="password">password</label>
          <input
            type="password"
            class="form-control"
            placeholder="password"
            id="password"
            v-model.trim="password"
          />
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
            <div class="form-group">
              <label for="no">
                <input type="radio" value="No" id="no" v-model="stockage" /> No
              </label>
            </div>
            <label for="yes">
              <input type="radio" value="Yes" id="es" v-model="stockage" /> Yes
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button @click.prevent="submitted" class="btn btn-primary">Submit!</button>
          </div>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName}}</p>
            <p>Mail: {{ email }}</p>
            <p>Password:{{ password }}</p>
            <p>Store in Database?: {{ stockage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      stockage: [],
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  }
};
</script>

<style>
</style>
