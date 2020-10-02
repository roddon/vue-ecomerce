<template>
    <v-container class="my-12">
        <v-row class="mx-2 my-2">
            <v-col style="font-size: 20px;">
                Total IVA incluido
            </v-col>
            <v-col style="text-align: right; color: red; font-size: 25px;">
                {{ price }} &euro;
            </v-col>
        </v-row>
        <v-btn
            depressed
            large
            color="error"
            class="float-right"
            @click="clickContinue"
        >
            Continuar
        </v-btn>
    </v-container>
</template>
<script>
    export default {
        name: 'ShoppingContinue',
        props: ['price'],
        methods: {
            clickContinue(){
                this.$emit('ClickContinue')
            }
        }
    }
</script>