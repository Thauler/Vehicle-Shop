import { model as createModel, Schema } from 'mongoose';
import { CarDocument } from '../../../interfaces/CarInterface';

const carSchema = new Schema<CarDocument>(
  {
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
    doorsQty: Number,
    seatsQty: Number,
  },
  { versionKey: false },
);

export const carMongooseModel = createModel<CarDocument>('Car', carSchema);

export default carMongooseModel;