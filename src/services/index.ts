import { ZodError } from 'zod';

import { Model } from '../interfaces/ModelInterface';

export interface ServiceError {
  error: ZodError;
}

export default abstract class Service<T> {
  protected $model: Model<T>;

  constructor(model: Model<T>) {
    this.$model = model;
  }

  abstract create(object: T): Promise<T | null | ServiceError>;

  abstract read(): Promise<T[]>;

  // abstract readOne(id: string): Promise<T | null>;

  // abstract update(id: string, object: T): Promise<T | null | ServiceError>;

  // abstract delete(id: string): Promise<T | null>;
}