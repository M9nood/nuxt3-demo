<template>
    <div>
        <LabelTitle>Welcome Nuxt3.</LabelTitle>
        <LabelTimer :timer="timer.time"></LabelTimer>
    </div>
</template>

<script setup lang="ts">
const timer = useTimer()

</script>

<style scoped>
.btn {
    color: orange;
    text-decoration: underline;
}
</style>