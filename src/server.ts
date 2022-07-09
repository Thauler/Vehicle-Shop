import Routers from './routes/Router';
import App from './app';

import { Car } from './interfaces/CarInterface';
import carFactoryController from './factories/CarFactory';

const server = new App();

const carRouter = new Routers<Car>();

carRouter.addRoute(carFactoryController);

server.addRouter(carRouter.router);

export default server;
