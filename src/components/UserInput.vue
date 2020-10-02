<template>
    <div style="padding: 10px 20px;">
        <span class="user-input-title">{{ title }}</span>
        <input type="text" class="user-input" :placeholder="placeholder">
    </div>
</template>
<script>
    export default {
        name: 'UserInput',
        props: ['title', 'placeholder']
    }
</script>
<style>
    .user-input{
        padding: 5px 10px;
        border: gray solid 1px;
        font-size: 20px;
        width: 100%;
    }
    .user-input-title{
        float: right;
        color: gray;
        font-size: 15px;
    }
</style>