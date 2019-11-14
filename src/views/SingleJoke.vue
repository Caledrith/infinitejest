<template>
  <div class="joke">
    <v-card outlined id="mainCard">
      <v-row>

        <v-col style="text-align:center">
          <v-row>
            <v-col>
              <p class="display-1" v-if="loaded">{{joke.joke}}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <br>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="headline" v-on:click="seen = !seen" v-if="seen && joke.hiddenPunchline">{{joke.hiddenPunchline}}</p>
              <div v-if="!seen && joke.hiddenPunchline">
                <v-btn v-on:click="seen = !seen">{{getPunchlineText(joke.jokeCategoryId)}}</v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <br>
            </v-col>
          </v-row>
          <v-card-actions class="mx-5">
                <v-btn text icon v-on:click="upvote"><v-icon>mdi-thumb-up</v-icon></v-btn> {{upvotes}}
                <v-btn text icon v-on:click="downvote"><v-icon>mdi-thumb-down</v-icon></v-btn> {{downvotes}}
                <!-- <v-btn v-if="user" text icon v-on:click="edit"><v-icon>mdi-pencil</v-icon></v-btn> -->
                <v-spacer/>
                <div v-if="joke.source || joke.sourceURL" class="mr-1">Source:</div>
                <a v-if="joke.source" v-bind:href="joke.sourceURL">{{joke.source}}</a>
                <a v-if="joke.sourceURL" v-bind:href="joke.sourceURL">{{shortenedURL}}</a>
          </v-card-actions>

        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import router from '../router'
import axios from 'axios'

export default {
  name: 'joke',
  data: () => ({
    joke: null,
    userRating: null,
    id: 0,
    seen: false,
    jokeRating: 0,
    upvotes: 0,
    downvotes: 0,
    shortenedURL: null,
  }),
  created () {
    this.id = this.$route.params.id;
    if (typeof this.id === 'string') {
      this.id = parseInt(this.id);
    }
    // this.userId = this.dataStore.user.id
    this.userId = 1
  }, 
  methods: {
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
    upvote: function () {
      var previousVote = false
      var change = 0
      if(!this.userRating.upvote){
        if (this.userRating.downvote) {
          previousVote = true
          change = 1
        }
        axios
          .patch('/jokes/upvoteJoke/'+this.id,{
            remove: previousVote,
            ratingId : this.userRating.id
          })
          .then(response => (
            console.log(response.data.message),
            this.upvotes += response.data.message,
            this.downvotes -= change,
            this.jokeRating = this.upvotes/(this.downvotes + this.upvotes) * 100),
            this.userRating.upvote = 1,
            this.userRating.downvote = 0
            )
      }
      
    },
    downvote: function () {
      var previousVote = false
      var change = 0
      if (!this.userRating.downvote){
        if (this.userRating.upvote) {
          previousVote = true
          change = 1
        }
        axios
          .patch('/jokes/downvoteJoke/'+this.id,{
            remove: previousVote,
            ratingId : this.userRating.id
          })
          .then(response => (
            this.downvotes += response.data.message,
            this.upvotes -= change,
            console.log(response.data.message),
            this.jokeRating = this.upvotes/(this.downvotes + this.upvotes) * 100),
            this.userRating.downvote = 1,
            this.userRating.upvote = 0
          )
      }
      
    },
    edit: function () {
      // should it redirect to another page?
    },
    user: function () {
      // need to get the current user id
      // so we can change this to true only for the joker.userId
      return false
    },
    shortenURL: function() {

      if((this.joke.source == null || this.joke.source == "") && this.joke.sourceURL != null)
      {
        var url = new URL(this.joke.sourceURL)
        console.log("still shortening")
        console.log
        this.shortenedURL = url.hostname
      }
    }
  },
  computed: {
    loaded: function() {
      if (this.joke == null) {
        return false
      } else {
        return true
      }
    }
  },
  mounted ()  {
    axios
      .get('/jokes/getJokeById/'+this.id)
      .then(response => (this.joke = response.data.message,
       this.jokeRating = response.data.message.rating,
       this.upvotes = response.data.message.upvotes,
       this.downvotes = response.data.message.downvotes,
       this.shortenURL()))
    axios.get('/ratings/getRatingByUserAndJoke',{
      params:{
        userId : this.userId,
        jokeId : this.id
      }
    }).then((response) => {
      console.log(response.data.message)
      if(typeof response.data.message === 'undefined'){
        console.log('create')
          axios.post('/ratings/createRating', {
          'userId' : this.userId,
          'jokeId' : this.id,
          'upvote' : 0,
          'downvote' : 0,
        }).then(response => (this.userRating = response.data.message))
      } else {
        this.userRating = response.data.message
      }
        
    }).catch((error) => {
    })
  }
}
</script>

<style scoped>
#mainCard
{
  margin:20px;
}
</style>