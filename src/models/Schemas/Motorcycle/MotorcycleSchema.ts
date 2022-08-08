import { model as createModel, Schema } from 'mongoose';

import { MotorcycleDocument } from '../../../interfaces/MotorcycleInterface';

const motorcycleSchema = new Schema<MotorcycleDocument>(
  {
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
    category: String,
    engineCapacity: Number,
  },
  { versionKey: false },
);

export const 
  motorcycleMongooseModel = createModel<MotorcycleDocument>(
    'Motorcycle',
    motorcycleSchema,
  );

export default motorcycleMongooseModel;