import type { SearchResult } from "@/entities/search/model/types";

export const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    userId: "1",
    firstName: "Райан",
    lastName: "Гослинг",
    username: "ryan.gosling",
    avatarUrl: "/images/users/Ryan.png",
    description:
      "Список навыков, который мы обсудили выше, — основа резюме, но не единственная его часть. Также можно рассказать о себе в классическом смысле — этот раздел можно добавить в сопроводительное письмо.",
    skills: ["JS", "CSS", "HTML", "Angular", "Frontend"],
    actionType: "write",
    unreadCount: 2,
  },
  {
    id: "2",
    userId: "2",
    firstName: "Райан",
    lastName: "Гослинг",
    username: "ryan.gosling",
    avatarUrl: "/images/users/Ryan.png",
    description:
      "Список навыков, который мы обсудили выше, — основа резюме, но не единственная его часть. Также можно рассказать о себе в классическом смысле — этот раздел можно добавить в сопроводительное письмо.",
    skills: ["JS", "CSS", "HTML", "Angular", "Frontend"],
    actionType: "subscribe",
  },
];
