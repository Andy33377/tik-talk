export default function EditProfileSkills() {
  return (
    <div className="space-y-4">
      <label className="text-sm text-gray-400">Навыки</label>

      <div className="flex items-center gap-4 flex-wrap border-b border-white/20 pb-4 min-h-[52px]">
        <span className="px-4 py-1.5 border border-white/20 rounded-md text-sm">
          ✕ JS
        </span>

        <span className="px-4 py-1.5 border border-white/20 rounded-md text-sm">
          ✕ CSS
        </span>

        <span className="px-4 py-1.5 border border-white/20 rounded-md text-sm">
          ✕ Angular
        </span>

        <input
          type="text"
          placeholder="Добавить навык"
          className="flex-1 min-w-[160px] bg-transparent outline-none text-sm placeholder:text-gray-500"
        />
      </div>
    </div>
  );
}
