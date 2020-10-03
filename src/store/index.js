import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // initial state
        token:'',
        titles: ['like', 'follower', 'view', 'comment'],
        categorys:[
            { id: 1, title: 'like', number: 300, price: 399},
            { id: 2, title: 'like', number: 1000, price: 799},
            { id: 3, title: 'like', number: 3000, price: 1999},
            { id: 4, title: 'follower', number: 300, price: 399},
            { id: 5, title: 'follower', number: 1000, price: 799},
            { id: 6, title: 'follower', number: 3000, price: 1999},
            { id: 7, title: 'view', number: 300, price: 399},
            { id: 8, title: 'view', number: 1000, price: 799},
            { id: 9, title: 'view', number: 3000, price: 1999},
            { id: 10, title: 'comment', number: 300, price: 399},
            { id: 11, title: 'comment', number: 1000, price: 799},
            { id: 12, title: 'comment', number: 3000, price: 1999},
        ],
        basket:[]
    },
    actions,
    mutations,
    getters
})

export default store
