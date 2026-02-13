import EditProfileAvatar from "../EditProfileAvatar/EditProfileAvatar";
import EditProfileSkills from "../EditProfileSkills/EditProfileSkills";

export default function EditProfileForm() {
  return (
    <div className="space-y-12 text-white">
      {/* Name row */}
      <div className="grid grid-cols-2 gap-16">
        <div className="flex flex-col gap-3">
          <label className="text-sm text-gray-400">Имя</label>
          <input
            defaultValue="Райан"
            className="bg-transparent border-b border-white/30 pb-3 text-lg outline-none"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm text-gray-400">Фамилия</label>
          <input
            defaultValue="Гослинг"
            className="bg-transparent border-b border-white/30 pb-3 text-lg outline-none"
          />
        </div>
      </div>

      {/* Telegram */}
      <div className="flex flex-col gap-3">
        <label className="text-sm text-gray-400">Telegram username</label>
        <input
          defaultValue="ryan.gosling"
          className="bg-transparent border-b border-white/30 pb-3 text-lg outline-none"
        />
      </div>

      {/* About */}
      <div className="flex flex-col gap-4">
        <label className="text-sm text-gray-400">О себе</label>
        <textarea
          rows={4}
          defaultValue="Список навыков, который мы обсудили выше, — основа резюме, но не единственная его часть. Также можно рассказать о себе в классическом смысле — этот раздел можно добавить в сопроводительное письмо."
          className="bg-transparent border-b border-white/30   text-[15px] leading-7 outline-none resize-none"
        />
      </div>

      <EditProfileAvatar />
      <EditProfileSkills />

      {/* Footer */}
      <div className="flex items-center justify-between  border-white/10">
        <div className="flex gap-6">
          <div>
            <button className="w-[56px] h-[56px] border border-white/20 rounded-md flex items-center justify-center hover:bg-white/5 transition">
              <img src="/images/edit-profile/garb.svg" alt="" />
            </button>
          </div>
          <div>
            <button className="w-[56px] h-[56px] border border-white/20 rounded-md flex items-center justify-center hover:bg-white/5 transition">
              <img src="/images/edit-profile/out.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <button className="px-10 py-3 border border-white/20 rounded-md hover:bg-white/5 transition">
            Отмена
          </button>

          <button className="px-10 py-3 bg-[#9B78FF] rounded-md hover:bg-[#b091ff] transition">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}
