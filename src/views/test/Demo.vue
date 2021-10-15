<template>
    <Child v-model:value="value" @update="handeleLog" ref="sonRef" />

    <div class="flex">
        <a-button @click="updateSonValue"> clike me</a-button>
        <a-button @click="handleSonFn">调用子组件的方法</a-button>
        <a-button @click="handleClick" v-preventClick>test</a-button>
    </div>

</template>

<script setup lang="ts">
    import Child from './Child.vue'

    import {ref, reactive, toRefs, createApp} from 'vue'
    const sonRef = ref()

    const state = reactive({
        value: 'nice day'
    })

    const updateSonValue = () => {
        sonRef.value.son = '父组件修改了我'
    }

    const handleSonFn = () => {
        sonRef.value.init()
    }

    type Recordable<T = any> = Record<string, T>;

    const handeleLog = (val:Recordable<Object>) => {
        console.log('子组件调用父组件的函数, 参数1: ', val)
    }

    const handleClick = () => {
        if (state.value === 'nice day') {
            state.value = 'good tomorrow'
            return
        }
        state.value = 'nice day'
    }

    const { value } = { ...toRefs(state) }

</script>

<style scoped>
 .flex {
     display: flex;
     width: 350px;
     justify-content: space-between;
 }
</style>
