<template>
  <div>
    <form>
      <div id="input-group-1" label="Email address:" label-for="input-1">
        <input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        >
      </div>

      <div id="input-group-2" label="Your Name:" label-for="input-2">
        <input
          type="text"
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        >
      </div>

      <div id="input-group-3" label="Food:" label-for="input-3">
        <select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        >
          <option v-for="food in foods" v-bind:value="food.value">
            {{ food.text }}
          </option>
        </select>
      </div>

      <div id="input-group-5" label="Price:" label-for="input-5">
        <select
          id="input-5"
          v-model="form.price"
          :options="prices"
          required
        >
          <option v-for="price in prices" v-bind:value="price.value">
            {{ price.text }}
          </option>
        </select>
      </div>

      <div id="input-group-4">
        <div id="checkboxes">
          <label class="d-flex">
            <input type="checkbox" v-model="form.checked" value="privacy">
            <span>Accept Privacy</span>
          </label>
          <label class="d-flex">
            <input type="checkbox" v-model="form.checked" value="terms">
            <span>Accept Terms</span>
          </label>
        </div>
      </div>
      <div class="d-flex">
        <button type="submit" class="btn btn-success" v-on:click="onSubmit" variant="primary">Submit</button>
        <button type="reset" class="btn btn-danger" v-on:click="onReset" variant="danger">Reset</button>
      </div>
    </form>
    <div class="card mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </div>
    <div class="card mt-3" v-if="show">
      <pre class="m-0 green" v-if="this.result==true">Submit Form Success!</pre>
      <pre class="m-0 red" v-else>Submit Form Error!</pre>
    </div>
  </div>
</template>

<script>
/* eslint-disable eol-last */
// eslint-disable-next-line
/* eslint-disable */
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          price: null,
          checked: []
        },
        foods: [
          { text: 'Select One', value: null },
          { text: 'Carrots', value: 'carrots' },
          { text: 'Beans', value: 'beans' },
          { text: 'Tomatoes', value: 'tomatoes' },
          { text: 'Corn', value: 'corn' } 
          ],
        prices: [
          { text: 'Select Price', value: null },
          { text: '$ 10', value:'10'},
          { text: '$ 20', value:'20'},
          { text: '$ 30', value:'30'},
          { text: '$ 40', value:'40'}
          ],
        show: false,
        result: false
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.show = true; 
        if(
          this.form.email !== "" &&
          this.form.name !== "" &&
          this.form.food !== null &&
          this.form.price !== null
        ){
          this.result = true;
        } 
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.price = null
        this.form.checked = []
        this.show = false;
        this.result = false;
      }
    }
  }
</script>
<style>
  div {
    margin-top:5px;
    margin-bottom: 5px;
  }
  input {
    width:100%;
    height: 40px;
  }
  input[type="checkbox"] {
    width: 40px;
    padding:40px;
  }
  select {
    width:100%;
    height: 40px;
  }
  .btn-success {
    width: 50%;
    margin: 2px;
  }
  .btn-danger {
    width: 50%;
    margin: 2px;
  }
  .green {
    border:1px solid green;
  }
  .red {
    border:1px solid red;
  }
</style>