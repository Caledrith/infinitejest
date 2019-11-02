<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-list>
        <v-list-item
          v-for="(joke, i) in jokes"
          :key="i"
        >
          <v-list-item-content>
            <v-card
              outlined
            >
              <v-list-item-title v-text="joke"></v-list-item-title>
              <router-link :to="{name: 'joke', params: {id: 1}}">Go to joke</router-link>
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
export default {
  data: () => ({
    jokes: [],
  }),
  created() {
    // this.$http.get('localhost:8080/getjokes').then(function(response){
    //   if(response.status == "200"){
    //     console.log(response);
    //     this.jokes = response.data.list[0]
    //   }
    // })
    this.jokes = ["this is a joke lol", "another one haha", "fgajkrbeniugbaiubgiuhawiufnbiuer long joke bndsakjhgbrhijabghibehwabghbarehgb","also a joke"]
  },
  methods: {

  }
};


</script>
