<template>
  <v-container>
      <v-row justify="center" align="center" no-gutters>
          <v-card>
              <v-btn x-large color="success" dark @click="startLoading">로딩 시작</v-btn>
          </v-card>
      </v-row>
      <v-row justify="center" align="center" no-gutters>
          <v-card>
              <v-btn x-large color="success" dark @click="stopLoading">로딩 중지</v-btn>
          </v-card>
      </v-row>
  </v-container>
</template>

<script>
import common from '../common';
export default {
    data () {
        return {
          
        }
    },
    computed: {
        
    },
    methods: {
        startLoading:function() {
            this.sendNotification(common.events.app.startLoading);
        },
        stopLoading:function() {
            this.sendNotification(common.events.app.stopLoading);
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

<style scoped>
.item {
    margin-top : 2em;
}
</style>
