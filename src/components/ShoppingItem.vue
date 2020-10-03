<template>
    <v-container style="padding: 10px 25px;">
        <v-row>
            <v-col class="col-6">
                <div style="font-size: 18px;">
                    Pack de {{ category.number }} {{ category.title }}
                </div>
            </v-col>
            <v-col class="col-4" style="color: red; text-align: right;">
                <div style="font-size: 25px;">
                    {{ category.price }} &euro;
                </div>
            </v-col>
            <v-col class="col-2">
                <div @click="deleteItem">
                    <i class="fa fa-trash-o delete"></i>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        name: 'ShoppingItem',
        props: ['category'],
        methods: {
            deleteItem(){
                this.$emit('DeleteItem', this.category)
            }
        }
    }
</script>
<style>
    .delete{
        color: black; 
        cursor: pointer;
        font-size: 30px;
    }
</style>