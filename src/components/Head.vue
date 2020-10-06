<template>
    <div class="head">
        <v-row class="justify-space-between">
            <router-link to="/">
                <img alt="Logo" class="logo" src="/logo.png"/>
            </router-link>
            <div class="text-right">
                <v-menu
                    close-on-content-click
                    transition="slide-y-transition"
                    origin="bottom"
                    :position-x="250"
                    :position-y="80"
                    absolute
                >
                    <template v-slot:activator="{ on, attrs }">
                        <span
                        v-bind="attrs"
                        v-on="on"
                        >
                            <i class="fa fa-bars" style="font-size: 45px; text-align: center; margin:10px 20px;"></i>
                        </span>
                    </template>
                    <v-list style="background-color: red;">
                        <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        >
                        <v-list-item-title >
                            <router-link :to="item.to" style="color:white; text-decoration:none;">
                                {{ item.title }}
                            </router-link>
                        </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </v-row>
    </div>
</template>
<script>
    export default {
        data: () => ({
            items: [
            { title: 'Mi perfil', to: '/profile' },
            { title: 'Mis pedidos', to: '/shopping' },
            { title: 'Mis solicitudes', to: ''},
            { title: 'Cerrar sesion', to: '' },
            ]
        })
    }
</script>
<style>
    .head{
        background-color: red;
        height: 60px;
    }
    .logo{
        width: 60px;
        height: 60px;
        margin-left: 20px;
    }
</style>