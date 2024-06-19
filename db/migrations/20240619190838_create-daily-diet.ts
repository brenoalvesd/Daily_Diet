import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('daily diet', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.timestamp('ate_at').defaultTo(knex.fn.now()).notNullable()
    table.text('description').notNullable()
    table.boolean('is_in_diet').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('daily diet')
}
