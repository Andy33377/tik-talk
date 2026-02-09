import type { User } from "@/entities/user/model/types";

interface ProfilePageHeaderProps {
  user: User;
}

export default function ProfilePageHeader({ user }: ProfilePageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <img
          src={user.avatarUrl}
          alt={user.firstName}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-semibold">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-gray-400">{user.username}</p>
        </div>
      </div>
      <a
        href="#"
        className="flex items-center gap-2 px-4 py-2 bg-[#9B78FF] text-black rounded-lg hover:bg-[#b091ff] transition font-medium"
      >
        <span>Редактировать</span>
        <span>
          <img src="/images/black-settings.svg" alt="" />
        </span>
      </a>
    </div>
  );
}
