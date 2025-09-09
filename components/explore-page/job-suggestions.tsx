"use client"

const suggestions = [
  "Founder",
  "Founding partner",
  "Board member",
  "Entrepreneur in residence",
  "Personal Assistant",
  "Sales",
  "Project manager",
  "Co-founder",
  "Developer",
  "Managing director",
]

interface JobSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void
}

export function JobSuggestions({ onSuggestionClick }: JobSuggestionsProps) {
  return (
    <section className="mt-8 md:mt-12 px-4 md:px-0">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 md:mb-6">Suggested job searches</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 md:gap-3">
        {suggestions.map((suggestion, index) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="flex items-center justify-center space-x-1 md:space-x-2 px-2 md:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-xs md:text-sm font-medium text-gray-700 transition-colors text-center"
          >
            <span className="truncate">{suggestion}</span>
            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        ))}
      </div>
    </section>
  )
}
