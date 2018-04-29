export const state = () => ({
    todos:[
        {task: "eat"},
        {task: "sleep"},
        {task: "code"}
    ]
})

export const mutations = {
    increment(state){
        state.counter++
    },

    decrement(state){
        state.counter--
    },

}