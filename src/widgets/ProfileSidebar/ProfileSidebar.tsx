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
      {/* Подписчики */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-extrabold text-[18px] leading-[24px] tracking-[0px]">
            Подписчики
          </h3>
          <span className="inline-flex h-[18px] w-[26px] text-[12px] bg-[#98E9AB] text-black items-center justify-center">
            28
          </span>
        </div>
        <div className="flex items-center gap-2">
          {subscribers.slice(0, 5).map((s) => (
            <img
              key={s.id}
              src={s.avatarUrl}
              alt={s.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          ))}
        </div>
      </section>

      {/* Навыки */}
      <section>
        <h3 className="text-sm text-gray-400 mb-3">Навыки</h3>
        <div className="flex gap-2 flex-wrap">
          {user.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border border-white/30 rounded text-xs uppercase tracking-wide"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* О себе */}
      <section>
        <h3 className="text-sm text-gray-400 mb-3">О себе</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{user.about}</p>
      </section>
    </div>
  );
}
