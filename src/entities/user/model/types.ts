export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string;
  about: string;
  skills: string[];
}

export interface Post {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
}

export interface Comment {
  id: string;
  authorId: string;
  content: string;
  createdAt: string;
}

export interface Subscriber {
  id: string;
  name: string;
  avatarUrl: string;
  username?: string;
}
