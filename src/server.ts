import fastify from 'fastify'
import { env } from './env'
import { dietRoutes } from './routes/endpoints'

const app = fastify()

app.register(dietRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is running!')
  })
