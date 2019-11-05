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
                :key="category.id"
                @click="chooseCategory(category.id)"
                link
                >
                <v-list-item-content>
                    <v-list-item-title>{{ category.categoryName }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    categories: [{id: 1, categoryName: "One-Liners"}, {id: 2, categoryName: "Puns & Dad Jokes"}, 
    {id: 3, categoryName: "Laffy Taffy Riddles"}, {id: 4, categoryName: "Tricky Riddles"}, 
    {id: 5, categoryName: "Shaggy Dog Stories"}]
  }),
  mounted ()  {
    axios
      .get('http://localhost:8000/categories/getAllCategories/')
      .then(response => (this.categories = response.data.message))
  },
  methods: {
    chooseCategory(id) {
      this.$emit('choosecategory', id)
    }
  }
};
</script>