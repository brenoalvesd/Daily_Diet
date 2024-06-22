import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { knex } from '../database'

// THIS IS A PLUG-IN FROM FASTIFY...
// WHERE I'M SEPARATING THE ENDPOINTS TO THIS FILE, MAINTAINING THE server.ts FILE ONLY TO MANAGE THE SERVER
// THIS FILE CONTAINS ALL THE ENDPOINTS AT THE FUNCTION "dietRoutes"
export async function dietRoutes(app: FastifyInstance) {
  app.post('/diet', async (request, reply) => {
    const createMealBodySchema = z.object({
      title: z.string(),
      description: z.string(),
      mealTime: z.string(),
      isInDiet: z.boolean(),
    })

    const { title, description, mealTime, isInDiet } =
      createMealBodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    try {
      await knex('daily diet').insert({
        id: randomUUID(),
        title,
        description,
        mealTime,
        isInDiet,
        session_id: sessionId,
      })
      return reply
        .status(201)
        .send({ message: 'Meal was successfully created.' })
    } catch (error) {
      return reply.status(500).send({ message: 'Failed to create meal.' })
    }
  })

  app.get('/diet', async () => {
    const meals = await knex('daily diet').select()

    return { meals }
  })

  app.get('/diet/:id', async (request) => {
    const getMealParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getMealParamsSchema.parse(request.params)

    const meal = await knex('daily diet').where('id', id).first()

    return { meal }
  })
}
