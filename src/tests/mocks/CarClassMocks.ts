import { CarDocument } from "../../interfaces/CarInterface";
import GenericModel from "../../models/MongoModel";
import Service from "../../services";
import { allCarMockRequest, carMockRequest, carMockResponse } from "./CarMock";


export class CarModelMock extends GenericModel<CarDocument> {

  create = async (_object: CarDocument): Promise<CarDocument> => carMockRequest;

  read = async (): Promise<CarDocument[]> => allCarMockRequest;

  readOne = async (_id: string): Promise<CarDocument | null> => carMockResponse;

  delete = async (_id: string): Promise<CarDocument | null> => carMockRequest.id;
}

export class CarServiceMock extends Service<CarDocument> {

  create = async (_object: CarDocument): Promise<CarDocument> => carMockRequest;

  read = async (): Promise<CarDocument[]> => allCarMockRequest;

  readOne = async (_id: string): Promise<CarDocument | null> => carMockResponse;

  delete = async (_id: string): Promise<CarDocument | null> => carMockRequest.id;
}