<template>
  <div class="Submit Joke">
    <v-card outlined class="ma-4">
    <h1 class="ma-2 px-2">Submit a joke</h1>
    <h4 class="mx-2 px-2">Make sure to read the rules before submitting</h4>
    <v-form id="form">
      <v-container>
        <v-col>
          <v-textarea
            name="Joke"
            outlined
            label="Joke (requred)"
            v-model="jokeTitle"
          ></v-textarea>
          <v-text-field
            label="Joke Punchline (optional)"
            v-model="jokePunchline"
          ></v-text-field>
          <v-select
            :items="categories"
            item-text="categoryName"
            item-value="id"
            label="Category (required)"
            v-model="jokeCategoryId"
          ></v-select>
          <v-text-field
            label="Joke Source (optional)"
            v-model="jokeSource"
          ></v-text-field>
          <v-text-field
            label="Joke Source URL (optional)"
            v-model="jokeSourceURL"
          ></v-text-field>
          <p v-if="formErrors.length"> Please correct the following errors:
            <ul>
              <li v-for="formError in formErrors" :key=formError style="color:red">{{ formError }}</li>
            </ul>
          </p>
          <v-btn @click="submit" outlined color="indigo">Submit</v-btn>
        </v-col>
      </v-container>
    </v-form>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import {testCategories} from '../categories.js'
import {dataStore} from '../dataStore.js'

export default {
  name: 'joke',
  data: () => ({
    categories: [],
    jokeTitle: "",
    jokePunchline: "",
    jokeCategory: "",
    jokeCategoryId: -1,
    rating: 0.5,
    jokeSource: "",
    jokeSourceURL: "",
    flags: null,
    userId: dataStore.user.id,
    username: dataStore.user.name,
    formErrors: []
  }),
  created()
  {
    this.categories = testCategories
    this.categories.shift()
  },
  methods: {
    submit() {
      let joke = {
        userId: this.userId,
        jokeCategoryId: this.jokeCategoryId,
        joke: this.jokeTitle,
        hiddenPunchline: this.jokePunchline,
        uploaded: this.getTime(),
        upvotes: 0,
        downvotes: 0,
        source: this.jokeSource,
        sourceURL: this.jokeSourceURL,
        flags: this.flags,
        rating: this.rating,
        showPunch: false,
        username: this.username
      }

      if (this.validateForm()) {
        axios
        .post('/jokes/createJoke/', joke)
        .then(response => (this.$router.push('/')))
      } else {
        // don't submit
      }
    },
    validateForm() {
      this.formErrors = []

      // category required
      if (this.jokeCategoryId == -1) {
        this.formErrors.push("Joke Category Required")
      }

      // joke required
      if (this.jokeTitle == "") {
        this.formErrors.push("Joke Text Required")
      }

      if (this.formErrors.length == 0) {
        return true
      } else {
        return false
      }
    },
    getTime() {
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;
      return dateTime
    }
  },
  mounted ()  {
    axios
      .get('/categories/getAllCategories/')
      .then(response => (this.categories = response.data.message))
  }
}
</script>