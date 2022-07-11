import sinon, { SinonStub } from 'sinon';
import chai from 'chai';
const { expect } = chai;
import chaiHttp = require('chai-http');
import { Request, Response } from 'express';

import CarController from '../../../controllers/CarController';
import { allCarMockResponse } from '../../mocks/CarMock';
import { CarModelMock, CarServiceMock } from '../../mocks/CarClassMocks';
import carMongooseModel from '../../../models/Schemas/CarSchema';


chai.use(chaiHttp);

const carModelMock = new CarModelMock(carMongooseModel);
const carService = new CarServiceMock(carModelMock);
const carController = new CarController(carService);

describe('Controller: Testing method read', () => {

  const response = {} as Response;
  const request = {} as Request;

  describe('A) - In case of success', () => { 

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(response);
      sinon.stub(carService, 'read').resolves(allCarMockResponse);
    });

    after(() => (carService.read as SinonStub).restore());

    it('- Controller method read return status 200 and all the cars', async () => {
      await carController.read(request, response);
      
      expect((response.status as SinonStub).calledWith(200));
      expect((response.json as SinonStub).calledWith(allCarMockResponse));
    });
  });

  describe('B) - In case of failure', () => {

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns({ error: 'error' } as any);
      sinon.stub(carService, 'read').resolves(undefined);
    });

    after(() => (carService.read as SinonStub).restore());

      it('- Controller method read return status 400 and an error message when is no data', async() => {
        await carController.read(request, response);

      expect((response.status as SinonStub).calledWith(400)).to.be.true;
      });
  });

  describe('C) - Internal server Error', () => {

          before(async () => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns(response);
            sinon.stub(carService, 'read').throws();
          });

          after(() => (carService.read as SinonStub).restore());

      it('- Controller method read return status 500', async() => {
        await carController.read(request, response);
        
        expect((response.status as SinonStub).calledWith(500));
      })
  });
});