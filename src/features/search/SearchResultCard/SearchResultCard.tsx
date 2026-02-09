import type { SearchResult } from "@/entities/search/model/types";

interface SearchResultCardProps {
  result: SearchResult;
}

export default function SearchResultCard({ result }: SearchResultCardProps) {
  return (
    <div className="bg-[#141414] border border-white/10 rounded-lg p-6 flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#9B78FF]/50">
          <img
            src={result.avatarUrl}
            alt={`${result.firstName} ${result.lastName}`}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-medium mt-2 text-center">
          {result.firstName} {result.lastName}
        </p>
        <p className="text-sm text-gray-400 text-center">{result.username}</p>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {result.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {result.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border border-white/30 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end flex-shrink-0">
        {result.actionType === "write" ? (
          <>
            <button className="p-2 rounded border border-white/30 hover:border-white/50 text-gray-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#9B78FF] text-white rounded hover:bg-[#b091ff] transition">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Написать
              {result.unreadCount != null && (
                <span className="bg-black/20 px-1.5 rounded text-sm">
                  {result.unreadCount}
                </span>
              )}
            </button>
            <button className="p-2 rounded border border-white/30 hover:border-white/50 text-gray-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#9B78FF] text-white rounded hover:bg-[#b091ff] transition">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="20" y1="8" x2="20" y2="14" />
                <line x1="23" y1="11" x2="17" y2="11" />
              </svg>
              Подписаться
            </button>
            <button className="p-2 rounded border border-white/30 hover:border-white/50 text-gray-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
