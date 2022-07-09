import { CarDocument } from "../../interfaces/CarInterface";
import GenericModel from "../../models/MongoModel";
import Service from "../../services";
import { carMockRequest } from "./CarMock";


export class CarModelMock extends GenericModel<CarDocument> {
  create = async (_object: CarDocument): Promise<CarDocument> => {
    return carMockRequest;
  }
}

export class CarServiceMock extends Service<CarDocument> {
  create = async (_object: CarDocument): Promise<CarDocument> => {
    return carMockRequest;
  }
}