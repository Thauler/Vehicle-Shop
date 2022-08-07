import {
  Request,
  Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from '.';
import { Car } from '../interfaces/CarInterface';
import CarService from '../services/CarService';

export default class CarController extends Controller<Car> {
  #route: string;

  constructor(service: CarService, route = '/cars') {
    super(service);
    this.#route = route;
    this.$service = service;
  }

  get route() { return this.#route; }

  create = async (
    req: RequestWithBody<Car>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const { body } = req;

      const result = await this.$service.create(body);
      if (!result) {
        return res.status(400).json({ error: this.errors.badRequest });
      }

      if ('error' in result) return res.status(400).json(result);

      return res.status(201).json(result);
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  read = async (
    _req: Request,
    res: Response<Car[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const result = await this.$service.read();
      if (!result) {
        return res.status(400).json({ error: this.errors.badRequest });
      }
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  readOne = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const { id } = req.params;

      const result = await this.$service.readOne(id);
      if (!result) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (req: RequestWithBody<Car & { _id: string }>, res: Response):
  Promise<typeof res> => {
    const { id } = req.params;
    const carToBeUpdated = req.body;
    try {
      const result = await this.$service.update(id, carToBeUpdated);
      if (!result) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      return res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<Car | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const { id } = req.params;

      const result = await this.$service.delete(id);
      if (!result) {
        return res.status(404).json({ error: this.errors.notFound });
      }
      return res.status(204).json();
    } catch (e) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}
