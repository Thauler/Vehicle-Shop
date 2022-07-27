import { expect } from 'chai';
import { SinonStub } from 'sinon';
import sinon from 'sinon';
import { carMongooseModel } from '../../../models/Schemas/CarSchema';
import CarService from '../../../services/CarService';
import { CarModelMock } from '../../mocks/CarClassMocks';
import { allCarMockResponse, carMockRequest, carMockRequestError, carMockResponse } from '../../mocks/CarMock';
import { ServiceError } from '../../../services';

  const carModelMock = new CarModelMock(carMongooseModel);
  const carService = new CarService(carModelMock);

describe('Service: - Testing car service', () => {

  describe('A) - Testing mehtod creates', () => {
    describe('- In case of success', () => {

      before(async () => {
        sinon.stub(carModelMock, 'create').resolves(carMockResponse);
      });
      
      after(() => (carModelMock.create as SinonStub).restore());
      
      it('Return the car object', async () => {
        const createdCar = await carService.create(carMockRequest);
        
        expect(createdCar).to.be.an('object');
        expect(createdCar).deep.equal(carMockResponse);
      });
    })
    describe('- In case of error', () => {
      
      it('Return Error Zod create' , async () => {
        const createdCar = await carService.create(carMockRequestError) as ServiceError;
        expect(createdCar.error.isEmpty).to.be.false;
      });
    });
  });

  describe('B) - Testing mehtod read', () => {
    
    before(async () => {
      sinon.stub(carModelMock, 'read').resolves(allCarMockResponse);
    });
    
    after(() => (carModelMock.read as SinonStub).restore());
    
    it('In case of success', async () => {
      const allCars = await carService.read();
      
      expect(allCars).to.be.an('array');
      expect(allCars).deep.equal(allCarMockResponse);
    });
  });

  describe('C) - Testing mehtod delete', () => {
    
    before(async () => {
      sinon.stub(carModelMock, 'delete').resolves(null);
    });
    
    after(() => (carModelMock.delete as SinonStub).restore());
    
    it('In case of success', async () => {
      const deletedCar = await carService.delete(carMockRequest.id);

      expect(deletedCar).deep.equal(null);
    });
  });
})