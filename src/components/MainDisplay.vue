<template>
  <v-container>
      <v-list>
        <v-list-item
          v-for="(joke) in displayJokes"
          :key="joke.id"
        >
          <v-list-item-content>
            <v-card
              outlined
              @click="toJoke(joke.id)"
            >
              <!--<v-list-item-title @click="toJoke(joke.id)" style="cursor: pointer" class="ma-2 title" v-text="joke.joke"></v-list-item-title> -->
              <div class="jokeText">{{joke.joke}}</div>
              <v-btn v-on:click.stop @click="toggleShow(joke)" class="subtitle-1 ml-3" v-if="!joke.showPunch && joke.hiddenPunchline">Click to reveal punchline</v-btn>
              <v-list-item-subtitle class="subtitle-1 pl-3" v-if="joke.showPunch" v-text="joke.hiddenPunchline"></v-list-item-subtitle>
              <v-card-actions>
                <v-col>
                  <v-btn text icon v-on:click.stop v-on:click="upvote"><v-icon>mdi-thumb-up</v-icon></v-btn> {{joke.upvotes}}
                  <v-btn text icon v-on:click.stop v-on:click="downvote"><v-icon>mdi-thumb-down</v-icon></v-btn> {{joke.downvotes}}
                  <!-- <v-btn v-if="user" text icon v-on:click="edit"><v-icon>mdi-pencil</v-icon></v-btn> -->
                </v-col>
                <v-spacer/>
                <div v-if="joke.source" v-on:click.stop @click="toJokeSource(joke)" style="cursor: pointer"> Source: {{joke.source}}</div>
                <div v-else-if="joke.sourceURL" v-on:click.stop @click="toJokeSource(joke)" style="cursor: pointer">Source:  {{shortenURL(joke.sourceURL)}}</div>
              </v-card-actions>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-container>
</template>

<script>
import {testJokes} from '../testJokes.js'
import axios from 'axios'
export default {
  props:
    ['category'],
  data: () => ({
    jokes: [],
    displayJokes: [],
    isHovering: false,
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
  font-weight: bold;
  cursor:pointer;
}
</style>