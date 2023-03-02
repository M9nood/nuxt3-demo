export default defineEventHandler((event) => {
    const param = event.node.req.url
    return {
        id: 1,
        name: "toei",
        param: param
    }
})