import { CarDocument, CarSchema } from '../interfaces/CarInterface';
import Service, { ServiceError } from '.';
import GenericModel from '../models/MongoModel';

export default class CarService extends Service<CarDocument> {
  constructor($model: GenericModel<CarDocument>) {
    super($model);
    this.$model = $model;
  }
  
  create = async (object: CarDocument):
  Promise<CarDocument | ServiceError | null> => {
    const parsed = CarSchema.safeParse(object);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.$model.create(object);
  };
  
  read = async (): Promise<CarDocument[]> => this.$model.read();
  
  readOne = async (id: string): Promise<CarDocument | null> =>
    this.$model.readOne(id);
  
  update = async (id: string, object: CarDocument):
  Promise<ServiceError | CarDocument | null> =>
    this.$model.update(id, object);

  delete = async (id: string): Promise<CarDocument | null> =>
    this.$model.delete(id);
}
