import { ZodError } from 'zod';
import Model from '../models/MongoModel';

export interface ServiceError {
  error: ZodError;
}

export default class Service<T> {
  constructor(protected model: Model<T>) { }

  create = async (object: T): Promise<T | null | ServiceError> =>
    this.model.create(object);

  read = async (): Promise<T[]> =>
    this.model.read();

  readOne = async (id: string): Promise<T | null> =>
    this.model.readOne(id);

  update = async (id: string, object: T): Promise<T | null | ServiceError> =>
    this.model.update(id, object);

  delete = async (id: string): Promise<T | null> =>
    this.model.delete(id);
}