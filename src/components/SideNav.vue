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
import {testCategories} from '../categories.js'
export default {
  data: () => ({
    categories = [],
  }),
  mounted ()  {
    axios
      .get('http://localhost:8000/categories/getAllCategories/')
      .then(response => (this.categories = response.data.message))
  },
  created() {
    this.categories = testCategories
  },
  methods: {
    chooseCategory(id) {
      this.$emit('choosecategory', id)
    }
  }
};
</script>