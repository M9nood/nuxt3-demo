export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', (to) => {
        console.log('Running global-test from plugin log:', to.fullPath)
    }, { global: true })
    addRouteMiddleware('secrettest', (to) => {
        console.log('Running secret-test from plugin')
        if(to.fullPath === '/secret'){
            return abortNavigation() 
        }
    })
})