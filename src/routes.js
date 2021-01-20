import { Router } from 'express';
//import userController from './app/controllers/userController';
//import userController from './app/controllers/userController';
import logMid from './app/middlewares/logRequests';
import marvelController from './app/service/marvelController';

const routes = new Router();

routes.use(logMid);

routes.get('/', (req, res) => {
    res.send('Rota principal');
});

//routes.get('/personagens', marvelController.index);
//routes.get('/personagens', userController.show);

export default routes;