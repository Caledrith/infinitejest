<template>
  <div class="joke">
    <p v-if="loaded">{{joke.joke}}</p>
    <p v-if="seen && hasPunchline">{{joke.hiddenPunchline}}</p>
    <p v-if="!seen && hasPunchline"><button class="btn btn-lg btn-primary" v-on:click="seen = !seen">Answer</button></p>
    {{ joke }}
    <p></p>
    <SideNav/>
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