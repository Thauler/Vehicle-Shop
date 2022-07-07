import { model as createModel } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import MongoModel from './MongoModel';
import carSchema from './Schemas/CarSchema';

export default class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Car', carSchema)) {
    super(model);
  }
}
