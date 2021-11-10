<template>
    <div>111</div>
    <a-button @click="click">click me</a-button>
</template>

<script setup lang="ts">
    import { inject } from 'vue'

    const test = inject('test')
    const click = () => {
        console.log(test);
    }
</script>

<style scoped>

</style>
