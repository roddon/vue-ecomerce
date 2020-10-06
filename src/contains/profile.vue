<template>
    <div style="min-height: 500px;">
        <router-link to="/search" style="color: black; text-decoration: none;">
            <h5 style="padding: 20px">
                <i class="fa fa-arrow-left" style="color: black;"></i>
                {{ getProfile.profile.username }}
            </h5>
        </router-link>
        <div class="d-flex" style="padding:20px">
            <img class="avatar" :src="getProfile.profile.profile_pic_url" alt="avatar">
            <v-container
                class="grey lighten-5 mb-6"
            >
                <v-row
                >
                    <v-col class="number">
                        {{ getProfile.profile.posts }}
                    </v-col>
                    <v-col class="number" style="color: red;">
                        {{ getProfile.profile.edge_follow }}
                    </v-col>
                    <v-col class="number">
                        {{ getProfile.profile.edge_followed_by }}
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
    import {GET_PROFILE, GET_POSTS} from '@/store/storeTypes'

    export default {
        name: 'Profile',
        components: {
            SpinInput,
            Post
        },
        methods: {
        },
        computed: {
            getProfile: function(){
                console.log('profile getprofile function')
                let profile = this.$store.getters[GET_PROFILE]
                console.log(profile)
                if(Object.keys(profile).length == 0){
                    profile['profile'] = {}
                    profile['profile']['username'] = 'Nickname'
                    profile['profile']['profile_pic_url'] = 'https://as2.ftcdn.net/jpg/03/32/59/65/500_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg'
                    profile['profile']['posts'] = '0'
                    profile['profile']['edge_follow'] = '0'
                    profile['profile']['edge_followed_by'] = '0'
                }
                else{
                    console.log('no posts')
                }
                return profile
            },
            getPosts: function(){
                let posts = this.$store.getters[GET_POSTS]
                return posts
            }
        },
        mounted() {
        },
        data () {
            return {
            }
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