import store from './main'
import axios from 'axios'

export default {
  namespaced: true,
  state:{
    token: null,
    user: null
  },
  getters:{
    isAuthenticated(state){
      return state.token && state.user
    },
    getUser(state){
      return state.user
    }
  },
  mutations:{
    setToken(state, token){
      state.token = token
    },
    setUser(state, user){
      state.user = user
    }
  },
  actions:{
    async login({dispatch}, credentails){

      store.commit('setLoading', true)
      let response = await axios.post('/login', credentails)
      .catch((e)=>{
        store.commit('setLoading', false);
        console.log(e);
      })

      return dispatch('attempt', response.data.token)
    },
    async attempt({commit, state}, token){
      if(token){
        commit('setToken', token)
      }

      if(!state.token){
        return
      }

      try{
        let response = await axios.get('/profile')
        commit('setUser', JSON.parse(response.data))
      }catch(e){
        commit('setUser', null)
        commit('setToken', null)
      }
      store.commit('setLoading', false)
    },
    async register(_, form){
      store.commit('setLoading', true)
      return await axios.post('/register', form)
      .then(()=>{
        store.commit('setLoading', false)
      })
      .catch((e)=>{
        store.commit('setLoading', false)
        console.log(e)
      })
    },
    logout({commit}){
      store.commit('setLoading', true)
      localStorage.removeItem('token')
      commit('setUser', null)
      commit('setToken', null)
      store.commit('setLoading', false)
    }
  }
}