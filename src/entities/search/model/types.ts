export interface SearchResult {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string;
  description: string;
  skills: string[];
  actionType: "write" | "subscribe";
  unreadCount?: number;
}
