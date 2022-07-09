import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import * as carSchema from '../../../models/Schemas/CarSchema';
import CarModel from '../../../models/CarModel';
import { carMockRequest, carMockResponse } from '../../mocks/CarMock';

const carModel = new CarModel(carSchema.carMongooseModel);

describe('1 - Testing car model', () => {

  describe('A - Testing mehtod creates', () => {

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
})