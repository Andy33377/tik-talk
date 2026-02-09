import { mockCurrentUser } from "@/shared/mocks/users";
import EditProfileAvatar from "../EditProfileAvatar/EditProfileAvatar";
import EditProfileSkills from "../EditProfileSkills/EditProfileSkills";

interface InputProps {
  label: string;
  placeholder: string;
}

function Input({ label, placeholder }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        placeholder={placeholder}
        className="bg-transparent border-b border-white/30 py-2 outline-none focus:border-[#9B78FF] transition"
      />
    </div>
  );
}

interface TextareaProps {
  label: string;
  placeholder: string;
}

function Textarea({ label, placeholder }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-400">{label}</label>
      <textarea
        rows={4}
        placeholder={placeholder}
        className="bg-transparent border-b border-white/30 py-2 outline-none resize-none focus:border-[#9B78FF] transition"
      />
    </div>
  );
}

export default function EditProfileForm() {
  return (
    <div className="max-w-[600px]">
      <div className="flex justify-end mb-6">
        <button className="text-gray-400 hover:text-white">⋯</button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <Input label="Имя" placeholder="Райан" />
        <Input label="Фамилия" placeholder="Гослинг" />
      </div>

      <div className="mb-6">
        <Input label="Telegram username" placeholder="ryan.gosling" />
      </div>

      <div className="mb-6">
        <Textarea
          label="О себе"
          placeholder="Список навыков, который мы обсудили выше..."
        />
      </div>

      <EditProfileAvatar />

      <EditProfileSkills />

      <div className="flex justify-end gap-4 mt-10">
        <button className="px-6 py-2 border border-white/30 rounded hover:border-white/50 transition">
          Отмена
        </button>
        <button className="px-6 py-2 bg-[#9B78FF] text-black rounded hover:bg-[#b091ff] transition font-medium">
          Сохранить
        </button>
      </div>
    </div>
  );
}
