import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { User, WebhookInfo, Message, MessageRequest, PhotoRequest } from '../entities/telegram';

dotenv.config();

const TELEGRAM_URL = 'https://api.telegram.org/bot'
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAN_BOT_TOKEN
const TELEGRAM_API_REQUEST = `${TELEGRAM_URL}${TELEGRAM_BOT_TOKEN}`

export const getMe = async () => {
    const response = await fetch(`${TELEGRAM_API_REQUEST}/getMe`);
    const json = await response.json();
    const user:User = json.result;
    return user;
};

export const setWebhook = async () =>{
    const body = {url: 'https://b9ac782cfd3e.ngrok.io/update'};
    const response = await fetch(`${TELEGRAM_API_REQUEST}/setWebhook`, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
};

export const deleteWebhook = async () => {
    const response = await fetch(`${TELEGRAM_API_REQUEST}/deleteWebhook`);
    return await response.json();
}

export const getWebhookInfo = async () => {
    const response = await fetch(`${TELEGRAM_API_REQUEST}/getWebhookInfo`);
    const json = await response.json();
    const webhookInfo: WebhookInfo = json;
    return webhookInfo;
}

export const sendMessage = async (mRequest:MessageRequest) => {

    const response = await fetch(`${TELEGRAM_API_REQUEST}/sendMessage`, {
        method: 'post',
        body:    JSON.stringify(mRequest),
        headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();
    const message: Message = json;
    return message;

}

export const sendPhoto = async (mRequest:PhotoRequest) => {

    const response = await fetch(`${TELEGRAM_API_REQUEST}/sendPhoto`, {
        method: 'post',
        body:    JSON.stringify(mRequest),
        headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();
    const message: Message = json;
    return message;
}
