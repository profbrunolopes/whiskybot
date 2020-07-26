import {Router} from 'express';
import * as helloService from './services/hello';
import * as telegramService from './services/telegram';

const routes = Router();

routes.get('/', (_, res) => {
    res.send(helloService.hello())
});

routes.get('/telegramTest', async (_, res) => {
    res.send(await telegramService.getMe());
});

routes.get('/setWebhook', async (_, res) => {
    res.send(await telegramService.setWebhook());
});

routes.get('/deleteWebhook', async (_, res) => {
    res.send(await telegramService.deleteWebhook());
});

routes.get('/getWebhookInfo', async (_, res) => {
    res.send(await telegramService.getWebhookInfo());
});



export default routes;
