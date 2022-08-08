import { Router } from 'express';
import Controller from '../controllers';
import Middleware from '../middlewares/Middleware';

export default class Routers<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(controller: Controller<T>, route: string = controller.route) {
    this.router.post(route, Middleware.authObject, controller.create);
    this.router.get(route, controller.read);
    this.router.get(
      `${route}/:id`,
      Middleware.authId,
      controller.readOne,
    );
    this.router.put(
      `${route}/:id`,
      Middleware.authId,
      Middleware.authObject,
      controller.update,
    );
    this.router.delete(
      `${route}/:id`,
      Middleware.authId,
      controller.delete,
    );
  }
}