import { REFRESH_JWT_TOKEN, INSERT_BASKET, SAVE_BASKET} from './storeTypes'
// import { auth } from '@/api/auth'

export default {
    // [LOGIN] ({commit}, {username, password}) {
    //     login(username, password)
    //     // .then(saveToken)
    // },

    [REFRESH_JWT_TOKEN] () {
        // TODO
    },

    [INSERT_BASKET] ({commit}, id) {
        commit(INSERT_BASKET, id)
    },

    [SAVE_BASKET] ({commit}, ids) {
        commit(SAVE_BASKET, ids)
    }
}
