import sinon, { SinonStub } from 'sinon';
import chai from 'chai';
const { expect } = chai;
import chaiHttp = require('chai-http');
import { Request, Response } from 'express';

import CarController from '../../../controllers/CarController';
import { carMockResponse } from '../../mocks/CarMock';
import { CarModelMock, CarServiceMock } from '../../mocks/CarClassMocks';
import carMongooseModel from '../../../models/Schemas/CarSchema';

chai.use(chaiHttp);

const id = "62c7392922b7499c89e6832c"
const incorrectId = "62c7392922b74c"


const carModelMock = new CarModelMock(carMongooseModel);
const carService = new CarServiceMock(carModelMock);
const carController = new CarController(carService);

describe('Controller: - Testing method update', () => {

  const request = {} as Request;
  const response = {} as Response;

  describe('A) - In case of success', () => { 
    
    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(null);
      sinon.stub(carService, 'update').resolves(carMockResponse);
    });
    
    after(() => (carService.update as SinonStub).restore());
    
    it('- Controller method update return status 200 and the empty JSON', async () => {
      request.params = { id }
      await carController.update(request, response);
      
      expect((response.status as SinonStub).calledWith(204));
      expect((response.json as SinonStub).calledWith(carMockResponse));
    });
  });

  describe('B) - In case of an error with undefined request ID', () => {

    before(async () => {      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns({ error: 'error' } as any);
      sinon.stub(carService, 'update').resolves(undefined);
    });

    after(() => (carService.update as SinonStub).restore());

      it('- Controller method update return status 404 and an error message when is requested without an ID', async() => {
      request.params = { id }

        await carController.update(request, response);

      expect((response.status as SinonStub).calledWith(404));
      });
  });


  describe('C) - In case of an error with an ID length different of 24 characters', () => {

    before(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(null);
      sinon.stub(carService, 'update').resolves({ error: 'error' } as any);
    });

    after(() => (carService.update as SinonStub).restore());

      it('- Controller method update return status 400 and an error message when is requested without an ID length different of 24 characters', async() => {
      request.params = { id: incorrectId }

        await carController.update(request, response);

      expect((response.status as SinonStub).calledWith(400));
      });
  });

  describe('D) - Internal server Error', () => {

          before(async () => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns(null);
            sinon.stub(carService, 'update').throws();
          });

          after(() => (carService.update as SinonStub).restore());

      it('- Controller method update return status 500', async() => {
        request.params = { id }
        await carController.update(request, response);
        
        expect((response.status as SinonStub).calledWith(500));
      })
  });
});
