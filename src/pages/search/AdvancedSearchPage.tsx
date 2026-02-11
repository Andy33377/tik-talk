import Sidebar from "@/widgets/Sidebar/Sidebar";
import AdvancedSearchFilters from "@/features/search/AdvancedSearchFilters/AdvancedSearchFilters";
import SearchResultCard from "@/features/search/SearchResultCard/SearchResultCard";
import { mockSearchResults } from "@/shared/mocks/search";

export default function AdvancedSearchPage() {
  return (
    <div className="min-h-screen flex relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/auth/ImgBg1920.png')",
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/40" />

      <Sidebar className="relative z-20" />

      <div className="flex-1 flex flex-col relative z-20 px-10 py-8">
        <h1 className="text-3xl font-semibold mb-2">Поиск</h1>
        <p className="text-gray-400 text-sm mb-6">Advanced search</p>

        <AdvancedSearchFilters />

        <div className="mt-6 space-y-4">
          {mockSearchResults.map((result) => (
            <SearchResultCard key={result.id} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
}
