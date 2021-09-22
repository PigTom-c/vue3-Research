<template>
    <a-card hoverable style="width: 300px">
        <template #cover>
            <img alt="example"
                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        </template>
        <template class="ant-card-actions" #actions>
            <setting-outlined key="setting" />
            <edit-outlined key="edit" />
            <ellipsis-outlined key="ellipsis" />
        </template>
        <a-card-meta title="Card title" description="This is the description">
            <template #avatar>
                <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
        </a-card-meta>
    </a-card>
</template>

<script lang="ts" setup>
    import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';

</script>

<style scoped>

</style>
