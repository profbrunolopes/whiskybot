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
