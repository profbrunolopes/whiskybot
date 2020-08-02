import { Update } from '../entities/telegram';
import * as botCommand from '../commands/bot_commands';

export class BotFacade{

    async process(update: Update){

        let cmd = update.message.text;

        switch(cmd){

            case '/hello':
                let helloCommand = new botCommand.HelloCommand(update);
                console.log(await helloCommand.execute());
                break;

            case '/best':
                let bestCommand = new botCommand.BestWhisky(update);
                console.log(await bestCommand.execute());
                break;

            default:
                if(cmd.startsWith('/')){
                    console.log('Comando não encontrado');
                }

        }

    }
}
