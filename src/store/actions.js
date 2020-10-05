import { REFRESH_JWT_TOKEN, INSERT_BASKET, SAVE_BASKET, LOAD_POSTS, LOAD_PROFILE} from './storeTypes'
// import { auth } from '@/api/auth'
import { getProfile, getPosts } from '@/api/profile'

export default {
    // [LOGIN] ({commit}, {username, password}) {
    //     login(username, password)
    //     // .then(saveToken)
    // },

    [REFRESH_JWT_TOKEN] () {
        // TODO
    },

    [INSERT_BASKET] (context, id) {
        context.commit(INSERT_BASKET, id)
    },

    [SAVE_BASKET] ({commit}, ids) {
        commit(SAVE_BASKET, ids)
    },

    [LOAD_PROFILE] (context, nickname) {
        console.log('action first profile'+nickname)
        return getProfile(nickname)
            .then(function(profile) {
                console.log('action result profile')
                context.commit(LOAD_PROFILE, profile)
            })
    },

    [LOAD_POSTS] (context, {instagramId, first, endCursor}) {
        // console.log('instagramId:'+instagramId+', first:'+first+', endCursor:'+endCursor)
        return getPosts(instagramId, first, endCursor)
            .then(function(posts){
                // console.log(posts)
                context.commit(LOAD_POSTS, posts)
            })
    }
}
