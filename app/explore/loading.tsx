
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#020617]">
            {/* Header Skeleton */}
            <div className="sticky top-0 z-50 bg-white dark:bg-card border-b border-border shadow-sm px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Skeleton className="w-11 h-11 rounded-2xl" />
                    <Skeleton className="hidden md:block w-40 h-10 rounded-full" />
                </div>
                <div className="flex items-center gap-5">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <Skeleton className="w-11 h-11 rounded-full" />
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6 pt-6 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left Sidebar Skeleton */}
                    <div className="hidden lg:block lg:col-span-3 space-y-4">
                        <Skeleton className="h-64 rounded-xl" />
                        <Skeleton className="h-40 rounded-xl" />
                    </div>

                    {/* Main Feed Skeleton */}
                    <div className="col-span-1 lg:col-span-6 space-y-6 px-4 sm:px-0">
                        {/* Hero Skeleton */}
                        <Skeleton className="h-48 w-full rounded-2xl" />

                        {/* Recommended Skeleton */}
                        <Skeleton className="h-16 w-full rounded-xl" />

                        {/* Search Skeleton */}
                        <Skeleton className="h-12 w-full rounded-full" />

                        {/* Job Cards Skeletons */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white dark:bg-card rounded-2xl p-4 border border-border/60">
                                <div className="flex items-center gap-3 mb-4">
                                    <Skeleton className="w-10 h-10 rounded-full" />
                                    <div className="space-y-2">
                                        <Skeleton className="w-32 h-4" />
                                        <Skeleton className="w-24 h-3" />
                                    </div>
                                </div>
                                <Skeleton className="w-full h-4 mb-2" />
                                <Skeleton className="w-2/3 h-4 mb-4" />
                                <Skeleton className="w-full h-32 rounded-xl mb-4" />
                                <div className="flex justify-between items-center bg-gray-50 dark:bg-white/5 p-2 rounded-lg">
                                    <Skeleton className="w-24 h-9 rounded-md" />
                                    <div className="flex gap-2">
                                        <Skeleton className="w-9 h-9 rounded-full" />
                                        <Skeleton className="w-9 h-9 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Sidebar Skeleton */}
                    <div className="hidden lg:block lg:col-span-3 space-y-4">
                        <Skeleton className="h-60 rounded-xl" />
                        <Skeleton className="h-40 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}
