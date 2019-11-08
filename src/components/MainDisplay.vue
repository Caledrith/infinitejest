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
            >
              <v-list-item-title @click="toJoke(joke.id)" style="cursor: pointer" class="ma-2 title" v-text="joke.joke"></v-list-item-title>
              <v-list-item-subtitle @click="toggleShow(joke)" class="subtitle-1" v-if="!joke.showPunch">Click to reveal punchline</v-list-item-subtitle>
              <v-list-item-subtitle @click="toggleShow(joke)" class="subtitle-1" v-if="joke.showPunch" v-text="joke.hiddenPunchline"></v-list-item-subtitle>
              <v-card-actions>
                <v-btn text>Like ({{joke.upvotes}})</v-btn>
                <v-btn text>Dislike ({{joke.downvotes}})</v-btn>
                <v-spacer/>
                <div v-if="joke.source" @click="toJokeSource(joke)" style="cursor: pointer"> Source: {{joke.source}}</div>
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