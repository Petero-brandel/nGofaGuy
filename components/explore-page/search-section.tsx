"use client"

import { Search, MapPin, SlidersHorizontal } from "lucide-react"

interface SearchSectionProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  locationQuery: string
  setLocationQuery: (query: string) => void
}

export function SearchSection({
  searchQuery,
  setSearchQuery,
  locationQuery,
  setLocationQuery,
}: SearchSectionProps) {
  return (
    <section className="px-0">
      <div className="bg-gray-100 dark:bg-white/5 rounded-full p-1.5 flex items-center border border-transparent focus-within:border-brand-primary/30 focus-within:bg-white dark:focus-within:bg-card focus-within:shadow-md transition-all duration-300">

        {/* Job Input */}
        <div className="flex-1 flex items-center px-4 border-r border-gray-300 dark:border-white/10">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Start typing to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-sm font-medium text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
          />
        </div>

        {/* Location Input (Hidden on super small screens) */}
        <div className="hidden sm:flex flex-1 items-center px-4">
          <MapPin className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Location..."
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="w-full bg-transparent outline-none text-sm font-medium text-gray-900 dark:text-gray-100 placeholder:text-gray-500"
          />
        </div>

        {/* Mobile Filter Button */}
        <button className="sm:hidden p-2.5 mr-1 text-gray-700 dark:text-gray-300 hover:text-[#1657FD] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors">
          <SlidersHorizontal className="w-5 h-5" />
        </button>

        {/* Search Button */}
        <button className="bg-[#1657FD] hover:bg-blue-700 text-white rounded-full px-6 py-2.5 text-sm font-extrabold tracking-wide transition-transform active:scale-95 shadow-md shadow-blue-500/20">
          Search
        </button>

      </div>
    </section>
  )
}
