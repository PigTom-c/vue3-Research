<template>
    <Child v-if="open" ref="child" />

    <a-button @click="handleClick">click me</a-button>
</template>

<script setup lang="ts">
    import { ref, nextTick } from 'vue'
    import Child from './Child.vue'

    const child = ref()

    const open = ref(false)

    const handleClick = async() => {
        open.value = true
        await nextTick()
        child.value.handleClose('111')
    }
</script>

<style scoped>

</style>
