<template>
    <div class="cascaderItem">
        <div>
            <ul class="left">
                <li
                        class="label"
                        v-for="item in items"
                        :key="item"
                        @click="leftSelected = item"
                >
                    {{ item.label }}
                </li>
            </ul>
            <div class="right" v-if="rightItems">
                <cascader-item :items="rightItems" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { toRefs, reactive, computed } from 'vue';

    export default {
        name: 'cascaderItem',
        props: {
            items: Array
        },
        setup() {
            const state = reactive({
                leftSelected: null,
                rightItems: null
            });
            state.rightItems = computed(() => {
                if (state.leftSelected && state.leftSelected.children) {
                    return state.leftSelected.children;
                } else {
                    return null;
                }
            });
            return {
                ...toRefs(state)
            }
        }
    }
</script>

<style scoped>
    .cascaderItem {
        box-shadow: 0 2px 8px #00000026;
        background: white;
        border-radius: 2px;
        white-space: nowrap;
        font-size: 14px;
        /*position: absolute;*/
    }
    .left {
        list-style: none;
        display: inline-block;
        padding: 4px 0;
        overflow: auto;
        vertical-align: top;
        border-right: 1px solid #f0f0f0;
    }
    .left :hover{
        background: #e6f7ff;
    }
    .right {
        width: 100px;
        display: inline-block;
    }
    .label {
        padding: 5px 12px;
        line-height: 22px;
        white-space: nowrap;
        cursor: pointer;
        transition: all .3s;
    }
    .expand {
        position: relative;
        padding-right: 24px;
    }
</style>
