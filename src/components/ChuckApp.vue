<template>
  <div>
    
  </div>
</template>

<script>
import { store } from './../store'

export default {
  name: 'ChuckApp',

  created(){
    this.$store.dispatch('fetchRandomJoke')
  },

beforeRouteEnter(to, from, next) {
     store.dispatch('fetchRandomJoke').then(()=>{
      next()
    })
    
   }
 }
</script>

<style>

</style>
