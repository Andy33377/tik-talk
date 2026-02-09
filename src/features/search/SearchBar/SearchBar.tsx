export default function SearchBar() {
  return (
    <div className="flex items-center gap-3 w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3">
      <input
        type="text"
        placeholder="Поиск..."
        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
      />
      <img
        src="/images/sidebar/search.svg"
        alt="search"
        className="w-5 h-5 text-gray-400"
      />
      <button className="text-gray-400 hover:text-white p-1">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}
