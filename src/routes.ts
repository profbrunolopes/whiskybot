import {Router} from 'express';
import * as helloService from './services/hello';
import * as telegramService from './services/telegram';
import { BotFacade } from './services/facade';
import { Update } from './entities/telegram';

const routes = Router();
const facade = new BotFacade();

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

routes.post('/update', async (req, res) => {
    const update: Update = req.body;
    facade.process(update);
    res.send('Ok');
});

export default routes;
