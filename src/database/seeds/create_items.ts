import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamp', image: 'lamp.svg' },
    { title: 'Battery', image: 'battery.svg' },
    { title: 'Paper', image: 'paper.svg' },
    { title: 'Electronic', image: 'electronic.svg' },
    { title: 'Organic', image: 'organic.svg' },
    { title: 'Kichen Oil', image: 'oil.svg' },
  ]);
}