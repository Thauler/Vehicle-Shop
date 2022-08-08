import CarController from '../../controllers/Car/CarController';
import CarModel from '../../models/Car/CarModel';
import { carMongooseModel } from '../../models/Schemas/Car/CarSchema';
import CarService from '../../services/Car/CarService';

//  Car Factory
const carModel = new CarModel(carMongooseModel);
const carService = new CarService(carModel);
const carController = new CarController(carService);

export = carController;