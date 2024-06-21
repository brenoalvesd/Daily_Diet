import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('daily diet', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.timestamp('mealTime').defaultTo(knex.fn.now()).notNullable()
    table.text('description').notNullable()
    table.boolean('isInDiet').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('daily diet')
}
