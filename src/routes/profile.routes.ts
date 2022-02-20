import { Router } from 'express';
import { GetProfileInfoController } from '../useCases/GetProfileInfoController';

const profileRoutes = Router();

const getProfileInfoController = new GetProfileInfoController();

profileRoutes.get('/users/:id', getProfileInfoController.handle);

export { profileRoutes}