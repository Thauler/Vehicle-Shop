import { Router } from 'express';
import Controller from '../controllers';
import CarMiddleware from '../middlewares/CarMiddleware';

export default class Routers<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(controller: Controller<T>, route: string = controller.route) {
    this.router.post(route, CarMiddleware.authObject, controller.create);
    this.router.get(route, controller.read);
    this.router.get(
      `${route}/:id`,
      CarMiddleware.authId,
      controller.readOne,
    );
    this.router.put(
      `${route}/:id`,
      CarMiddleware.authId,
      CarMiddleware.authObject,
      controller.update,
    );
    this.router.delete(
      `${route}/:id`,
      CarMiddleware.authId,
      controller.delete,
    );
  }
}