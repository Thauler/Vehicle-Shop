import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import * as carSchema from '../../../models/Schemas/Car/CarSchema';
import CarModel from '../../../models/Car/CarModel';
import { allCarMockResponse, carMockRequest, carMockResponse } from '../../mocks/CarMock';

const carModel = new CarModel(carSchema.carMongooseModel);

describe('Model: - Testing car model', () => {

  describe('A) - Testing method creates', () => {

    before(async () => {
      sinon.stub(carSchema.carMongooseModel, 'create').resolves(carMockResponse);
    });

    after(() => (carSchema.carMongooseModel.create as SinonStub).restore());

    it('In case of success', async () => {
      const createdCar = await carModel.create(carMockRequest);

      expect(createdCar).to.be.an('object');
      expect(createdCar).deep.equal(carMockResponse);
    });
  });

  describe('B) - Testing method read', () => {

    before(async () => {
      sinon.stub(carSchema.carMongooseModel, 'find').resolves(allCarMockResponse);
    });

    after(() => (carSchema.carMongooseModel.find as SinonStub).restore());

    it('In case of success', async () => {
      const allCars = await carModel.read();

      expect(allCars).to.be.an('array');
      expect(allCars).deep.equal(allCarMockResponse);
    });
  });

  describe('C) - Testing method readOne', () => {

    before(async () => {
      sinon.stub(carSchema.carMongooseModel, 'findById').resolves(carMockResponse);
    });

    after(() => (carSchema.carMongooseModel.findById as SinonStub).restore());

    it('In case of success', async () => {
      const carById = await carModel.readOne(carMockRequest.id);

      expect(carById).deep.equal(carMockResponse);
    });
  });

  describe('D) - Testing method update', () => {

    before(async () => {
      sinon.stub(carSchema.carMongooseModel, 'findByIdAndUpdate').resolves(carMockResponse);
    });

    after(() => (carSchema.carMongooseModel.findByIdAndUpdate as SinonStub).restore());

    it('In case of success', async () => {
      const updateCar = await carModel.update(carMockRequest.id, carMockRequest);

      expect(updateCar).deep.equal(carMockResponse);
    });
  });

  describe('E) - Testing method delete', () => {

    before(async () => {
      sinon.stub(carSchema.carMongooseModel, 'findByIdAndDelete').resolves(null);
    });

    after(() => (carSchema.carMongooseModel.findByIdAndDelete as SinonStub).restore());

    it('In case of success', async () => {
      const deletedCar = await carModel.delete(carMockRequest.id);

      expect(deletedCar).deep.equal(null);
    });
  });
})