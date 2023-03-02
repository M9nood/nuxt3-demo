<template>
    <div>
        <LabelTitle>Secret Page</LabelTitle>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ['secret']
})
</script>