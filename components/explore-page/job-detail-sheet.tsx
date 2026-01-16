"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"
import { Job } from "./job-card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, DollarSign, Clock, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

interface JobDetailSheetProps {
    job: Job
    children: React.ReactNode
}

export function JobDetailSheet({ job, children }: JobDetailSheetProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[85vh] rounded-t-[20px] p-0 overflow-hidden sm:max-w-none sm:h-[85vh] lg:h-full lg:w-[600px] lg:rounded-none lg:border-l lg:side-right">
                <div className="h-full overflow-y-auto bg-white dark:bg-black">
                    {/* Cover / Header */}
                    <div className="h-32 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 relative">
                        <div className="absolute -bottom-6 left-6">
                            <Avatar className="w-16 h-16 border-4 border-white dark:border-black shadow-md">
                                <AvatarImage src={job.logo} />
                                <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>

                    <div className="pt-8 px-6 pb-24">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <SheetTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                                    {job.title}
                                </SheetTitle>
                                <SheetDescription className="text-base text-gray-500 font-medium flex items-center gap-2">
                                    {job.company}
                                    {job.premium && <CheckCircle className="w-4 h-4 text-brand-primary" />}
                                </SheetDescription>
                            </div>
                            <Link href={`/job/${job.id}`} className="p-2 -mr-2 text-brand-primary hover:bg-brand-primary/10 rounded-full transition-colors" title="View Full Page">
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-border/50">
                                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Salary</span>
                                <div className="flex items-center gap-2 mt-1">
                                    <DollarSign className="w-4 h-4 text-green-500" />
                                    <span className="font-bold text-gray-900 dark:text-gray-100">{job.salary}</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-border/50">
                                <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Location</span>
                                <div className="flex items-center gap-2 mt-1">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    <span className="font-bold text-gray-900 dark:text-gray-100 truncate">{job.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 mb-8">
                            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">About this task</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                                {job.description || "No description provided for this task."}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {job.tags?.map(tag => (
                                    <Badge key={tag} variant="secondary" className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 rounded-full">
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Action Bar (Fixed in Sheet) */}
                        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-black border-t border-border flex gap-3 pb-8 sm:pb-4">
                            <Button className="flex-1 h-12 text-base font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black hover:dark:bg-gray-200 shadow-none transition-transform active:scale-95">
                                Accept Task
                            </Button>
                            <Button variant="outline" className="h-12 w-12 rounded-full border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                                <Clock className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
