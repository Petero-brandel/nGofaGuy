"use client";

import { useState } from "react";
import { Header } from "@/components/explore-page/exp-header";
import { HeroSection } from "@/components/explore-page/herosection";
import { RecommendedJobs } from "@/components/explore-page/recommended-jobs";
import { SearchSection } from "@/components/explore-page/search-section";
import { JobSuggestions } from "@/components/explore-page/job-suggestions";
import { MainJobFeed } from "@/components/explore-page/main-job-feed";
import { Footer } from "@/components/HomeSections/footer";
import { ExploreSidebar } from "@/components/explore-page/explore-sidebar";
import { LeftSidebar } from "@/components/explore-page/left-sidebar";

import { AdCarousel } from "@/components/explore-page/widgets/ad-carousel";
import { FilterChips } from "@/components/explore-page/filter-chips";
import { PostJobFAB } from "@/components/explore-page/fab";
import { NewJobsPill } from "@/components/explore-page/new-jobs-pill";
// Define the FilterState type according to your filter requirements
interface FilterState {
  [key: string]: any;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

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

          {/* Middle: Main Feed */}
          <main className="col-span-1 lg:col-span-6 min-h-screen">

            {/* Hero & Recommended (Restored) */}
            <div className="mb-6 space-y-6 px-4 sm:px-0">
              <HeroSection />
              <RecommendedJobs />
            </div>



            {/* Search Area (Scrolls naturally) */}
            <div className="mb-6 px-4 sm:px-0">
              <SearchSection
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                locationQuery={locationQuery}
                setLocationQuery={setLocationQuery}
              />
              <div className="mt-3">
                <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />
              </div>
              {/* <JobSuggestions onSuggestionClick={setSearchQuery} /> */}
            </div>

            {/* New Jobs Indicator */}
            <NewJobsPill />

            {/* The Feed */}
            <MainJobFeed
              searchQuery={searchQuery}
              locationQuery={locationQuery}
              activeFilter={activeFilter}
            />
          </main>

          {/* Right Sidebar: Widgets (Sticky) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-24">
            <ExploreSidebar />
          </div>

        </div>
      </div>

      {/* Floating Action Button (Mobile) */}
      <PostJobFAB />

      {/* Footer Restored for Desktop and Mobile */}
      <div className="mt-12 bg-white dark:bg-card border-t border-border/60">
        <Footer />
      </div>
    </div>
  );
}
