<template>
    <div>
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="Tab 1">
                <Steps />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2" force-render>
                <Timeline />
            </a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">
                <Card />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import Card from './components/Card.vue'
    import Steps from './components/Steps.vue'
    import Timeline from './components/Timeline.vue'
    const activeKey = ref('2')
</script>

<style scoped>

</style>
