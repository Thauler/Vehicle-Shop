import chai from 'chai';
const { expect } = chai;

import CarController from '../../../controllers/CarController';
import { CarModelMock, CarServiceMock } from '../../mocks/CarClassMocks';
import carMongooseModel from '../../../models/Schemas/CarSchema';


const carModelMock = new CarModelMock(carMongooseModel);
const carService = new CarServiceMock(carModelMock);
const carController = new CarController(carService);

describe('Routes: Testing car routes', () => {
  describe('A) - Testing /cars route', () => {
  
      it('- Route /cars', async () => {
        expect(carController.route).to.be.equals('/cars');
      });
    });

})