<template>
    <a-carousel autoplay>
        <div v-for="list in imgList">
            <img :src="list" />
        </div>
    </a-carousel>
</template>
<script lang="ts" setup>
    import one from '/@/assets/images/1.jpg'
    import two from '/@/assets/images/2.jpg'
    import three from '/@/assets/images/3.jpg'

    const imgList = [one, two, three]
</script>

<style scoped>
    .ant-carousel :deep(.slick-slide) {
        text-align: center;
        height: 100%;
        line-height: 160px;
        background: white;
    }

    .ant-carousel :deep(.slick-slide h3) {
        color: #fff;
    }
</style>
