import type { User } from "@/entities/user/model/types";

interface CreatePostProps {
  user: User;
}

export default function CreatePost({ user }: CreatePostProps) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 bg-[#141414] border border-white/15 rounded-lg">
      <img
        src={user.avatarUrl}
        alt={user.firstName}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
      />
      <input
        type="text"
        placeholder="Напишите что-нибудь"
        className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
      />
      <button className="p-2 bg-[#9B78FF] text-black rounded hover:bg-[#b091ff] transition">
        <img src="/images/cursor.svg" alt="" className="w-4 h-4" />
      </button>
    </div>
  );
}
