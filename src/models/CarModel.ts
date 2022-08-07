import { Model as IModelMongoose } from 'mongoose';
import { CarDocument } from '../interfaces/CarInterface';
import GenericModel from './MongoModel';

export default class CarModel extends GenericModel<CarDocument> {
  constructor(modelMongoose: IModelMongoose<CarDocument>) {
    super(modelMongoose);
    this.$modelMongoose = modelMongoose;
  }
  
  create = async (object: CarDocument): Promise<CarDocument> =>
    this.$modelMongoose.create({ ...object });
  
  read = async (): Promise<CarDocument[]> =>
    this.$modelMongoose.find();
  
  readOne = async (id: string): Promise<CarDocument | null> =>
    this.$modelMongoose.findById({ _id: id });
  
  update = async (id: string, object: CarDocument):
  Promise<CarDocument | null> =>
    this.$modelMongoose.findByIdAndUpdate({ _id: id }, { ...object });

  delete = async (id: string): Promise<CarDocument | null> =>
    this.$modelMongoose.findByIdAndDelete({ _id: id });
}