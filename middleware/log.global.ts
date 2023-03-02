export default defineNuxtRouteMiddleware((to) => {
    console.log('Running global from middleware log:', to.fullPath)
})