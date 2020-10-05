<template>
    <div>
        <div style="padding: 10px 0;">
            <v-toolbar flat>
                <v-tabs
                    v-model="tabs"
                    fixed-tabs
                >
                <v-tabs-slider></v-tabs-slider>
                <v-tab
                    href="#mobile-tabs-5-1"
                    class="tab-text"
                >
                    <i class="fa fa-image tab-icon"></i>
                </v-tab>
        
                <v-tab
                    href="#mobile-tabs-5-2"
                    class="tab-text"
                >
                    <i class="fa fa-square-o tab-icon"></i>
                </v-tab>
        
                <v-tab
                    href="#mobile-tabs-5-3"
                    class="tab-text"
                >
                    <i class="fa fa-film tab-icon"></i>
                </v-tab>
                </v-tabs>
            </v-toolbar>
        
            <v-tabs-items v-model="tabs">
                <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'mobile-tabs-5-' + i"
                >
                   <img class="img-fluid" :src="data.display_url" alt="">
                </v-tab-item>
            </v-tabs-items>
        </div>
        <div style="padding: 10px;">
            <div>
                <i class="fa fa-heart-o other-icon"></i>
                <i class="fa fa-comment-o other-icon"></i>
                <i class="fa fa-paper-plane-o other-icon"></i>
                <i class="fa fa-bookmark-o other-icon float-right"></i>
            </div>
            <div>
                {{ data.edge_media_preview_like.count }}Likes
            </div>
            <div>
                Ver los {{ data.edge_media_to_comment.count }} comentanos
            </div>
        </div>
        <div class="text-center">
            <div class="mt-4">
                Aumentar engagement
            </div>
            <div class="d-flex justify-space-around align-items-center m-4">
                <i class="fa fa-heart-o other-icon"></i>
                <SpinInput/>
            </div>
            <div class="d-flex justify-space-around align-items-center m-4">
                <i class="fa fa-comment-o other-icon"></i>
                <SpinInput/>
            </div>
            <div class="d-flex justify-space-around align-items-center m-4">
                <i class="fa fa-square-o other-icon"></i>
                <SpinInput/>
            </div>
        </div>
    </div>
</template>
<script>
    import SpinInput from './SpinInput'

    export default {
        name: 'Post',
        props: ['data'],
        components: {
            SpinInput
        },
        data: () => ({
            tabs: null
        }),
        mounted() {
            console.log('this is post\n'+this.data)
        }
    }
</script>
<style>

</style>