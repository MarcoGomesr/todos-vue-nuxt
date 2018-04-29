<template>
  <div class="pa4">

    <form class="pa3 pa5-ns"  @submit.prevent="add(task)">
      <input type="text" v-model="task">
      <input type="submit" value="add">
    </form>

    <article class="pa3 pa5-ns">
      <h1 class="f4 bold center mw6">Cats</h1>
      <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
        <li class="flex items-center ph3 pv3 bb b--light-silver" v-for="todo of todos" :key="todo.id">
          <span :class="{strike: !todo.done}" class="flex-auto">{{todo.id}} {{todo.text}}</span>
          <button @click="toggle(todo)"><img src="https://icon.now.sh/check" alt=""></button>
          <button @click="remove(todo)"><img src="https://icon.now.sh/trash" alt=""></button>
        </li>
      </ul>
    </article>
  
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import { init } from './shared'

export default {
  fetch: init,

  computed:{
    ...mapState({
      todos: state => state.todos
    })
  },

  data(){
    return{
      task: 'some task'
    }
  },

  methods:{
    ...mapActions([
      'add',
      'remove',
      'toggle'
    ])
  }

}


</script>