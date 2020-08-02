export interface User {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    can_join_groups: boolean;
    can_read_all_group_messages: boolean;
    supports_inline_queries: boolean;
}

export interface WebhookInfo {
    url: string;
    has_custom_certificate: boolean;
    pending_update_count: boolean;
    last_error_date: number;
    last_error_message: string;
    max_connections: number;
    allowed_updates: string[];
}

export interface Update {
    update_id: number;
    message: Message;
    edited_message: Message;
    channel_post: Message;
    edited_channel_post: Message;
}

export interface Message{
    message_id: number;
    from: User;
    date: number;
    chat: Chat;
    text: string;
}

export interface Chat {
    id: number;
    type: string;
    title: string;
    username: string;
    first_name: string;
    last_name: string;
    description: string;
    invite_link: string;
    slow_mode_delay: number;
    sticker_set_name: string;
    can_set_sticker_set: boolean;
}

export interface MessageRequest{
    chat_id: number;
    text: string;
    parse_mode?: string;
    disable_web_page_preview?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
}

export interface PhotoRequest{
    chat_id: number;
    photo: string;
    caption?: string;
}
