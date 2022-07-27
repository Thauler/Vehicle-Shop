import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import * as carSchema from '../../../models/Schemas/CarSchema';
import CarModel from '../../../models/CarModel';
import { allCarMockResponse, carMockRequest, carMockResponse } from '../../mocks/CarMock';

const carModel = new CarModel(carSchema.carMongooseModel);

describe('Model: - Testing car model', () => {

  describe('A) - Testing mehtod creates', () => {

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

  describe('B) - Testing mehtod read', () => {

    before(async () => {
      sinon.stub(carSchema.carMongooseModel, 'find').resolves(allCarMockResponse);
    });

    after(() => (carSchema.carMongooseModel.find as SinonStub).restore());

    it('In case of success', async () => {
      const createdCar = await carModel.read();

      expect(createdCar).to.be.an('array');
      expect(createdCar).deep.equal(allCarMockResponse);
    });
  });

  describe('C) - Testing mehtod delete', () => {

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