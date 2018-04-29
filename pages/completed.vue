<template>
  <div class="pa4">

    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Cats</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li class="ph3 pv3 bb b--light-silver" v-for="todo of todos" :key="todo.text">{{todo.text}}</li>
      </ul>
    </article>
  
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import { init } from './shared'

export default {

 fetch: init, 

  computed:{
    ...mapState({
      todos: state => state.todos
    })
  },

  methods:{
  }
}


</script>