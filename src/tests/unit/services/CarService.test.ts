import { expect } from 'chai';
import { SinonStub } from 'sinon';
import sinon from 'sinon';
import { carMongooseModel } from '../../../models/Schemas/CarSchema';
import CarService from '../../../services/CarService';
import { CarModelMock } from '../../mocks/CarClassMocks';
import { carMockRequest, carMockRequestError, carMockResponse } from '../../mocks/CarMock';
import { ServiceError } from '../../../services';

  const carModelMock = new CarModelMock(carMongooseModel);
  const carService = new CarService(carModelMock);

describe('1 - Testing car service', () => {
  
  describe('A - Testing mehtod creates', () => {
    
    before(async () => {
      sinon.stub(carModelMock, 'create').resolves(carMockResponse);
    });
    
    after(() => (carModelMock.create as SinonStub).restore());
    
    it('In case of success', async () => {
      const createdCar = await carService.create(carMockRequest);
      
      expect(createdCar).to.be.an('object');
      expect(createdCar).deep.equal(carMockResponse);
    });
  });
  describe('In case of error', () => {
  
    it('Return Error Zod create' , async () => {
      const createdCar = await carService.create(carMockRequestError) as ServiceError;
      expect(createdCar.error.isEmpty).to.be.false;
    });
  });
})