import { Document, Model as IModelMongoose } from 'mongoose';
import { Model as IModelGeneric } from '../interfaces/ModelInterface';

export default abstract class GenericModel<T> implements IModelGeneric<T> {
  constructor(protected $modelMongoose: IModelMongoose<T & Document>) { }

  abstract create(object: T): Promise<T>;

  abstract read(): Promise<T[]>;

  abstract readOne(id: string): Promise<T | null>;

  abstract update(id: string, object: T): Promise<T | null>;

  abstract delete(id: string): Promise<T | null>;
}
