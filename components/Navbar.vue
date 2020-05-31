<template>
    <ul class="d-flex">
        <li class="mx-5 my-5">
            <a href="#">Link</a>
        </li>
        <li class="mx-5 my-5">
            <a href="#">Link</a>
        </li>
        <li class="mx-5 my-5">
            <a href="#">Link</a>
        </li>
        <button class="btn btn-primary mx-5 my-5 loader" disabled="disabled">loading..</button>
    </ul>
</template>
<script>
export default {
    
}
</script>
<style>
    ul {
        background: #000;
    }
    li {
        list-style-type: none;
    }
    a {
        color: #fff;
    }
    a:hover {
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        text-decoration: none;
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