<template>
    <div>
       <h1>Link ID: {{this.$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
    layout: 'default',
    validate ({ params }) {
        // Must be a number
        console.log(this.id)
        return /^\d+$/.test(params.id);
    }
}
</script>
<style>
    
</style>