import type { Subscriber, User } from "@/entities/user/model/types";

export const mockCurrentUser: User = {
  id: "1",
  firstName: "Валерий",
  lastName: "Дубровский",
  username: "valerii.dubrovski",
  avatarUrl: "/images/users/Valera.png",
  about: "Текст о себе...",
  skills: ["JS", "CSS", "React"],
};

export const mockSubscribers: Subscriber[] = [
  {
    id: "2",
    name: "Сара Коннор",
    avatarUrl: "/images/users/Sarah.png",
  },
  {
    id: "3",
    name: "Кристанна Локен",
    avatarUrl: "/images/users/Kris.png",
  },
  {
    id: "4",
    name: "Майкл Уинслоу",
    avatarUrl: "/images/users/Mike.png",
  },
];
