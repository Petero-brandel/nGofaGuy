"use client"

import { Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

const ongoingTasks = [
    { label: "Deliver Food to Hostel C", status: "In Progress", due: "2h", progress: 60 },
    { label: "Fix Plumbing at Staff Qtrs", status: "Pending", due: "1d", progress: 0 },
]

export function TasksWidget() {
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between px-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">My Gigs</h3>
                <Link href="/tasks" className="text-[10px] font-bold text-brand-primary hover:underline flex items-center">
                    View All <ChevronRight className="w-3 h-3" />
                </Link>
            </div>
            {ongoingTasks.map((task, i) => (
                <div key={i} className="bg-white dark:bg-card p-4 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-2 relative z-10">
                        <h4 className="font-bold text-xs text-gray-800 dark:text-gray-200 line-clamp-1 pr-4">{task.label}</h4>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${task.progress > 0 ? "bg-blue-50 text-brand-primary" : "bg-gray-100 text-gray-500"
                            }`}>
                            {task.progress > 0 ? `${task.progress}%` : "New"}
                        </span>
                    </div>

                    {/* Custom Mini Progress Bar */}
                    <div className="w-full bg-gray-100 dark:bg-white/10 h-1 rounded-full overflow-hidden mb-2">
                        <div
                            className="h-full bg-brand-primary rounded-full transition-all duration-500"
                            style={{ width: `${task.progress}%` }}
                        />
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>Due in {task.due}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
