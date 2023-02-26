<template>
    <div>{{ timer }}</div>
</template>

<script setup lang="ts">
defineProps({
    timer: ref<String>
})
</script>