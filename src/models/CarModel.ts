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
  
  delete = async (id: string): Promise<CarDocument | null> => 
    this.$modelMongoose.findByIdAndDelete({ _id: id })
  ;
}