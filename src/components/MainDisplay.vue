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
<<<<<<< HEAD
              <v-list-item-title class="innerText" v-text="joke"></v-list-item-title>
=======
              <v-list-item-title v-text="joke"></v-list-item-title>
              <router-link :to="{name: 'joke', params: {id: 1}}">Go to joke</router-link>
>>>>>>> 539e0e642e96aa567fcdc2fff440b2ee79e58e2f
              <v-card-actions>
                <v-btn text outlined class="button">Like</v-btn>
                <v-btn text outlined class="button">Dislike</v-btn>
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

<style scoped>
  .innerText{
    padding-top:5px;
    padding-left:10px;
    padding-right:10px;
    text-align:left;
  }
  .button{
    margin-top:10px;
    font-size: .7em;
    min-height:0px;
    min-width: 0px;
  }
</style>
