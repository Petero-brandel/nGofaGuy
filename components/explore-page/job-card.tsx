"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { MapPin, Heart, MessageCircle, Share2, MoreHorizontal, Globe, CheckCircle, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner" // Changed to sonner
import { Input } from "@/components/ui/input"
import confetti from "canvas-confetti"
// No modal needed anymore

export interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  logo: string
  color?: string
  tags?: string[]
  type?: string
  postedAt?: string
  description?: string
  workArrangement?: string
  premium?: boolean
  likes?: number
  shares?: number
  commentsCount?: number
}

interface JobCardProps {
  job: Job
  index?: number
}

interface Comment {
  id: number
  user: string
  text: string
  time: string
  avatar?: string
}

export function JobCard({ job, index = 0 }: JobCardProps) {
  // Removed useToast hook content

  // State
  const [isSaved, setIsSaved] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, user: "Sarah J.", text: "Is this still open? I have a camera.", time: "10m ago", avatar: "S" },
    { id: 2, user: "David M.", text: "Sent a DM!", time: "5m ago", avatar: "D" }
  ])

  // Handlers
  const handleSave = () => {
    setIsSaved(!isSaved)
    if (!isSaved) {
      toast.success("Saved to Favorites", {
        description: "You can find this in your saved jobs."
      })
    } else {
      toast("Removed from Favorites")
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText(`https://gofaguy.com/job/${job.id}`)
    toast.success("Link Copied!", {
      description: "Job link copied to clipboard."
    })
  }

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

  const handleMessage = () => {
    toast.info(`Started chat with ${job.company}`)
  }

  const postComment = () => {
    if (!commentText.trim()) return
    const newComment: Comment = {
      id: Date.now(),
      user: "You",
      text: commentText,
      time: "Just now",
      avatar: "Y"
    }
    setComments([...comments, newComment])
    setCommentText("")
    toast.success("Comment Posted")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`w-full bg-white dark:bg-card rounded-2xl shadow-sm border mb-4 overflow-hidden group ${job.premium ? 'border-brand-primary/30 shadow-brand-primary/5' : 'border-border/60'
        }`}
    >
      {/* 1. Header: Social Identity */}
      <div className="p-4 pb-2 flex justify-between items-start">
        <Link href={`/job/${job.id}`} className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border-2 border-white ring-2 ring-gray-100 dark:ring-white/10 cursor-pointer">
            <AvatarImage src={job.logo} alt={job.company} />
            <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 text-[15px] leading-tight hover:text-brand-primary cursor-pointer transition-colors flex items-center gap-1">
              {job.company}
              {job.premium && <CheckCircle className="w-3.5 h-3.5 text-brand-primary fill-brand-primary/10" />}
            </h4>
            <div className="flex items-center text-xs text-gray-500 mt-0.5 gap-1.5">
              <span className="font-medium text-brand-primary">{job.type}</span>
              <span>•</span>
              <span>{job.postedAt || "Just now"}</span>
              <span>•</span>
              <Globe className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </Link>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-900">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* 2. Content: Status Text First */}
      <div className="px-4 py-1 pb-3">
        <p className="text-[15px] text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
          {job.description || `We are looking for a ${job.title} to join our team. ${job.premium ? "This is an urgent request!" : "Check out the details below."}`}
        </p>
        {job.tags && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {job.tags.map((tag, i) => (
              <span key={i} className="px-2 py-0.5 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium border border-transparent hover:border-brand-primary/30 hover:text-brand-primary transition-all cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 3. Attachment: The "Job" Details Card */}
      <div className="mx-4 mb-4 rounded-xl overflow-hidden border border-border/80 bg-gray-50/50 dark:bg-card/30 relative">
        {/* Visual decoration */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-primary to-brand-accent" />

        <div className="p-4 pl-5">
          <Link href={`/job/${job.id}`} className="block cursor-pointer group/link">
            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1 group-hover/link:text-brand-primary transition-colors">
              {job.title}
            </h3>
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-brand-secondary" />
              {job.location}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200/60 dark:border-white/5">
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Budget</span>
              <p className="text-xl font-extrabold text-gray-900 dark:text-white leading-none mt-0.5">
                {job.salary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footer: Enhanced Social Actions */}
      <div className="px-3 py-2 border-t border-border/60 flex items-center justify-between bg-gray-50/30 dark:bg-white/5">
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <Link href={`/job/${job.id}`} className="flex-1 min-w-[120px]">
            <Button
              className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 text-white font-bold tracking-wide h-9 px-4 sm:px-6 shadow-sm transition-transform active:scale-95"
            >
              Accept Task
            </Button>
          </Link>

          <Link href="/chat" className="flex-1 min-w-[120px]">
            <Button variant="outline" className="w-full border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-semibold h-9 px-4">
              Message Owner
            </Button>
          </Link>
        </div>


        <div className="flex gap-3">
          <div className="flex items-center gap-0.5">
            <Button
              onClick={handleSave}
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-full transition-colors ${isSaved ? "text-red-500 bg-red-50" : "text-gray-500 hover:text-red-500 hover:bg-red-50"}`}
              title="Save"
            >
              <motion.div
                animate={{ scale: isSaved ? [1, 1.4, 1] : 1 }}
                transition={{ duration: 0.2 }}
              >
                <Heart className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
              </motion.div>
            </Button>
            <span className="text-xs font-semibold text-gray-500">{job.likes || 12}</span>
          </div>

          <div className="flex items-center gap-0.5">
            <Button
              onClick={() => setShowComments(!showComments)}
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-full transition-colors ${showComments ? "text-brand-secondary bg-blue-50" : "text-gray-500 hover:text-brand-secondary hover:bg-blue-50"}`}
              title="Discuss"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
            <span className="text-xs font-semibold text-gray-500">{comments.length}</span>
          </div>

          <div className="flex items-center gap-0.5">
            <Button
              onClick={handleShare}
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-full transition-colors"
              title="Share"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <span className="text-xs font-semibold text-gray-500">{job.shares || 4}</span>
          </div>
        </div>
      </div>

      {/* 5. Comments Section (Collapsible) */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-border/60 bg-gray-50 dark:bg-black/20 overflow-hidden"
          >
            <div className="p-4 space-y-4">
              {/* Comments List */}
              <div className="space-y-3">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-2.5">
                    <Avatar className="w-7 h-7">
                      <AvatarFallback className="text-[10px] font-bold bg-brand-primary/10 text-brand-primary">{comment.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="bg-white dark:bg-card p-2.5 rounded-2xl rounded-tl-sm shadow-sm border border-border/40 text-sm">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-gray-900 dark:text-gray-100 text-xs">{comment.user}</span>
                        <span className="text-[10px] text-gray-400">{comment.time}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-snug">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 pt-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gray-200"><User className="w-4 h-4 text-gray-500" /></AvatarFallback>
                </Avatar>
                <div className="flex-1 relative">
                  <Input
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && postComment()}
                    placeholder="Ask a question..."
                    className="bg-white dark:bg-card border-none shadow-sm pr-10 focus-visible:ring-1 focus-visible:ring-brand-primary"
                  />
                  <button
                    onClick={postComment}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-primary hover:text-brand-primary-dark transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
