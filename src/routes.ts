import {Router} from 'express';
import * as helloService from './services/hello';

const routes = Router();

routes.get('/', (_, res) =>{
    res.send(helloService.hello())
});

export default routes;
