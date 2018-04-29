import axios from 'axios'

export const state = () => ({
    todos:[]
})

export const mutations = {
    init(state, todos){
        state.todos = todos
    },

    add(state, todo){
        state.todos = [...state.todos, todo]
    },

    remove(state, todo){
        state.todos = state.todos.filter( t => t.id != todo.id)
    },

    toggle(state, todo){
        state.todos = state.todos.map(t =>
            t.id === todo.id
            ? todo
            : t
        )
    }
}

export const actions = {
    async add({commit}, task){
        const res = await axios.post('http://localhost:3777/todos',  {text:task, done:false})

        commit('add', res.data)
    },

    async remove({commit}, todo){
        const res = await axios.delete(`http://localhost:3777/todos/${todo.id}`)

        commit('remove', todo)
    },

    async toggle({commit}, todo){
        const res = await axios.patch(`http://localhost:3777/todos/${todo.id}`, {done: !todo.done})

        commit('toggle', res.data)
    }
}