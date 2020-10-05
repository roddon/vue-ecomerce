<template>
    <div style="min-height: 500px;">
        <h5 style="padding: 20px;">
            <i class="fa fa-arrow-left" style="color: black;"></i>
            Nickname
        </h5>
        <div class="d-flex" style="padding:20px">
            <img class="avatar" src="avatar.jpeg" alt="avatar">
            <v-container
                class="grey lighten-5 mb-6"
            >
                <v-row
                >
                    <v-col class="number">
                        221
                    </v-col>
                    <v-col class="number" style="color: red;">
                        12390
                    </v-col>
                    <v-col class="number">
                        1123
                    </v-col>
                </v-row>
                <v-row
                >
                    <v-col>
                        Posts
                    </v-col>
                    <v-col>
                        seguidores
                    </v-col>
                    <v-col>
                        seguidos
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="text-center">
            <p style="padding: 10px;">
                Aumentar seguidores
            </p>
            <SpinInput/>
        </div>
        <div class="posts-scroll my-3">
            <Post 
                v-for="(item, index) in getPosts.posts"
                :key="index"
                :data=item.node
            />
        </div>      
    </div>
</template>
<script>
    import SpinInput from '../components/SpinInput';
    import Post from '../components/Post'
    import {LOAD_POSTS, LOAD_PROFILE, GET_PROFILE, GET_POSTS} from '@/store/storeTypes'

    export default {
        name: 'Profile',
        components: {
            SpinInput,
            Post
        },
        methods: {
            // instagramId:22686243, first:20, endCursor:''
            loadPosts(instagramId, first, endCursor){
                this.$store.dispatch(LOAD_POSTS, {instagramId, first, endCursor})
            },
            loadProfile(nickname){//'gramupy1'
                console.log('profile page loadProfile')
                this.$store.dispatch(LOAD_PROFILE, nickname)
            }
        },
        computed: {
            getProfile: function(){
                console.log('profile getprofile function')
                let profile = this.$store.getters[GET_PROFILE]
                console.log(profile)
                return profile
            },
            getPosts: function(){
                let posts = this.$store.getters[GET_POSTS]
                return posts
            }
        },
        mounted() {
            this.loadProfile('gramupy1')
            this.loadPosts(22686243, 12, '')
        }
    };
</script>
<style>
    .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .number{
        font-size: 25px;
    }
    .tab-icon{
        color: gray;
        font-size: 30px;
    }
    .other-icon{
        color: black;
        font-size: 30px;
        padding: 0 5px;
    }
    .posts-scroll{
        height: 400px;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        overflow-y: scroll; /* Add vertical scrollbar */
    }
    .posts-scroll::-webkit-scrollbar{
        width: 0 !important;
    }
</style>