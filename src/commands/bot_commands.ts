import { Message, MessageRequest } from '../entities/telegram';
import * as telegramService from '../services/telegram';

abstract class BotCommand<T>{
    abstract execute():T;
}

export class HelloCommand extends BotCommand<Promise<Message>>{

    private mRequest:MessageRequest;

    constructor(chat_id:number, user:string){
        super();
        this.mRequest = {chat_id: chat_id, text: `Hello ${user}`};
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
