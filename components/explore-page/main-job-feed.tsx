"use client"

import { useState } from "react"
import { JobCard, Job } from "./job-card"
import { AdCarousel } from "@/components/explore-page/widgets/ad-carousel"

const jobFeedData: Job[] = [
  // Example jobs (all jobs should be included as per GofaGuy)
  {
    id: 1,
    title: "Advanced Peer Tutoring – CS & STEM",
    company: "Student Academic Unit",
    location: "GK Campus",
    salary: "₦8,000 - ₦15,000/session",
    logo: "/dp.jpg",
    type: "Skill-based",
    postedAt: "2 hours ago", // Renamed from posted
    workArrangement: "On-campus",
    tags: ["Tutoring", "STEM", "Teaching"],
    color: "bg-green-100",
    premium: true,
    likes: 124,
    shares: 56,
    commentsCount: 23,
    description: "Looking for high-performing students to tutor 100L students in MTH101 and PHY101.",
  },
  {
    id: 2,
    title: "Portfolio Photography & Videography",
    company: "Campus Media",
    location: "Bosso Campus",
    salary: "₦5,000 - ₦12,000/session",
    logo: "/dp.jpg",
    type: "Creative",
    postedAt: "1 day ago",
    workArrangement: "On-campus",
    tags: ["Photography", "Videography", "Portfolio"],
    color: "bg-pink-100",
    premium: true,
    likes: 89,
    shares: 34,
    commentsCount: 15,
    description: "Need a photographer for a birthday event at Bosso. Must have own gear.",
  },
  {
    id: 3,
    title: "Campus Event Coordinator",
    company: "SUG Socials",
    location: "FUTMINNA Campus",
    salary: "₦7,000 - ₦15,000/event",
    logo: "/dp.jpg",
    type: "Event",
    postedAt: "3 days ago",
    workArrangement: "On-campus",
    tags: ["Event Management", "Leadership"],
    color: "bg-purple-100",
    premium: true,
    likes: 24,
    shares: 5,
    commentsCount: 2,
    description: "Organizing the cultural night. Need a coordinator to manage the stage and backstage.",
  },
  {
    id: 4,
    title: "Food Delivery Across Hostels",
    company: "Fast Bites",
    location: "FUTMINNA Campus",
    salary: "₦2,000/run",
    logo: "/dp.jpg",
    type: "Logistics",
    postedAt: "6 hours ago",
    workArrangement: "On-campus",
    tags: ["Delivery", "Errand"],
    color: "bg-orange-100",
    premium: false,
    likes: 45,
    shares: 12,
    commentsCount: 8,
    description: "Deliver food from Mama Put to Hostel C. Fast delivery needed.",
  },
]

interface MainJobFeedProps {
  searchQuery: string
  locationQuery: string
  activeFilter: string
}

export function MainJobFeed({ searchQuery, locationQuery, activeFilter }: MainJobFeedProps) {
  const filteredJobs = jobFeedData.filter((job) => {
    // 1. Search Query
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && !job.company.toLowerCase().includes(searchQuery.toLowerCase())) return false

    // 2. Location Query
    if (locationQuery && !job.location.toLowerCase().includes(locationQuery.toLowerCase())) return false

    // 3. Category Filters (Chips)
    if (activeFilter !== "all") {
      if (activeFilter === "urgent" && !job.premium) return false
      if (activeFilter === "near_me" && !job.location.toLowerCase().includes("campus")) return false

      const typeLower = job.type?.toLowerCase() || ""
      const tagsLower = job.tags?.map(t => t.toLowerCase()) || []

      if (activeFilter === "tech" && !typeLower.includes("tech") && !tagsLower.some(t => t.includes("tech") || t.includes("code") || t.includes("stem"))) return false
      if (activeFilter === "creative" && !typeLower.includes("creative") && !tagsLower.some(t => t.includes("media") || t.includes("design") || t.includes("photo"))) return false
      if (activeFilter === "part_time" && !job.workArrangement?.toLowerCase().includes("part-time")) return false // Assuming data has this
      if (activeFilter === "one_off" && !typeLower.includes("logistics") && !tagsLower.some(t => t.includes("errand") || t.includes("delivery"))) return false
    }

    return true
  })

  const [currentPage, setCurrentPage] = useState(0)
  const jobsPerPage = 6
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)
  const paginatedJobs = filteredJobs.slice(currentPage * jobsPerPage, (currentPage + 1) * jobsPerPage)

  return (
    <section className="mt-8 md:mt-12 px-4 sm:px-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          All Jobs {filteredJobs.length !== jobFeedData.length && `(${filteredJobs.length} of ${jobFeedData.length})`}
        </h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">View all</button>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-2">No jobs found</p>
          <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {paginatedJobs.map((job, index) => (
            <div key={job.id}>
              {/* Inject Ad after the 3rd job (index 2) on mobile/tablet */}
              {index === 3 && (
                <div className="block lg:hidden mb-6">
                  <AdCarousel />
                </div>
              )}
              <JobCard job={job} index={index} />
            </div>
          ))}
        </div>
      )}

      {/* Modern Pagination */}
      {filteredJobs.length > jobsPerPage && (
        <div className="mt-10 flex justify-center items-center gap-4">
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
          >
            Previous
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${idx === currentPage ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-blue-500"
                  }`}
              />
            ))}
          </div>

          <button
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  )
}
