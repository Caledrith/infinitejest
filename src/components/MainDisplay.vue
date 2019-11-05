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
            >
              <v-list-item-title v-text="joke.joke"></v-list-item-title>
              <router-link :to="{name: 'joke', params: {id: joke.id}}">Go to joke</router-link>
              <v-card-actions>
                <v-btn text v-on:click="filter(1)">Like</v-btn>
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
  methods: {
    filter(categoryId)
    {
      console.log("got into filter")
      var intermediateJokes = [];
      var i;
      for(i = 0; i < this.jokes.length; i++)
      {
        if(this.jokes[i].jokeCategoryId == categoryId)
        {
          intermediateJokes.push(this.jokes[i])
        }
      }
      this.displayJokes = intermediateJokes;
    }

  }
};
</script>