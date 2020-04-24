<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="item.path"
          >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-12 align-center">
        <a style="text-decoration:none;" href="/"><span class="title">Makinarocks template</span></a>
      </v-toolbar-title>
      
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple accent-4"
        height=2
      ></v-progress-linear>

      <v-spacer />

    <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
      
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import common from './common';

export default {
    data () {
        return {
          drawer: null,
          loading:true,
          items: [
            { icon: 'dashboard',path:'/packages', text: 'Packages' },
            { icon: 'help',path:'/about', text: 'About' }
          ]
        }
    },
    computed: {
    },
    methods: {
      notifications() {
        return [{
          id:common.events.app.startLoading,
          action:this.startLoading
        },{
          id:common.events.app.stopLoading,
          action:this.stopLoading
        }]
      },
      startLoading() {
        this.loading = true;
      },
      stopLoading() {
        this.loading = false;
      }
    },
    created() {
      console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    destroyed() {
        console.log('destroyed')
    }
}
</script>

<style>
</style>
