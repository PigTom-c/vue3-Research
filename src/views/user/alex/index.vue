<template>
    <div>
        <a-list
                v-if="comments.length"
                :data-source="comments"
                :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
                item-layout="horizontal"
        >
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-comment
                            :author="item.author"
                            :avatar="item.avatar"
                            :content="item.content"
                            :datetime="item.datetime"
                    />
                </a-list-item>
            </template>
        </a-list>
        <a-comment>
            <template #avatar>
                <a-avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                />
            </template>
            <template #content>
                <a-form-item>
                    <a-textarea v-model:value="value" :rows="4" />
                </a-form-item>
                <a-form-item>
                    <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                        Add Comment
                    </a-button>
                </a-form-item>
            </template>
        </a-comment>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    dayjs.extend(relativeTime);

    type Comment = Record<string, string>;

    const comments = ref<Comment[]>([]);
    const submitting = ref<boolean>(false);
    const value = ref<string>('');
    const handleSubmit = () => {
        if (!value.value) {
            return;
        }

        submitting.value = true;

        setTimeout(() => {
            submitting.value = false;
            comments.value = [
                {
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: value.value,
                    datetime: dayjs().fromNow(),
                },
                ...comments.value,
            ];
            value.value = '';
        }, 1000);
    };
</script>

<style scoped>

</style>
