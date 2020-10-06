<template>
    <div class="search-page">
        <div class="m-3 d-flex">

            <v-text-field
                v-model="nickname"
                label="full Nickname"
                clearable
            ></v-text-field>
            <v-btn class="mt-2" @click="clickProfile">
                profile
            </v-btn>
        </div>
    </div>
</template>
<script>
    import {LOAD_PROFILE, LOAD_POSTS} from '@/store/storeTypes'

    export default {
        name: 'Search',
        methods : {
            clickProfile() {
                console.log(this.nickname)
                this.$store.dispatch(LOAD_PROFILE, this.nickname)
                    .then(profile => {
                        if(Object.keys(profile).length != 0){
                            let instagramId = profile.profile.id_instagram
                            let first = profile.profile.posts
                            let endCursor = ''
                            this.$store.dispatch(LOAD_POSTS, {instagramId, first, endCursor})
                            this.$router.push('/profile')
                        }
                        else{
                            console.log('no profile')
                        }
                    })
            }
        },
        data () {
            return {
                nickname: ''
            }
        }
    }
</script>
<style>
    .search-page{
        min-height: 500px;
    }
</style>