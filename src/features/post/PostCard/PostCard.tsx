import type { User } from "@/entities/user/model/types";
import type { Post, Comment } from "@/entities/user/model/types";

interface PostCardProps {
  post: Post;
  author: User;
  comments?: Comment[];
}

function CommentItem({
  authorName,
  content,
  createdAt,
}: {
  authorName: string;
  content: string;
  createdAt: string;
}) {
  return (
    <div className="flex gap-3 py-3">
      <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0" />
      <div>
        <span className="text-sm font-medium">{authorName}</span>
        <span className="text-xs text-gray-500 ml-2">{createdAt}</span>
        <p className="text-sm text-gray-300 mt-1">{content}</p>
      </div>
    </div>
  );
}

export default function PostCard({
  post,
  author,
  comments = [],
}: PostCardProps) {
  return (
    <article className="bg-[#141414] rounded-lg border border-white/15 px-6 py-5">
      {/* Заголовок поста */}
      <header className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author.avatarUrl}
            alt={author.firstName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">
              {author.firstName} {author.lastName}
              <span className="ml-2 text-xs text-gray-400">2 часа назад</span>
            </p>
            <p className="text-xs text-gray-500">{author.username}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white text-xl leading-none">
          ⋯
        </button>
      </header>

      {/* Текст поста */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {post.content}
      </p>

      {/* Счётчики */}
      <div className="flex gap-6 text-sm text-gray-400 mb-4">
        <span className="flex items-center gap-1">
          <img src="/images/chat.svg" alt="" className="w-4 h-4" />{" "}
          {post.commentsCount}
        </span>
        <span className="flex items-center gap-1">
          <img src="/images/like.svg" alt="" className="w-4 h-4" />{" "}
          {post.likesCount}
        </span>
      </div>

      {/* Комментарии */}
      {comments.length > 0 && (
        <div className="border-t border-white/10 pt-4 space-y-0">
          {comments.map((c) => (
            <CommentItem
              key={c.id}
              authorName="Сара Коннор"
              content={c.content}
              createdAt={c.createdAt}
            />
          ))}
        </div>
      )}

      {/* Поле «Напишите комментарий» */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
        <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0" />
        <input
          type="text"
          placeholder="Напишите комментарий"
          className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
        />
        <button className="text-gray-400 hover:text-white">
          <img src="/images/smile.svg" alt="" className="w-4 h-4" />
        </button>
        <button className="p-2 bg-[#9B78FF] text-black rounded hover:bg-[#b091ff] transition text-sm">
          <img src="/images/cursor.svg" alt="" className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
