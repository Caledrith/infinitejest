<template>
    <v-container class="fill-height" mr-0 pr-0>
        <v-navigation-drawer absolute permanent>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="title">
                    Categories
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                v-for="category in categories"
                :key="category"
                link
                >
                <v-list-item-content>
                    <v-list-item-title>{{ category }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    categories: ["Knock Knock", "Long Jokes", "Yo mama jokes"]
  }),
  mounted ()  {
    axios
      .get('http://localhost:8000/categories/getAllCategories/')
      .then(response => (this.categories = response.data.message))
  }
};
</script>