<template>
    <div>
        <v-toolbar>
            <h5 style="padding: 20px;">
                Catalogo de packs
            </h5>
            <template v-slot:extension>
                <v-tabs
                    v-model="tabs"
                    fixed-tabs
                >
                    <v-tab
                        href="#mobile-tabs-5-1"
                        class="tab-text"
                    >
                        Likes
                    </v-tab>
        
                    <v-tab
                        href="#mobile-tabs-5-2"
                        class="tab-text"
                    >
                        Sequidores
                    </v-tab>
        
                    <v-tab
                        href="#mobile-tabs-5-3"
                        class="tab-text"
                    >
                        Views
                    </v-tab>
                    <v-tab
                        href="#mobile-tabs-5-4"
                        class="tab-text"
                    >
                        Comentarios
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>
    
        <v-tabs-items v-model="tabs">
            <v-tab-item
                v-for="(title, i) in getTitles"
                :key="i"
                :value="'mobile-tabs-5-' + (i+1)"
            >
                <CategoryItem 
                    v-for="(category, j) in getCategorys(title)"
                    :key="j"
                    :category="category" 
                    @MoreInfo = "moreInfo" 
                    @BuyNow = "buyNow"
                />
                <hr>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
    import CategoryItem from '../components/CategoryItem';
    import {GET_TITLES, GET_CATEGORYS, INSERT_BASKET} from '@/store/storeTypes'

    export default {
        name: 'Category',
        components: {
            CategoryItem,
        },
        methods : {
            moreInfo(category) {
                console.log('more info'+category)
            },
            buyNow(category) {
                this.$store.dispatch(INSERT_BASKET, category.id)
                this.$router.push('/shopping')
            }
        },
        computed : {
            getTitles : function(){
                return this.$store.getters[GET_TITLES]
            },
            getCategorys : function(){
                return title => this.$store.getters[GET_CATEGORYS](title)
            }
        },
        data () {
            return {
            tabs: null, 
        }
      },
    }
</script>
<style>
    .tab-text{
        text-decoration: none;
    }
</style>