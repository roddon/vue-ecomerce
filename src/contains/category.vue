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
                v-for="i in 4"
                :key="i"
                :value="'mobile-tabs-5-' + i"
            >
                <CategoryItem title="Likes" number="300" price="399" @MoreInfo = "moreInfo" @BuyNow = "buyNow"/>
                <CategoryItem title="Likes" number="1000" price="799" @MoreInfo = "moreInfo" @BuyNow = "buyNow"/>
                <CategoryItem title="Likes" number="3000" price="1999" @MoreInfo = "moreInfo" @BuyNow = "buyNow"/>
                <hr>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>
<script>
    import CategoryItem from '../components/CategoryItem';

    export default {
        name: 'Category',
        components: {
            CategoryItem,
        },
        methods : {
            moreInfo(title, number) {
                console.log('more info'+title+number)
            },
            buyNow(title, price) {
                console.log('buy now'+title+price)
                this.$router.push('/shopping')
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