<template>
  <v-container>
    <v-card height="350px">
      <v-navigation-drawer
        absolute
        permanent
        right
      >
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>
  
            <v-list-item-content>
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click=""
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
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
    items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ]
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
