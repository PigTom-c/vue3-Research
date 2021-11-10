<template>
    <a-card>
        <a-row :gutter="16">
            <a-col :span="12">
                <a-statistic-countdown
                        title="Countdown"
                        :value="state.deadline"
                        style="margin-right: 50px"
                        @finish="onFinish"
                />
            </a-col>
            <a-col :span="12">
                <a-statistic-countdown
                        title="Million Seconds"
                        :value="state.deadline"
                        format="H 时 m 分 s 秒"
                        style="margin-right: 50px"
                />
            </a-col>
            <a-col :span="24" style="margin-top: 32px">
                <a-statistic-countdown title="Day Level" :value="state.deadline" format="D 天 H 时 m 分 s 秒" />
            </a-col>
        </a-row>
    </a-card>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue'
    const state = reactive({
        deadline: new Date('2021-12-22')
    })

    const onFinish = () => {
        console.log('finished!');
    };
</script>

<style scoped>
 .bg-grey {
     border: 1px solid #dbdbdb;
 }
</style>
