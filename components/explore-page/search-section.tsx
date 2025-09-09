"use client"

import { useState } from "react"

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
    <section className="mt-6 px-4 sm:px-6 md:px-0">
      <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-3 sm:space-y-0 border border-gray-200">
        {/* Job / Keyword Input */}
        <div className="flex items-center flex-1 bg-gray-50 rounded-lg px-3 py-2 sm:py-0">
          <label htmlFor="job-search" className="sr-only">
            Job title, keyword or company
          </label>
          <svg
            className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            id="job-search"
            type="text"
            placeholder="Job title, keyword or company"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Location Input */}
        <div className="flex items-center flex-1 bg-gray-50 rounded-lg px-3 py-2 sm:py-0">
          <label htmlFor="location-search" className="sr-only">
            Location
          </label>
          <svg
            className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <input
            id="location-search"
            type="text"
            placeholder="Any location"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Search Button */}
        <button
          type="button"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 sm:py-0 px-4 transition"
        >
          Search
        </button>
      </div>

      {/* Secondary actions */}
      <div className="text-center mt-4 text-sm text-gray-600">
        You can also{" "}
        <button className="font-semibold text-gray-900 hover:underline">Post a job</button> or{" "}
        <button className="font-semibold text-gray-900 hover:underline">Post your resume</button>
      </div>
    </section>
  )
}
