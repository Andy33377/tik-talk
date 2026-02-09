interface ActiveFiltersProps {
  filters: string[];
  onRemove?: (filter: string) => void;
}

export default function ActiveFilters({
  filters,
  onRemove,
}: ActiveFiltersProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((filter) => (
        <span
          key={filter}
          className="inline-flex items-center gap-2 px-3 py-1 border border-white/30 rounded text-sm"
        >
          {filter}
          <button
            type="button"
            onClick={() => onRemove?.(filter)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </span>
      ))}
    </div>
  );
}
