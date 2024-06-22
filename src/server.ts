import fastify from 'fastify'
import { env } from './env'
import { dietRoutes } from './routes/endpoints'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.register(dietRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server is running!')
  })
