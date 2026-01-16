"use client"

const suggestions = [
  "Founder",
  "Partner",
  "Board member",
  "Personal Assistant",
  "Sales",
  "Project manager",
  "Developer",
  "Designer",
]

interface JobSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void
}

export function JobSuggestions({ onSuggestionClick }: JobSuggestionsProps) {
  return (
    <section className="mt-4 px-1">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide items-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0 mr-1">Popular:</span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="px-3 py-1 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors whitespace-nowrap"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </section>
  )
}
