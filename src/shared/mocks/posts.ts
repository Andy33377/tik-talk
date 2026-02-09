import type { Post, Comment } from "@/entities/user/model/types";

export const mockPosts: Post[] = [
  {
    id: "1",
    authorId: "1",
    content:
      "Список навыков, который мы обсудили выше, — основа резюме, но не единственная его часть. Также можно рассказать о себе в классическом смысле — этот раздел можно добавить в сопроводительное письмо.",
    createdAt: "2 часа назад",
    likesCount: 28,
    commentsCount: 15,
  },
  {
    id: "2",
    authorId: "1",
    content:
      "Список навыков, который мы обсудили выше, — основа резюме, но не единственная его часть. Также можно рассказать о себе в классическом смысле — этот раздел можно добавить в сопроводительное письмо.",
    createdAt: "2 часа назад",
    likesCount: 28,
    commentsCount: 15,
  },
];

export const mockComments: Record<string, Comment[]> = {
  "1": [
    {
      id: "c1",
      authorId: "2",
      content:
        "Терминаторы тестирую стенд, Готему нужен герой. За ангуляр только ты шаришь, хелп!",
      createdAt: "04.04.2024",
    },
  ],
};
