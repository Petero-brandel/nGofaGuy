"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const FILTERS = [
    { label: "All", value: "all" },
    { label: "Urgent", value: "urgent" },
    { label: "Near Me", value: "near_me" },
    { label: "Tech", value: "tech" },
    { label: "Creative", value: "creative" },
    { label: "Part-time", value: "part_time" },
    { label: "One-off", value: "one_off" },
]

interface FilterChipsProps {
    activeFilter: string
    onFilterChange: (filter: string) => void
}

export function FilterChips({ activeFilter, onFilterChange }: FilterChipsProps) {

    return (
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 px-1 -mx-1 mask-linear-fade">
            {FILTERS.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    className={cn(
                        "whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all border",
                        activeFilter === filter.value
                            ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white shadow-md transform scale-105"
                            : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                    )}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}
