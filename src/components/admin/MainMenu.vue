<template>
  
    <v-navigation-drawer
    v-model="toggle"
    app
    clipped
    >
    
    <v-list dense>

      <v-list-item>
          <v-list-item-action>
           
            <v-icon
            large
            color="orange darken-2"
            >mdi-view-dashboard</v-icon>
         
          </v-list-item-action>
           <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
      </v-list-item>

      <v-list-item to="/blog">
            <v-list-item-action>
              <v-icon
              large
              color="orange darken-2"
              >mdi-newspaper</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Club News</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

         <v-list-item to="/categories">
        <v-list-item-action>
             <v-icon
      large
      color="orange darken-2"
    >
      mdi-arrow-up-bold-box-outline
    </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Categories</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>

      <!-- <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
</template>
<script>
export default {
    name: 'main-menu',
    props: {
      toggle: {
        type: Boolean,
        default: true
      }
    },
}
</script>
<style>
div.v-list-item.theme--light {
  cursor: pointer;
}
</style>