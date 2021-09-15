<template>
    <div>11111</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        setup() {
            function handleClose(val) {
                console.log('调用了 handleClose()', val)
            }

            return {
                handleClose
            }
        }
    })
</script>

<style scoped>

</style>
