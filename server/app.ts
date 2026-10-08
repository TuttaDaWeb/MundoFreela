import Fastify from 'fastify'

const app = Fastify()

const start = async () => {
    try {
        await app.listen({ port: 7535 })
    } catch {
        app.log.info('Couldnt connect to the server!')
    }
}

start()