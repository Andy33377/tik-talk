import type { User } from "@/entities/user/model/types";

interface CreatePostProps {
  user: User;
}

export default function CreatePost({ user }: CreatePostProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-[#141414] rounded-lg border border-white/10 mb-6">
      <img
        src={user.avatarUrl}
        alt={user.firstName}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
      <input
        type="text"
        placeholder="Напишите что-нибудь"
        className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-500"
      />
      <div className="flex items-center gap-2">
        <button className="text-gray-400 hover:text-white p-1">
          <img src="/images/smile.svg" alt="" />
        </button>
        <button className="p-2 bg-[#9B78FF] text-black rounded hover:bg-[#b091ff] transition">
          <img src="/images/cursor.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
