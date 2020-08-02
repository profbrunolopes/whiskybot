import { Update, Message, MessageRequest, PhotoRequest } from '../entities/telegram';
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

export class BestWhisky extends BotCommand<Promise<Message>>{

    private mPhotoRequest:PhotoRequest;

    constructor(update: Update){
        super();
        const chatId = update.message.chat.id;
        const username = update.message.from.first_name;
        this.mPhotoRequest = {
            chat_id: chatId,
            photo: 'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1243544630',
            caption: 'O melhor whyisky é o Johnnie Walker Blue Label 200th Anniversary'
        };
    }

    execute(){
        return telegramService.sendPhoto(this.mPhotoRequest);

    }

}
