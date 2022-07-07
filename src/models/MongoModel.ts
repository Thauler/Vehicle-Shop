import { Model, Document, isValidObjectId } from 'mongoose';
import { Model as IModel } from '../interfaces/ModelInterface';

export default abstract class MongoModel<T> implements IModel<T> {
  constructor(protected model: Model<T & Document>) { }

  create = async (object: T): Promise<T> => this.model.create({ ...object });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> => {
    if (!isValidObjectId(id)) return null;
    return this.model.findById(id);
  };

  update = async (id: string, object: T): Promise<T | null> => {
    if (!isValidObjectId(id)) return null;
    return this.model.findByIdAndUpdate({ _id: id, ...object });
  };

  delete = async (id: string): Promise<T | null> => {
    if (!isValidObjectId(id)) return null;
    return this.model.findByIdAndDelete(id);
  };
}