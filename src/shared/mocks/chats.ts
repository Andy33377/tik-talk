import type { ChatPreview, ChatThread } from "@/entities/chat/model/types";

export const mockChatPreviews: ChatPreview[] = [
  {
    id: "1",
    title: "Сара Коннор",
    avatarUrl: "/images/users/Sarah.png",
    lastMessage:
      "Терминаторы тестируют стенд, Готему нужен герой. За ангуляр только ты шаришь, хелп!",
    lastMessageTime: "04.04.2024",
    unreadCount: 28,
  },
  {
    id: "2",
    title: "Кристанна Локен",
    avatarUrl: "/images/users/Kris.png",
    lastMessage: "Она в архиве",
    lastMessageTime: "8:22",
  },
];

export const mockActiveChat: ChatThread = {
  id: "2",
  title: "Кристанна Локен",
  avatarUrl: "/images/users/Kris.png",
  messages: [
    {
      id: "m1",
      author: "other",
      text: "Она в архиве",
      time: "8:22",
    },
    {
      id: "m2",
      author: "system",
      text: "Сегодня",
    },
    {
      id: "m3",
      author: "me",
      text: "Привет! Куда Катя пропала?",
      time: "8:20 Райан Гослинг",
    },
    {
      id: "m4",
      author: "me",
      text: "Разархивируйте ее пожалуйста. Она мне срочно нужна!",
      time: "8:23 Райан Гослинг",
    },
  ],
};
