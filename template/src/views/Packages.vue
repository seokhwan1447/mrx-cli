<template>
    <iframe class="report" src="/report.html"/>
</template>

<script>
export default {
    data () {
        return {}
    },
    created() {
        
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    destroyed() {
        console.log('destroyed')
    }
}
</script>

<style scoped>
.report {
    width:100%;
    height:100%;
}
</style>
