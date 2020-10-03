<template>
    <v-container style="padding: 10px 25px;">
        <v-row>
            <v-col class="col-7">
                <div style="font-size: 18px;">
                    Pack de {{ category.number }} {{ category.title }}
                </div>
                <div style="color: gray; cursor: pointer;" @click="moreInfo">
                    more info
                </div>
            </v-col>
            <v-col class="col-5" style="color: red; text-align: right;">
                <div style="font-size: 25px;">
                    {{ category.price }} &euro;
                </div>
                <div style="cursor: pointer;" @click="buyNow">
                    comprar ahora
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: 'CategoryItem',
        props: ['category'],
        methods: {
            moreInfo(){
                this.$emit('MoreInfo', this.category)
            },
            buyNow(){
                this.$emit('BuyNow', this.category)
            }
        }
    }
</script>