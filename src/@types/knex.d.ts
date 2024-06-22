// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    'daily diet': {
      id: string
      title: string
      description: string
      mealTime: string
      isInDiet: boolean
      session_id?: string
    }
  }
}
