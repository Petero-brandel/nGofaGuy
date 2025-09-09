import { JobDetailHeader } from "@/components/explore-page/job-detail-header"
import { JobDetailHero } from "@/components/explore-page/job-detail-hero"
import { JobDetailContent } from "@/components/explore-page/job-detail-content"
import { JobDetailSidebar } from "@/components/explore-page/job-detail-sidebar"
import { SimilarJobs } from "@/components/explore-page/similar-jobs"
import { JobDetailFooter } from "@/components/explore-page/job-detail-footer"

interface JobDetailPageProps {
  params: {
    id: string
  }
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  // Mock job data - in a real app, this would come from an API
  const jobData = {
    id: params.id,
    title: "Sales Consultant",
    company: "Acme Corp",
    location: "New York, NY",
    salary: "$107,500",
    type: "Full-time",
    remote: "Hybrid",
    posted: "2 days ago",
    applicants: "12 applicants",
    overview:
      "We are seeking a highly motivated and results-driven Sales Consultant to join our dynamic sales team. The successful candidate will be responsible for identifying new business opportunities, building relationships with potential clients, and driving revenue growth.",
    responsibilities: [
      "Identify and pursue new business opportunities through various channels",
      "Build and maintain strong relationships with existing and potential clients",
      "Conduct product demonstrations and presentations to prospective customers",
      "Negotiate contracts and close deals to meet or exceed sales targets",
      "Collaborate with internal teams to ensure customer satisfaction",
      "Maintain accurate records of sales activities and customer interactions",
      "Stay up-to-date with industry trends and competitive landscape",
    ],
    qualifications: [
      "Bachelor's degree in Business, Marketing, or related field",
      "3+ years of experience in sales or business development",
      "Proven track record of meeting or exceeding sales targets",
      "Excellent communication and interpersonal skills",
      "Strong negotiation and closing abilities",
      "Proficiency in CRM software and Microsoft Office Suite",
      "Self-motivated with strong organizational skills",
    ],
    skills: [
      "Sales Strategy",
      "Client Relations",
      "Business Development",
      "CRM Software",
      "Negotiation",
      "Lead Generation",
      "Market Analysis",
      "Communication",
    ],
    benefits: [
      "Competitive base salary plus commission",
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Paid time off and holidays",
      "Professional development opportunities",
      "Flexible work arrangements",
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <JobDetailHeader />
      <JobDetailHero job={jobData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <JobDetailContent job={jobData} />
          </div>
          <div className="lg:col-span-1">
            <JobDetailSidebar job={jobData} />
          </div>
        </div>
      </div>

      <SimilarJobs />
      <JobDetailFooter />
    </div>
  )
}
