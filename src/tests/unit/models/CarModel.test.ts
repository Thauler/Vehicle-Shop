import { expect } from 'chai';
import mongoose from 'mongoose';
import sinon from 'sinon';
import CarModel from '../../../models/CarModel';
import { carMockRequest, carMockResponse } from '../mocks/CarMock';

describe('1 - Testing car model', () => {
  describe('A - Testing mehtod creates', () => {
    before(async () => {
      sinon.stub(mongoose.Model, 'create').resolves(carMockResponse);
    });
    after(() => sinon.restore());
    it('In case of success', async () => {
      const carModel = new CarModel();
      const createdCar = await carModel.create(carMockRequest);

      expect(createdCar).to.be.an('object');
      expect(createdCar).deep.equal(carMockResponse);
    });
  });
})