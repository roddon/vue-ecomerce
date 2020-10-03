import { GET_TOKEN, GET_BASKET, GET_CATEGORYS, GET_TITLES } from './storeTypes'

export default {
    [GET_TOKEN] (state) {
        return state.token
    },
    [GET_BASKET] (state) {
        return state.categorys.filter(category => state.basket.includes(category.id))
    },
    [GET_CATEGORYS]: state=> title=> {
        // console.log(state.categorys)
        let result = state.categorys.filter(category => category.title == title);
        // console.log(result);
        return result;
    },
    [GET_TITLES] (state) {
        return state.titles
    }
}