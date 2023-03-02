<template>
    <div>
        <LabelTitle>Welcome Nuxt3.</LabelTitle>
        <LabelTimer :timer="timer.time"></LabelTimer>
        <a @click="reload" class="btn">Refresh Data</a>
        <pre>{{ resData }}</pre>
    </div>
</template>

<script setup lang="ts">
const timer = useTimer()

const { data: resData, refresh: refreshMe} = await useFetch('/api/me')

function reload(){
    refreshMe()
}

</script>

<style scoped>
.btn {
    color: orange;
    text-decoration: underline;
}
</style>