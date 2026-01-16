"use client";

import { Header } from "@/components/explore-page/exp-header";
import { Footer } from "@/components/HomeSections/footer";
import { ExploreSidebar } from "@/components/explore-page/explore-sidebar";
import { LeftSidebar } from "@/components/explore-page/left-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Globe, MapPin, Share2, MoreHorizontal, ArrowLeft, DollarSign, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { JobCard } from "@/components/explore-page/job-card";

// Mock Data
const MOCK_RECOMMENDATIONS = [
    {
        id: 101,
        title: "Campus Graphic Designer",
        company: "Creatives Hub",
        location: "Hall 2, UNIBEN",
        salary: "₦5,000/flyer",
        logo: "/dp.jpg",
        type: "Creative",
        postedAt: "1 hour ago",
        tags: ["Design", "Branding"],
        premium: true,
        price: "₦5,000"
    },
    {
        id: 102,
        title: "Fast Food Delivery",
        company: "Chow Express",
        location: "Main Gate",
        salary: "₦1,000 - ₦2,000/trip",
        logo: "/dp.jpg",
        type: "Logistics",
        postedAt: "3 hours ago",
        tags: ["Delivery", "Quick Cash"],
        premium: false,
        price: "₦1,500"
    }
];

// Mock Data (In a real app, you'd fetch this based on ID)
const MOCK_JOB = {
    id: 1,
    title: "Advanced Peer Tutoring – CS & STEM",
    company: "Student Academic Unit",
    location: "GK Campus",
    salary: "₦8,000 - ₦15,000/session",
    logo: "/dp.jpg",
    type: "Skill-based",
    postedAt: "2 hours ago",
    workArrangement: "On-campus",
    tags: ["Tutoring", "STEM", "Teaching"],
    premium: true,
    description: `We are looking for high-performing students to serve as peer tutors for 100L students in MTH101, PHY101, and CHM101.

**Responsibilities:**
- Conduct 2-hour tutoring sessions twice a week.
- Assist students with assignments and lab reports.
- Prepare mock tests for exam prep.

**Requirements:**
- Must contain a CGPA of 4.5 or above.
- Previous teaching experience is a plus.
- Must be available on weekends.

This is a great opportunity to earn extra cash while reinforcing your own knowledge!`,
    requirements: ["CGPA 4.5+", "Available Weekends", "Teaching Exp"],
    benefits: ["Certificate of Service", "Cash Stipend", "Networking"],
};

export default function JobDetailsPage() {
    const params = useParams();
    // const id = params.id; // In real app, fetchById(id)

    const job = MOCK_JOB; // Using mock for now

    const handleAccept = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        })
        toast.success("Task Accepted! 🚀", {
            description: "Redirecting you to the task dashboard...",
            duration: 3000,
        })
    }

    return (
        <div className="min-h-screen bg-[#F0F2F5] dark:bg-[#020617]">
            {/* Header (Sticky) */}
            <div className="sticky top-0 z-50 bg-white dark:bg-card border-b border-border shadow-sm">
                <Header />
            </div>

            <div className="max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6 pt-6 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left Sidebar: Navigation (Sticky) */}
                    <div className="hidden lg:block lg:col-span-3 sticky top-24">
                        <LeftSidebar />
                    </div>

                    {/* Middle: Job Details */}
                    <main className="col-span-1 lg:col-span-6 min-h-screen">

                        {/* Back Button */}
                        <div className="mb-4 px-4 sm:px-0">
                            <Link href="/explore" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-brand-primary transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-1" />
                                Back to Feed
                            </Link>
                        </div>

                        {/* Main Content Card */}
                        <div className="bg-white dark:bg-card rounded-2xl shadow-sm border border-border overflow-hidden">

                            {/* Cover / Header Gradient */}
                            <div className="h-40 bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 relative">
                                {/* Actions Top Right */}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <Button variant="ghost" size="icon" className="bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-gray-600">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-gray-600">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            <div className="px-6 pb-8 -mt-10 relative">
                                {/* Identity */}
                                <div className="flex justify-between items-end mb-6">
                                    <Avatar className="w-20 h-20 border-4 border-white dark:border-card shadow-lg">
                                        <AvatarImage src={job.logo} />
                                        <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                                    </Avatar>

                                    <div className="hidden sm:flex gap-3 mb-1">
                                        <Button onClick={handleAccept} className="font-bold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black">
                                            Accept Task
                                        </Button>
                                        <Button variant="outline" className="font-semibold border-slate-200 text-slate-700">
                                            Message Owner
                                        </Button>
                                    </div>
                                </div>

                                {/* Title & Meta */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-brand-primary">
                                        <span>{job.company}</span>
                                        {job.premium && <CheckCircle className="w-4 h-4" />}
                                    </div>
                                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                                        {job.title}
                                    </h1>

                                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full">
                                            <Briefcase className="w-4 h-4 text-gray-400" />
                                            {job.type}
                                        </span>
                                        <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full">
                                            <Clock className="w-4 h-4 text-gray-400" />
                                            {job.postedAt}
                                        </span>
                                    </div>
                                </div>

                                {/* Quick Stats Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 rounded-xl bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/20">
                                        <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-bold mb-1">
                                            <DollarSign className="w-5 h-5" />
                                            Compensation
                                        </div>
                                        <p className="text-xl font-extrabold text-gray-900 dark:text-gray-100">{job.salary}</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                                        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold mb-1">
                                            <Calendar className="w-5 h-5" />
                                            Arrangement
                                        </div>
                                        <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{job.workArrangement}</p>
                                    </div>
                                </div>

                                {/* About */}
                                <div className="prose dark:prose-invert max-w-none mb-8">
                                    <h3 className="text-lg font-bold mb-3">About this Task</h3>
                                    <p className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="border-t border-border pt-6">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Related Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {job.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="px-3 py-1.5 text-sm">#{tag}</Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile Floater Placeholders (Visible only on mobile) */}
                                <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-card border-t border-border z-40 flex gap-3 pb-8">
                                    <Button onClick={handleAccept} className="flex-1 font-bold bg-slate-900 hover:bg-slate-800 h-12 text-base">
                                        Accept Task
                                    </Button>
                                    <Button variant="outline" className="font-semibold h-12 w-12 rounded-full border-slate-200">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>

                            </div>
                        </div>

                        {/* Trending Gigs / Recommendations */}
                        <div className="mt-12 mb-8">
                            <div className="flex items-center justify-between mb-6 px-4 sm:px-0">
                                <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                                    Trending Gigs
                                    <span className="text-brand-primary">You Might Like</span>
                                </h2>
                                <Link href="/explore" className="text-sm font-bold text-brand-primary hover:underline">
                                    View all
                                </Link>
                            </div>

                            <div className="space-y-4 px-4 sm:px-0">
                                {MOCK_RECOMMENDATIONS.map((job, index) => (
                                    <JobCard key={job.id} job={job as any} index={index} />
                                ))}
                            </div>
                        </div>

                    </main>

                    {/* Right Sidebar: Widgets (Sticky) */}
                    <div className="hidden lg:block lg:col-span-3 sticky top-24">
                        <ExploreSidebar />
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-white dark:bg-card border-t border-border/60">
                <Footer />
            </div>
        </div>
    );
}
