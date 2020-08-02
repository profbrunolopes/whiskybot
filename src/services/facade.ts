import { Update } from '../entities/telegram';
import * as botCommand from '../commands/bot_commands';

export class BotFacade{

    async process(update: Update){
        let cmd = update.message.text;

        if(cmd.startsWith('/')){
            cmd = cmd.substr(1);
            if('hello' == cmd){
                let helloCommand = new botCommand.HelloCommand(update);
                console.log(await helloCommand.execute());
            }
        }
    }
}
