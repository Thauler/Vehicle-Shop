import Routers from './routes/Router';
import App from './app';

import CarController from './controllers/CarController';

import { Car } from './interfaces/CarInterface';

const server = new App();

const carController = new CarController();

const carRouter = new Routers<Car>();

carRouter.addRoute(carController);

server.addRouter(carRouter.router);

export default server;
