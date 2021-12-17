<template>
    <div>
        <a-modal v-model:visible="visible" title="Modal" @ok="handleOk">
            <div v-for="i in 10">
                <p>{{ state.text }}</p>
            </div>
        </a-modal>
        <a-table :columns="columns" :data-source="data">
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'">
                <a @click="showModal(text)">{{ text }}</a>
              </template>
            </template>
        </a-table>
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive } from 'vue';
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 80,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address 1',
            ellipsis: true,
        },
        {
            title: 'Long Column Long Column Long Column',
            dataIndex: 'address',
            key: 'address 2',
            ellipsis: true,
        },
        {
            title: 'Long Column Long Column',
            dataIndex: 'address',
            key: 'address 3',
            ellipsis: true,
        },
        {
            title: 'Long Column',
            dataIndex: 'address',
            key: 'address 4',
            ellipsis: true,
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park, London No. 2 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    const state = reactive({
        text: ''
    })
    const text = ref<string>('');
    const visible = ref<boolean>(false);

    const showModal = (text: string) => {
        state.text = text
        visible.value = true;
    };

    const handleOk = () => {
        visible.value = false
    }
</script>

<style scoped>

</style>
