import express, { Request, Response} from 'express';
import knex from '../database/connection';

class PointsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { 
      name, 
      email,
      whatsapp, 
      latitude, 
      longitude, 
      city, 
      state, 
      items } = request.body;
  
    const trx = await knex.transaction();
  
    const point = { 
      image: 'image-fake',
      name, 
      email,
      whatsapp, 
      latitude, 
      longitude, 
      city, 
      state
    };

    const insertedIds = await trx('points').insert(point);
  
    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      }
    });

    await trx('point_items').insert(pointItems);

    return response.json({ 
      id: point_id,
      ...point 
    });
  }
}

export default new PointsController();