<template>
    <div class="links">
        <nuxt-link class="link" to="/">Home</nuxt-link>
        <nuxt-link class="link" to="/link/1">Link 1</nuxt-link>
        <nuxt-link class="link" to="/link/2">Link 2</nuxt-link>
        <nuxt-link class="link" to="/link/3">Link 3</nuxt-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.links {
    padding-top:20px;
    padding-bottom: 20px;
    background-color: #000;
    text-align: center;
}
.link{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
    color: #fff;
}
    .loader {
        /*border-radius:50%;
        width: 10px;
        height: 10px;*/
        background-color: red;
        position: relative;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    @keyframes example {
        0%   {background-color:red;}
        25%  {background-color:yellow;}
        50%  {background-color:blue;}
        75%  {background-color:green;}
        100% {background-color:red;}
    }
</style>