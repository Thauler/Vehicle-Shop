import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import { carMongooseModel } from '../models/Schemas/CarSchema';
import CarService from '../services/CarService';

//  Car Factory
const carModel = new CarModel(carMongooseModel);
const carService = new CarService(carModel);
const carController = new CarController(carService);

export = carController;