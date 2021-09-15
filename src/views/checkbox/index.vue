<template>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
        <a-checkbox
                v-model:checked="checkAll"
                :indeterminate="indeterminate"
                @change="onCheckAllChange"
        >
            Check all
        </a-checkbox>
    </div>
    <br />
    <a-checkbox-group v-model:value="checkedList" :options="plainOptions" />
</template>
<script lang="ts">
    import { defineComponent, reactive, toRefs, watch } from 'vue';
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    export default defineComponent({
        setup() {
            // Map map = new Map();
            const state = reactive({
                indeterminate: true,
                checkAll: false,
                checkedList: ['Apple', 'Orange'],
            });

            const onCheckAllChange = (e: any) => {
                Object.assign(state, {
                    checkedList: e.target.checked ? plainOptions : [],
                    indeterminate: false,
                });
            };
            watch(
                () => state.checkedList,
                val => {
                    state.indeterminate = !!val.length && val.length < plainOptions.length;
                    state.checkAll = val.length === plainOptions.length;
                },
            );

            return {
                ...toRefs(state),
                plainOptions,
                onCheckAllChange,
            };
        },
    });
</script>
