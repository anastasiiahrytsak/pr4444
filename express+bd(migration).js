// knexfile.js
export default {
  development: {
    client: 'sqlite3',
    connection: { filename: './dev.sqlite3' },
    useNullAsDefault: true,
    migrations: { directory: './migrations' }
  }
};

export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');         // ID (Auto-increment)
    table.string('username').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);   // created_at та updated_at
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
}

export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');         // ID (Auto-increment)
    table.string('username').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.timestamps(true, true);   // created_at та updated_at
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
}