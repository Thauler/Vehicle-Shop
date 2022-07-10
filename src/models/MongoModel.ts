import { Document, Model as IModelMongoose } from 'mongoose';
import { Model as IModelGeneric } from '../interfaces/ModelInterface';

export default abstract class GenericModel<T> implements IModelGeneric<T> {
  constructor(protected $modelMongoose: IModelMongoose<T & Document>) { }

  abstract create(object: T): Promise<T>;

  abstract read(): Promise<T[]>;

  // readOne = async (id: string): Promise<T | null> => {
  //   if (!isValidObjectId(id)) return null;
  //   return this.$modelMongoose.findById(id);
  // };

  // update = async (id: string, object: T): Promise<T | null> => {
  //   if (!isValidObjectId(id)) return null;
  //   return this.$modelMongoose.findByIdAndUpdate({ _id: id, ...object });
  // };

  // delete = async (id: string): Promise<T | null> => {
  //   if (!isValidObjectId(id)) return null;
  //   return this.$modelMongoose.findByIdAndDelete(id);
  // };
}
