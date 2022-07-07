import { expect } from 'chai';
import sinon from 'sinon';
import CarService from '../../../services/CarService';
import { carMockRequest, carMockResponse } from '../mocks/CarMock';

describe('1 - Testing car service', () => {
  const carService = new CarService();

  describe('A - Testing mehtod creates', () => {
    before(async () => {
      sinon.stub(carService.model, 'create').resolves(carMockResponse);
    });
    after(() => sinon.restore());
    it('In case of success', async () => {
      const createdCar = await carService.create(carMockRequest);

      expect(createdCar).to.be.an('object');
      expect(createdCar).deep.equal(carMockResponse);
    });
    // it('In case of failure', async () => {

    // })
  });
})