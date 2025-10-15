import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api', router);

    router.get('/opportunities', indexController.getOpportunities);
    router.get('/user/:id', indexController.getUserData);
    router.post('/recommendation', indexController.sendRecommendation);
    // Add more routes as needed
}