import fetch from 'node-fetch';


const TELEGRAM_URL = 'https://api.telegram.org/bot'
const TELEGRAM_BOT_TOKEN = '1246454030:AAGsaOXip4Q83wZKj8KXbiQLKVgNj6jNfW4'
const TELEGRAM_API_REQUEST = `${TELEGRAM_URL}${TELEGRAM_BOT_TOKEN}`

export const getMe = async () => {
    const response = await fetch(`${TELEGRAM_API_REQUEST}/getMe`);
    const json = await response.json();
    return json;
};
