import { SAVE_TOKEN, INSERT_BASKET, SAVE_BASKET, REMOVE_BASKET, 
    LOAD_PROFILE, LOAD_POSTS} from './storeTypes'

export default {
    [SAVE_TOKEN] (state, {token}) {
        // Save token etc.
        state.token = token
    },
    [INSERT_BASKET] (state, id) {
        // Insert category id in basket
        state.basket.push(id)
    },
    [SAVE_BASKET] (state, ids) {
        // Insert category id in basket
        state.basket = ids
    },
    [REMOVE_BASKET] (state, id) {
        // Insert category id in basket
        let basket = state.basket
        state.basket.splice(basket.indexOf(id), 1);
    },
    [LOAD_PROFILE] (state, profile) {
        state.profile = profile
    },
    [LOAD_POSTS] (state, posts) {
        state.posts = posts
    }
}
