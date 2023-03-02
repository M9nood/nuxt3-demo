export default defineNuxtRouteMiddleware((to) => {
    console.log('Running secret from middleware')
    if(to.fullPath === '/secret'){
        return abortNavigation() 
    }
})