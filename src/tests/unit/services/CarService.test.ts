import { expect } from 'chai';
import { SinonStub } from 'sinon';
import sinon from 'sinon';
import { carMongooseModel } from '../../../models/Schemas/Car/CarSchema';
import CarService from '../../../services/Car/CarService';
import { CarModelMock, CarServiceMock } from '../../mocks/CarClassMocks';
import { allCarMockResponse, carMockRequest, carMockRequestError, carMockResponse } from '../../mocks/CarMock';
import { ServiceError } from '../../../services';

  const carModelMock = new CarModelMock(carMongooseModel);
  const carService = new CarService(carModelMock);

describe('Service: - Testing car service', () => {

  describe('A) - Testing method creates', () => {
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

  describe('B) - Testing method read', () => {
    
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

  describe('C) - Testing method readOne', () => {
    
    before(async () => {
      sinon.stub(carModelMock, 'readOne').resolves(carMockResponse);
    });
    
    after(() => (carModelMock.readOne as SinonStub).restore());
    
    it('In case of success', async () => {
      const carById = await carService.readOne(carMockRequest.id);

      expect(carById).deep.equal(carMockResponse);
    });
  });

  describe('D) - Testing method update', () => {
    
    before(async () => {
      sinon.stub(carModelMock, 'update').resolves(carMockResponse);
    });
    
    after(() => (carModelMock.update as SinonStub).restore());
    
    it('In case of success', async () => {
      const updateCar = await carService.update(carMockRequest.id, carMockRequest);

      expect(updateCar).deep.equal(carMockResponse);
    });
  });

  describe('E) - Testing method delete', () => {
    
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