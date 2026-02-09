interface SkillTagProps {
  children: React.ReactNode;
  onRemove?: () => void;
}

function SkillTag({ children, onRemove }: SkillTagProps) {
  return (
    <span className="px-3 py-1 border border-white/30 rounded text-sm flex items-center gap-2">
      {children}
      <button
        onClick={onRemove}
        className="text-gray-400 hover:text-white transition"
        type="button"
      >
        ✕
      </button>
    </span>
  );
}

export default function EditProfileSkills() {
  return (
    <div className="mb-10">
      <label className="text-sm text-gray-400 mb-2 block">Навыки</label>
      <div className="flex gap-2 flex-wrap mb-2">
        <SkillTag>JS</SkillTag>
        <SkillTag>CSS</SkillTag>
        <SkillTag>React</SkillTag>
      </div>
      <input
        type="text"
        placeholder="Добавить навык"
        className="w-full bg-transparent border-b border-white/30 py-2 outline-none focus:border-[#9B78FF] transition"
      />
    </div>
  );
}
