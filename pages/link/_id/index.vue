<template>
    <div>
       <h1>Link ID: {{ $route.params.id }}</h1>
    </div>
</template>
<script>
export default {
    layout: 'default',
    validate (params) {
        // Must be a number
        return /^\d+$/.test(params);
    },
    testJest (id) {
        if( id === undefined ) return false;
        if( id !== undefined && !isNaN(id)) {
            return true;
        } else {
            return false;
        }

    }
}
</script>
<style>
    
</style>