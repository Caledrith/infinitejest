<template>
  <div class="joke">
    <v-row>
      <v-col cols="4">
        <SideNav/>
      </v-col>
      <v-col cols="5" style="text-align:center">
        <v-row>
          <v-col>
            <p class="display-1" v-if="loaded">{{joke.joke}}</p>
            <p class="headline" v-if="seen && hasPunchline">{{joke.hiddenPunchline}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div v-if="!seen && hasPunchline">
            <v-btn v-on:click="seen = !seen">Answer!</v-btn>
          </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <v-rating v-model="rating" :value="joke.rating"></v-rating>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn  text icon><v-icon>mdi-thumb-up</v-icon></v-btn> {{joke.upvotes}}
            <v-btn text icon><v-icon>mdi-thumb-down</v-icon></v-btn> {{joke.downvotes}}
          </v-col>
        </v-row>
        <a v-bind:href="joke.sourceURL">{{joke.sourceURL}}</a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBar from '@/components/headerBar.vue'
import SideNav from '@/components/SideNav.vue'
import router from '../router'
import axios from 'axios'

export default {
  name: 'joke',
  components: {
    headerBar,
    SideNav
  },
    data: () => ({
    joke: null,
    id: 0,
    seen: false
  }),
  created () {
    this.id = this.$route.params.id;
  }, 
  computed: {
    hasPunchline: function() {
      if (this.joke !== null && this.joke.hasPunchline !== '') {
        return true
      }
      return false
    },
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
      .get('http://localhost:8000/jokes/getJokeById/'+this.id)
      .then(response => (this.joke = response.data.message))
  }
}
</script>