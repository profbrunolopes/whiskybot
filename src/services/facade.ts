import { Update } from '../entities/telegram';
import * as botCommand from '../commands/bot_commands';

export class BotFacade{

    async process(update:Update){
        let cmd = update.message.text;

        if(cmd.startsWith('/')){
            cmd = cmd.substr(1);
            if('hello' == cmd){
                const chatId = update.message.chat.id;
                const user_name = update.message.from.first_name;
                let helloCommand = new botCommand.HelloCommand(chatId, user_name);
                console.log(await helloCommand.execute());
            }
        }
    }
}
