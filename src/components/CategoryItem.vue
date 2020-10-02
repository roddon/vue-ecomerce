<template>
    <v-container style="padding: 10px 25px;">
        <v-row>
            <v-col>
                <div style="font-size: 18px;">
                    Pack de {{ number }} {{ title }}
                </div>
                <div style="color: gray; cursor: pointer;" @click="moreInfo">
                    more info
                </div>
            </v-col>
            <v-col style="color: red; text-align: right;">
                <div style="font-size: 25px;">
                    {{ price }} &euro;
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
        props: ['title', 'number', 'price'],
        methods: {
            moreInfo(){
                this.$emit('MoreInfo', this.title, this.number)
            },
            buyNow(){
                this.$emit('BuyNow', this.title, this.price)
            }
        }
    }
</script>