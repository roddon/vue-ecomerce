<template>
    <div style="padding: 20px;">
        <h5 style="padding-bottom: 20px;">
            <i class="fa fa-arrow-left" style="color: black;"></i>
            Nickname
        </h5>
        <div class="d-flex">
            <img class="avatar" src="avatar.jpeg" alt="avatar">
            <v-container
                class="grey lighten-5 mb-6"
            >
                <v-row
                    :align="align"
                    no-gutters
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
                    :align="align"
                    no-gutters
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
                    <i class="fa fa-table tab-icon"></i>
                </v-tab>
        
                <v-tab
                    href="#mobile-tabs-5-2"
                    class="tab-text"
                >
                    <i class="fa fa-table tab-icon"></i>
                </v-tab>
        
                <v-tab
                    href="#mobile-tabs-5-3"
                    class="tab-text"
                >
                    <i class="fa fa-table tab-icon"></i>
                </v-tab>
                </v-tabs>
            </v-toolbar>
        
            <v-tabs-items v-model="tabs">
                <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'mobile-tabs-5-' + i"
                >
                   <img class="img-fluid" src="image.png" alt="">
                </v-tab-item>
            </v-tabs-items>
        </div>
        <div style="padding: 10px;">
            <div>
                <i class="fa fa-heart-o other-icon"></i>
                <i class="fa fa-heart-o other-icon"></i>
                <i class="fa fa-heart-o other-icon"></i>
                <i class="fa fa-heart-o other-icon float-right"></i>
            </div>
            <div>
                34Likes
            </div>
            <div>
                Ver los 2 comentanos
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
                <i class="fa fa-heart-o other-icon"></i>
                <SpinInput/>
            </div>
            <div class="d-flex justify-space-around align-items-center m-4">
                <i class="fa fa-heart-o other-icon"></i>
                <SpinInput/>
            </div>
        </div>
    </div>
</template>
<script>
    import SpinInput from '../components/SpinInput';

    export default {
        name: 'Profile',
        components: {
            SpinInput
        },
        data: () => ({
            tabs: null
        })
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
</style>