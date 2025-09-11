"use client";

import { useState } from "react";
import { Header } from "@/components/explore-page/exp-header";
import { HeroSection } from "@/components/explore-page/herosection";
import { SearchSection } from "@/components/explore-page/search-section";
import { JobSuggestions } from "@/components/explore-page/job-suggestions";
import { RecommendedJobs } from "@/components/explore-page/recommended-jobs";
import { MainJobFeed } from "@/components/explore-page/main-job-feed";
import { Footer } from "@/components/HomeSections/footer";

// Define the FilterState type according to your filter requirements
interface FilterState {
  [key: string]: any;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({});

  return (
    <div className="min-h-screen bg-[#eef6ff]">
      <div className="mx-auto bg-white min-h-screen">
        <Header />
        <main className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <RecommendedJobs />

          <div className="w-[100%] mx-auto">
            <SearchSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              locationQuery={locationQuery}
              setLocationQuery={setLocationQuery}
            />
          </div>
          <JobSuggestions onSuggestionClick={setSearchQuery} />

          <MainJobFeed
            searchQuery={searchQuery}
            locationQuery={locationQuery}
            filters={filters}
          />
        </main>
        <div className="mt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
