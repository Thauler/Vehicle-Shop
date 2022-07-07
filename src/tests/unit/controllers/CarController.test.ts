import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');
import CarController from '../../../controllers/CarController';
import { Car } from '../../../interfaces/CarInterface';
import { carMockRequest, carMockResponse } from '../mocks/CarMock';
import { Request, Response } from 'express';


chai.use(chaiHttp);

const { expect } = chai;

describe('1 - Testing car controller', () => {
  const carController = new CarController();
  const request = {} as Request<Car>;
  const response = {} as Response;
  describe('A - Testing method create', () => {
   before(async() => {
      request.body = carMockRequest;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(carController.service, 'create').resolves(carMockResponse);
    });
    after(() => sinon.restore());
    it('In case of success', async () => {
      const createdCar = await carController.service.create(carMockRequest);

      expect(createdCar).deep.equal(carMockResponse);
    });
    })
  })
