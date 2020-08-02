import { Update, Message, MessageRequest } from '../entities/telegram';
import * as telegramService from '../services/telegram';

export abstract class BotCommand<T>{
    abstract execute():T;
}

export class HelloCommand extends BotCommand<Promise<Message>>{

    private mRequest:MessageRequest;

    constructor(update: Update){
        super();
        const chatId = update.message.chat.id;
        const username = update.message.from.first_name;
        this.mRequest = {chat_id: chatId, text: `Hello ${username}`};
    }

    setParseMode(format:string){
        this.mRequest.parse_mode = format;
    }

    setDisableWebPreview(value:boolean){
        this.mRequest.disable_web_page_preview = value;
    }

    setDisableNotification(value:boolean){
        this.mRequest.disable_notification = value;
    }

    setReplyToMessageId(message_id:number){
        this.mRequest.reply_to_message_id = message_id;
    }

    execute(){
        return telegramService.sendMessage(this.mRequest);
    }

}
