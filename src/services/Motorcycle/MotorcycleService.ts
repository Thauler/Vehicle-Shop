import {
  MotorcycleDocument,
  MotorcycleSchema,
} from '../../interfaces/MotorcycleInterface';
import Service, { ServiceError } from '..';
import GenericModel from '../../models/MongoModel';

export default class MotorcycleService extends Service<MotorcycleDocument> {
  constructor($model: GenericModel<MotorcycleDocument>) {
    super($model);
    this.$model = $model;
  }
  
  create = async (object: MotorcycleDocument):
  Promise<MotorcycleDocument | ServiceError | null> => {
    const parsed = MotorcycleSchema.safeParse(object);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.$model.create(object);
  };
  
  read = async (): Promise<MotorcycleDocument[]> => this.$model.read();
  
  readOne = async (id: string): Promise<MotorcycleDocument | null> =>
    this.$model.readOne(id);
  
  update = async (id: string, object: MotorcycleDocument):
  Promise<ServiceError | MotorcycleDocument | null> =>
    this.$model.update(id, object);

  delete = async (id: string): Promise<MotorcycleDocument | null> =>
    this.$model.delete(id);
}
