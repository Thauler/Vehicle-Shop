import Routers from './routes/Router';
import App from './app';

import { Car } from './interfaces/CarInterface';
import carFactoryController from './factories/Car/CarFactory';
import motorcycleController from './factories/Motorcycle/MotorcycleFactory';
import { Motorcycle } from './interfaces/MotorcycleInterface';

const server = new App();

const carRouter = new Routers<Car>();
const motorcycleRouter = new Routers<Motorcycle>();

carRouter.addRoute(carFactoryController);
motorcycleRouter.addRoute(motorcycleController);

server.addRouter(carRouter.router);
server.addRouter(motorcycleRouter.router);

export default server;
