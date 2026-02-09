import type { User, Subscriber } from "@/entities/user/model/types";

interface ProfileSidebarProps {
  user: User;
  subscribers: Subscriber[];
}

export default function ProfileSidebar({
  user,
  subscribers,
}: ProfileSidebarProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm text-gray-400 mb-3">Подписчики</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {subscribers.slice(0, 5).map((s) => (
            <img
              key={s.id}
              src={s.avatarUrl}
              alt={s.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-[#0A0A0A]"
            />
          ))}
          <img src="/images/plus.svg" alt="more subscribers" />
          <span className="bg-[#9B78FF] text-black text-xs px-2 py-0.5 rounded-full font-medium">
            28
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-sm text-gray-400 mb-3">Навыки</h3>
        <div className="flex gap-2 flex-wrap">
          {user.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border border-white/30 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm text-gray-400 mb-3">О себе</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{user.about}</p>
      </div>
    </div>
  );
}
