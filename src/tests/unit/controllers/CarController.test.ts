import sinon, { SinonStub } from 'sinon';
import chai from 'chai';
const { expect } = chai;
import chaiHttp = require('chai-http');
import { Response } from 'express';

import CarController from '../../../controllers/CarController';
import { Car } from '../../../interfaces/CarInterface';
import { carMockRequest, carMockResponse } from '../../mocks/CarMock';
import { CarModelMock, CarServiceMock } from '../../mocks/CarClassMocks';
import carMongooseModel from '../../../models/Schemas/CarSchema';
import { RequestWithBody } from '../../../controllers';

chai.use(chaiHttp);

const carModelMock = new CarModelMock(carMongooseModel);
const carService = new CarServiceMock(carModelMock);
const carController = new CarController(carService);

describe('1 - Testing car controller', () => {
  
  describe('A - Testing method create', () => {

    const requestWithBody = {} as RequestWithBody<Car>;
    const response = {} as Response;

    describe('Testing /cars route', () => {

      it('- Route /cars', async () => {
        expect(carController.route).to.be.equals('/cars');
      });
    });

    describe('A.1 - In case of success', () => { 

      before(async () => {
        requestWithBody.body = carMockRequest;
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns(response);
        sinon.stub(carService, 'create').resolves(carMockRequest);
      });

      after(() => (carService.create as SinonStub).restore());

      it('- Controller method create return status 201 and the Car object', async () => {
        await carController.create(requestWithBody, response);
        
        expect((response.status as SinonStub).calledWith(201));
        expect((response.json as SinonStub).calledWith(carMockResponse));
      });
    });

    describe('A.2 - In case of failure', () => {

      before(async () => {

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns({ error: 'error' } as any);
        sinon.stub(carService, 'create').resolves(undefined);
      });

      after(() => (carService.create as SinonStub).restore());

        it('- Controller method create return status 400 and an error message when is requested without a body', async() => {
          await carController.create(requestWithBody, response);

        expect((response.status as SinonStub).calledWith(400)).to.be.true;
        });
      })

          describe('A.2 - In case of failure', () => {

      before(async () => {

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns({ error: 'error' } as any);
        sinon.stub(carService, 'create').resolves({ error: 'error' } as any);
      });

      after(() => (carService.create as SinonStub).restore());

        it('- Controller method create return status 400 and an error message when is requested without a body', async() => {
          await carController.create(requestWithBody, response);

        expect((response.status as SinonStub).calledWith(400)).to.be.true;
        });
      })

      describe('Internal server Error', () => {

            before(async () => {
              response.status = sinon.stub().returns(response);
              response.json = sinon.stub().returns(response);
              sinon.stub(carService, 'create').throws();
            });

            after(() => (carService.create as SinonStub).restore());

        it('- Controller method create return status 500', async() => {
          await carController.create(requestWithBody, response);
          
          expect((response.status as SinonStub).calledWith(500));
        })
      })
    })
  })
