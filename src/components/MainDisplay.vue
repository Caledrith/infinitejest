<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-list>
        <v-list-item
          v-for="(joke, i) in displayJokes"
          :key="i"
        >
          <v-list-item-content>
            <v-card
              outlined
              @click="toJoke(joke.id)"
            >
              <v-list-item-title v-text="joke.joke"></v-list-item-title>
              <v-card-actions>
                <v-btn text>Like</v-btn>
                <v-btn text>Dislike</v-btn>
              </v-card-actions>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
import {testJokes} from '../testJokes.js'
export default {
  props:
    ['category'],
  data: () => ({
    jokes: [],
    displayJokes: [],
  }),
  created() {
    // this.$http.get('localhost:8080/getjokes').then(function(response){
    //   if(response.status == "200"){
    //     console.log(response);
    //     this.jokes = response.data.list[0]
    //   }
    // })
    this.jokes = testJokes
    this.displayJokes = testJokes

  },
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
    toJoke(jokeId)
    {
      this.$router.push('/joke/' + jokeId)
    },
    filter(category)
    {
      if(category == 0)
      {
        this.displayJokes = this.jokes
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

  }
};
</script>