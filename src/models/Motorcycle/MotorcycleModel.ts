import { Model as IModelMongoose } from 'mongoose';
import { MotorcycleDocument } from '../../interfaces/MotorcycleInterface';
import GenericModel from '../MongoModel';

export default class MotorcycleModel extends GenericModel<MotorcycleDocument> {
  constructor(modelMongoose: IModelMongoose<MotorcycleDocument>) {
    super(modelMongoose);
    this.$modelMongoose = modelMongoose;
  }
  
  create = async (object: MotorcycleDocument): Promise<MotorcycleDocument> =>
    this.$modelMongoose.create({ ...object });
  
  read = async (): Promise<MotorcycleDocument[]> =>
    this.$modelMongoose.find();
  
  readOne = async (id: string): Promise<MotorcycleDocument | null> =>
    this.$modelMongoose.findById({ _id: id });
  
  update = async (id: string, object: MotorcycleDocument):
  Promise<MotorcycleDocument | null> =>
    this.$modelMongoose.findByIdAndUpdate({ _id: id }, { ...object });

  delete = async (id: string): Promise<MotorcycleDocument | null> =>
    this.$modelMongoose.findByIdAndDelete({ _id: id });
}