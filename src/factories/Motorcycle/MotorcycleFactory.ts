import MotorcycleModel from '../../models/Motorcycle/MotorcycleModel';
import MotorcycleService from '../../services/Motorcycle/MotorcycleService';
import MotorcycleController
  from '../../controllers/Motorcycle/MotorcycleController';
import { 
  motorcycleMongooseModel,
} from '../../models/Schemas/Motorcycle/MotorcycleSchema';

//  Motorcycle Factory
const motorcycleModel = new MotorcycleModel(motorcycleMongooseModel);
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

export = motorcycleController;