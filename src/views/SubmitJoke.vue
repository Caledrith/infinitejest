<template>
  <div class="Submit Joke">
    <h1>This is a Joke submission page</h1>
    <v-form>
      <v-container>
        <v-col>
          <v-textarea
            name="Joke"
            outlined
            label="Joke"
            v-model="jokeTitle"
          ></v-textarea>
          <v-text-field
            label="Joke Punchline (optional)"
            v-model="jokePunchline"
          ></v-text-field>
          <v-select
            :items="categories"
            label="Category"
          ></v-select>
          <v-text-field
            label="Joke Source"
            v-model="jokeSource"
          ></v-text-field>
          <v-text-field
            label="Joke Source URL"
            v-model="jokeSourceURL"
          ></v-text-field>
          <v-btn @click="submit" outlined color="indigo">Submit</v-btn>
        </v-col>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'
import {dataStore} from '../dataStore.js'

export default {
  name: 'joke',
  data: () => ({
    store: dataStore,
    categories: ["Knock knock"],
    jokeTitle: "",
    jokePunchline: "",
    jokeCategory: "",
    jokeCategoryId: 0,
    rating: null,
    jokeSource: "",
    jokeSourceURL: "",
    flags: null
  }),
  methods: {
    submit() {
      joke = {userId: this.store.userId, jokeCategoryId: jokeCategoryId, joke: jokeTitle, hiddenPunchline: jokePunchline, uploaded: currentTime, upvotes: 0, downvotes: 0, source: jokeSource, sourceURL: jokeSourceURL, flags: flags, rating: rating}
      axios
      .put('http://localhost:8000/joke/createJoke/', joke)
      .then(response => (this.$router.push('/')))
    }
  },
  mounted ()  {
    axios
      .get('http://localhost:8000/categories/getAllCategories/')
      .then(response => (this.categories = response.data.message))
  }
}
</script>