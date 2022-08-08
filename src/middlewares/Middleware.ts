import { NextFunction, Request, Response } from 'express';

enum MiddleWareErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
  incorrectId = 'Id must have 24 hexadecimal characters',
}

export default class Middlewares {
  static authId = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (id.length !== 24) {
      return res.status(400)
        .json({ error: MiddleWareErrors.incorrectId });
    }

    next();
  };

  static authObject = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const object = req.body;

    if (!object || Object.entries(object).length === 0) {
      return res.status(400).json({ error: MiddleWareErrors.badRequest });
    }
    next();
  };
}