import { Schema } from 'mongoose';
import { CarDocument } from '../../interfaces/CarInterface';

const carSchema = new Schema<CarDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, {
  versionKey: false });

export default carSchema;