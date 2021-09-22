<template>
    <div>
        <a-row class="myrow">
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">111</a-col>
            <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</a-col>
            <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
        </a-row>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    .myrow {
        background: rgba(0,146,255,.75);
    }
    .myrow :nth-child(2) {
        background: #0092ff;
    }
</style>
