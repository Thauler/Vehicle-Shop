import { Model as IModelMongoose } from 'mongoose';
import { CarDocument } from '../interfaces/CarInterface';
import MongoModel from './MongoModel';

export default class CarModel extends MongoModel<CarDocument> {
  constructor(modelMongoose: IModelMongoose<CarDocument>) {
    super(modelMongoose);
    this.$modelMongoose = modelMongoose;
  }

  create = async (object: CarDocument): Promise<CarDocument> =>
    this.$modelMongoose.create({ ...object });
}
