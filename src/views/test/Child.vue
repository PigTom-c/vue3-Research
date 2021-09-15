<template>
    <div>{{ son }}</div>
    {{ value }}
</template>

<script setup lang="ts">

    import { ref, useContext, onMounted, defineEmit, defineProps } from 'vue'

    const props = defineProps({
        value: String
    })

    const { expose,attrs } = useContext()

    const emit = defineEmit(['update'])

    onMounted(() => {
        emit('update', [{age: '18'},{age: '25'},{age: '28'},])
        console.log(props.value);
    })

    let son = ref('我是子组件')

    const init = () => {
        son.value = '我是子组件'
    }

    expose({
        son,
        init
    })
</script>

<style scoped>

</style>
