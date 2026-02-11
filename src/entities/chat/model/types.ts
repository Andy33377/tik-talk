export interface ChatPreview {
  id: string;
  title: string;
  avatarUrl: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
}

export type MessageAuthor = "me" | "other" | "system";

export interface Message {
  id: string;
  author: MessageAuthor;
  text: string;
  time?: string;
}

export interface ChatThread {
  id: string;
  title: string;
  avatarUrl: string;
  messages: Message[];
}
