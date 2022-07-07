import { Car, CarSchema } from '../interfaces/CarInterface';
import Service, { ServiceError } from '.';
import CarModel from '../models/CarModel';

export default class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (object: Car): Promise<Car | ServiceError | null> => {
    const parsed = CarSchema.safeParse(object);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(object);
  };
}