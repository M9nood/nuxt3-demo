<template>
    <div>{{ timer }}</div>
</template>

<script setup lang="ts">
defineProps({
    timer: { type: [ref<String>, Object] }
})
</script>