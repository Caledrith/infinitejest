<template>
  <v-container>

    <v-toolbar>
      <v-toolbar-items>
        <v-select
          :items="sortingOptions"
          label="Sorting"
          flat
          class="mt-2 pt-2"
          v-model="sortSelection"
          v-on:change="sort()"
        ></v-select>
      </v-toolbar-items>
    </v-toolbar>

    <v-list color="#FAFAFA">
      <v-list-item
        v-for="(joke) in displayJokes"
        :key="joke.id"
      >
        <v-list-item-content>
          <v-card
            outlined
            @click="toJoke(joke.id)"
          >
            <div class="jokeText ma-2 pa-2 font-weight-medium">{{joke.joke}}</div>
            <v-btn small v-on:click.stop @click="toggleShow(joke)" class="subtitle-1 ml-3" v-if="!joke.showPunch && joke.hiddenPunchline">{{getPunchlineText(joke.jokeCategoryId)}}</v-btn>
            <v-list-item-subtitle class="subtitle-1 pl-2 ml-2" v-if="joke.showPunch" v-text="joke.hiddenPunchline"></v-list-item-subtitle>
            <v-card-actions>
              <v-col>
                <v-btn text icon v-on:click.stop v-on:click="upvote(joke)"><v-icon>mdi-thumb-up</v-icon></v-btn> {{joke.upvotes}}
                <v-btn text icon v-on:click.stop v-on:click="downvote(joke)"><v-icon>mdi-thumb-down</v-icon></v-btn> {{joke.downvotes}}
                <!-- <v-btn v-if="dataStore.user" text icon v-on:click="edit"><v-icon>mdi-pencil</v-icon></v-btn> -->
              </v-col>
              <v-spacer/>
              <div v-if="joke.source || joke.sourceURL" class="mr-1">Source:</div>
              <a v-if="joke.source" v-on:click.stop v-bind:href="joke.sourceURL" style="cursor: pointer">{{joke.source}}</a>
              <a v-else-if="joke.sourceURL" v-on:click.stop v-bind:href="joke.sourceURL" style="cursor: pointer">{{shortenURL(joke.sourceURL)}}</a>
            </v-card-actions>
          </v-card>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import {dataStore} from '../dataStore.js'
import axios from 'axios'
export default {
  props:
    ['category'],
  data: () => ({
    jokes: [],
    displayJokes: [],
    isHovering: false,
    sortingOptions: ["New", "Relevance"],
    sortSelection: "New"
  }),
  watch: {
    category: {
      immediate: true,
      handler(val, oldVal)
      {
        this.filter(val)
      }
    }
  },
  methods: {
    upvote(joke) {
      if (dataStore.loggedIn == false){
        return
      }
      joke.upvotes = joke.upvotes + 1
      axios
        .patch('/jokes/upvoteJoke/'+joke.id)
        .catch((error) => {
      })
    },
    downvote(joke) {
      if (dataStore.loggedIn == false){
        return
      }
      joke.downvotes = joke.downvotes + 1
      axios
        .patch('/jokes/downvoteJoke/'+joke.id)
        .catch((error) => {
      })
    },
    getPunchlineText(jokeCategoryId)
    {
      if(jokeCategoryId == 1 || jokeCategoryId == 2)
      {
        return "Punchline"
      }
      if(jokeCategoryId == 3 || jokeCategoryId == 4)
      {
        return "Answer"
      }
      return ""
    },
    shortenURL(sourceURL){
      var url = new URL(sourceURL)
      return url.hostname
    },
    toggleShow(joke) {
      joke.showPunch = !joke.showPunch
    },
    toJoke(jokeId)
    {
      this.$router.push('/joke/' + jokeId)
    },
    toJokeSource(joke)
    {
      window.location.href = joke.sourceURL
    },
    filter(category)
    {
      if(category == 0)
      {
        this.displayJokes = this.jokes
        return
      }
      var intermediateJokes = [];
      var i;
      for(i = 0; i < this.jokes.length; i++)
      {
        if(this.jokes[i].jokeCategoryId == category)
        {
          intermediateJokes.push(this.jokes[i])
        }
      }
      this.displayJokes = intermediateJokes;
    },
    sort(){
      //placeholder for sorting
      if (this.sortSelection == "Relevance"){
        this.displayJokes.sort((a, b) => (a.relevance > b.relevance) ? 1 : -1)
      }
      if (this.sortSelection == "New"){
        this.displayJokes.sort((a, b) => (a.uploaded > b.uploaded) ? 1 : -1)
      }
    }

  },
  mounted() {
    axios
      .get('/jokes/getJokes')
      .then(response => (this.jokes = response.data.message,
      this.displayJokes = this.jokes
      )).catch((error) => {
    })
  }
};
</script>

<style scoped>
.jokeText{
  margin:5px;
  cursor:pointer;
}
</style>