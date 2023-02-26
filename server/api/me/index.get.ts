export default defineEventHandler((event) => {
    // return sendError(event, { statusCode: 500, statusMessage: 'unexpect error'})
    return {
        id: 1,
        name: "toei"
    }
})