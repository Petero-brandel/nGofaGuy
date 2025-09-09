"use client"

import Link from "next/link"
import { useState } from "react"

const jobFeedData = [
  // Example jobs (all jobs should be included as per GofaGuy)
  {
    id: 1,
    title: "Advanced Peer Tutoring – CS & STEM",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA Campus",
    salary: "₦8,000 - ₦15,000 per session",
    logo: "/dp.jpg",
    type: "Skill-based",
    posted: "2 hours ago",
    workArrangement: "On-campus",
    experienceLevel: "Intermediate",
    tags: ["Tutoring", "STEM", "Premium"],
    color: "bg-green-100",
    premium: true,
  },
  {
    id: 2,
    title: "Portfolio Photography & Videography",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA Campus",
    salary: "₦5,000 - ₦12,000 per session",
    logo: "/dp.jpg",
    type: "Creative",
    posted: "1 day ago",
    workArrangement: "On-campus",
    experienceLevel: "Beginner",
    tags: ["Photography", "Videography", "Portfolio"],
    color: "bg-pink-100",
    premium: true,
  },
  {
    id: 3,
    title: "Campus Event Coordinator",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA Campus",
    salary: "₦7,000 - ₦15,000 per event",
    logo: "/dp.jpg",
    type: "Event",
    posted: "3 days ago",
    workArrangement: "On-campus",
    experienceLevel: "Intermediate",
    tags: ["Event Management", "Leadership", "Premium"],
    color: "bg-purple-100",
    premium: true,
  },
  {
    id: 4,
    title: "Food Delivery Across Hostels",
    company: "GofaGuy FUTMINNA",
    location: "FUTMINNA Campus",
    salary: "₦2,000 - ₦5,000 per delivery",
    logo: "/dp.jpg",
    type: "Logistics",
    posted: "6 hours ago",
    workArrangement: "On-campus",
    experienceLevel: "Entry Level",
    tags: ["Delivery", "Errand"],
    color: "bg-orange-100",
    premium: false,
  },
]

interface MainJobFeedProps {
  searchQuery: string
  locationQuery: string
}

export function MainJobFeed({ searchQuery, locationQuery }: MainJobFeedProps) {
  const filteredJobs = jobFeedData.filter((job) => {
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && !job.company.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (locationQuery && !job.location.toLowerCase().includes(locationQuery.toLowerCase())) return false
    return true
  })

  const [currentPage, setCurrentPage] = useState(0)
  const jobsPerPage = 6
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)
  const paginatedJobs = filteredJobs.slice(currentPage * jobsPerPage, (currentPage + 1) * jobsPerPage)

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedJobs.map((job) => (
            <div
              key={job.id}
              className={`flex flex-col justify-between p-6 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 bg-white
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-600 font-bold text-lg overflow-hidden">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) parent.textContent = getInitials(job.company)
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/explore/${job.id}`}>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">{job.title}</h3>
                  </Link>
                  <p className="text-gray-600">{job.company}</p>
                </div>
              </div>

              <div className="mt-3 text-sm text-gray-500 flex flex-wrap gap-2">
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.workArrangement}</span>
                <span>•</span>
                <span>{job.type}</span>
                <span>•</span>
                <span>{job.posted}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {job.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      tag === "Premium" ? "bg-yellow-200 text-yellow-900" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-gray-900 font-medium">{job.salary}</p>
                <Link href={`/explore/${job.id}`}>
                  <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Accept
                  </button>
                </Link>
              </div>
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
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentPage ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-blue-500"
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
