interface AdvancedSearchFiltersProps {
  skills?: string[];
}

function FilterField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-400">{label}</span>
      <div className="flex items-center gap-2 bg-[#141414] border border-white/20 rounded px-3 py-2">
        <span className="text-sm text-gray-500">{placeholder}</span>
        <div className="ml-auto text-gray-500">
          <img
            src="/images/sidebar/search.svg"
            alt="search"
            className="w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
}

function SkillsField({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-400">{label}</span>
      <div className="flex items-center gap-2 bg-[#141414] border border-white/20 rounded px-3 py-2">
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-2 px-3 py-1 border border-white/30 rounded text-sm"
            >
              {skill}
              <button type="button" className="text-gray-400 hover:text-white">
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdvancedSearchFilters({
  skills = ["JS", "CSS"],
}: AdvancedSearchFiltersProps) {
  return (
    <div className="w-full bg-[#141414]/80 border border-white/10 rounded-lg px-6 py-4 flex items-stretch gap-4">
      <div className="flex-1 grid grid-cols-4 gap-4">
        <FilterField label="Имя пользователя" placeholder="Выберите" />
        <FilterField label="Дата регистрации" placeholder="Выберите" />
        <FilterField label="Город" placeholder="Выберите" />
        <SkillsField label="Навыки" skills={skills} />
      </div>

      <button className="self-stretch w-10 flex items-center justify-center bg-[#9B78FF] text-black rounded-lg hover:bg-[#b091ff] transition">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M6 12h12M10 18h8" />
        </svg>
      </button>
    </div>
  );
}
