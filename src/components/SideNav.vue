<template>
    <v-container class="fill-height ma-0 pa-0">
        <v-navigation-drawer permanent fixed clipped class="sidenav">
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
import axios from 'axios'
export default {
  data: () => ({
    categories: [],
  }),
  mounted ()  {
    axios
      .get('/categories/getAllCategories/')
      .then(response => {
        this.categories = response.data.message
        this.categories.unshift({categoryName: 'All', id: 0})
        })
  },
  methods: {
    chooseCategory(id) {
      this.$emit('choosecategory', id)
    }
  }
};
</script>
<style>
.sidenav {
  padding-top: 65px;
}
</style>