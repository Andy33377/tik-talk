import type { User } from "@/entities/user/model/types";

interface TagProps {
  children: React.ReactNode;
}

interface ProfileHeaderProps {
  user: User;
}

function Tag({ children }: TagProps) {
  return (
    <span className="px-3 py-1 border border-white/30 rounded text-sm">
      {children}
    </span>
  );
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div>
      <div className="flex flex-col items-center mb-8">
        <img
          src="/images/users/rayan.png"
          alt="avatar"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <div className="text-center">
          <div className="font-semibold text-xl mb-1">
            {user.firstName} {user.lastName}
          </div>
          <div className="text-sm text-gray-400">{user.username}</div>
        </div>
      </div>

      <div className="border-t border-dashed border-white/20 my-6" />

      <div className="mb-6">
        <h3 className="font-semibold mb-3">Навыки</h3>
        <div className="flex gap-2 flex-wrap">
          <Tag>JS</Tag>
          <Tag>CSS</Tag>
          <Tag>React</Tag>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">О себе</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Список навыков, который мы обсудили выше, — основа резюме, но не
          единственная его часть. Вы также можете рассказать о себе в
          классическом смысле — этот раздел можно добавить в сопроводительное
          письмо.
        </p>
      </div>
    </div>
  );
}
