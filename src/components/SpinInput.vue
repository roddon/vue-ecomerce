<template>
    <div class="d-flex justify-content-center algin-items-center">
        <v-btn
        class="mx-2"
        small
        fab
        >
            <v-icon dark>
                mdi-minus
            </v-icon>
        </v-btn>
        <input class="number-input">
        <v-btn
        class="mx-2"
        small
        fab
        >
            <v-icon dark>
                mdi-plus
            </v-icon>
        </v-btn>
    </div>
</template>
<script>
    export default {
        name: 'SpinInput'
    }
</script>
<style>
    .number-input{
        font-size: 25px;
        color: red;
        padding: 5px 10px;
        border: solid 1px gray;
        width: 140px;
        text-align: right;
    }
</style>