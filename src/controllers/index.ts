import { Request, Response } from 'express';
import Services from '../services';

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
  incorrectId = 'Id must have 24 hexadecimal characters',
}

export default abstract class Controller<T> {
  abstract route: string;

  protected errors = ControllerErrors;

  protected $service: Services<T>;
  
  constructor(service: Services<T>) {
    this.$service = service;
  }

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  abstract read(
    _req: Request,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res>;

  abstract readOne(
    req: Request<{ id: string }>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  // abstract update(
  //   req: RequestWithBody<T>,
  //   res: Response<T | ResponseError>,
  // ): Promise<typeof res>;

  abstract delete(
    req: Request<{ id: string }>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;
}