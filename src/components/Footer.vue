<template>
    <div class="footer ">
        <div class="d-flex justify-content-center align-items-center">
            <router-link to="/">
                <i class="fa fa-home"></i>
            </router-link>
            <router-link to="/search">
                <i class="fa fa-search"></i>
            </router-link>
            <router-link to="/category">
                <i class="fa fa-shopping-bag" style="font-size:30px"></i>
            </router-link>
            <router-link to="/shopping">
                <i class="fa fa-heart-o"></i>
            </router-link>
            <router-link to="/profile">
                <i class="fa fa-user-o"></i>
            </router-link>
        </div>
    </div>
</template>
<script>

</script>
<style>
    .footer{
        background-color: red;
        height: 60px;
    }
    i{
        color:white;
    }
    .footer i{
        font-size:20px;
        margin: 15px 20px;
    }
</style>