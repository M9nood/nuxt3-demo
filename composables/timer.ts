export const useTimer = () => {
    const time = ref<string>(new Date().toLocaleTimeString())
    setInterval(() => time.value = new Date().toLocaleTimeString(), 1000)
    
    return {
        time
    }
}