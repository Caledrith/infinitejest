<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-list>

      </v-list>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    jokes: []
  }),
  created() {
    this.$http.get('http://api.openweathermap.org/data/2.5/find?q=stockholm&type=like&appid=766b78c39446a8fa6313c3b7b2063ade').then(function(response){
      if(response.status == "200"){
        console.log(response);
        this.jokes = response.data.list[0]
      }
    })
  },
  methods: {

  }
};


</script>
