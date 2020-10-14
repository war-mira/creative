import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      favorite: []
    },
    getters: {
        getFavorites(state){
            return state.favorite
        }
    },
    mutations: {
        SET_FAVORITE (state, id) {
            if(state.favorite.includes(id)){
                const index = state.favorite.indexOf(id);
                state.favorite.splice(index, 1);
                return
            }
            state.favorite.push(id)
        },
    },
    actions: {
        setFavorite({commit}, id){
            commit('SET_FAVORITE', id)
        }
    }
  }
)