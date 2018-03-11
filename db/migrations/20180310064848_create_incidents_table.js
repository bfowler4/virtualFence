
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`incidents`, (table) => {
    table.increments().notNullable();
    table.integer(`time`).notNullable();
    table.string(`longitude`).notNullable();
    table.string(`latitude`).notNullable();
    table.integer(`device_id`).notNullable();
    table.integer(`user_id`).references(`id`).inTable(`users`);
    table.timestamp(`created_at`).defaultTo(knex.fn.now());
    table.timestamp(`updated_at`).defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`incidents`);
};
