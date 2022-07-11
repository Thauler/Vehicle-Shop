import { CarDocument } from "../../interfaces/CarInterface"

export const carMockRequest = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
} as CarDocument;

export const carMockResponse = {
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
  _id: "62c7392922b7499c89e6832c"
} as CarDocument;

export const carMockRequestError = {
  model: '',
  year: 0,
  color: '',
  buyValue: 0,
  seatsQty: 0,
  doorsQty: 0
} as CarDocument;

export const allCarMockRequest = [{
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}] as CarDocument[];

export const allCarMockResponse = [{
  model: 'Ferrari Maranello',
  year: 1963,
  color: 'red',
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2,
  _id: "62c7392922b7499c89e6832c"
}] as (CarDocument & { _id: string })[];