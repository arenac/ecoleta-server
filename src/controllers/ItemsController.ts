import express, { Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const items = await knex('items').select('*');

  const serializedItems = items.map(item => {
    return {
      ...item,
      image_url: `${process.env.BASE_URL}/uploads/${item.image}`
    }
  })

  return response.json(serializedItems);
  }
}

export default new ItemsController();