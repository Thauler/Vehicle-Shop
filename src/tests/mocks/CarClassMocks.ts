import { CarDocument } from "../../interfaces/CarInterface";
import GenericModel from "../../models/MongoModel";
import Service from "../../services";
import { allCarMockRequest, carMockRequest } from "./CarMock";


export class CarModelMock extends GenericModel<CarDocument> {
  read = async (): Promise<CarDocument[]> => allCarMockRequest;

  create = async (_object: CarDocument): Promise<CarDocument> => carMockRequest;
}

export class CarServiceMock extends Service<CarDocument> {
  read = async (): Promise<CarDocument[]> => allCarMockRequest;

  create = async (_object: CarDocument): Promise<CarDocument> => {
    return carMockRequest;
  }
}