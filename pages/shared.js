import axios from 'axios'

export async function init({store, redirect  }){
    
    // if(isClient) return

    try{
      const res = await axios.get('http://localhost:3777/todos')
      store.commit('init', res.data)
    } catch( error){
      redirect('/error')
    }
  }