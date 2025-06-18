"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, Clock, Star, Heart, MessageCircle, Share2 } from "lucide-react"

const posts = [
  {
    id: 1,
    user: {
      name: "Adebayo M.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      verified: true,
    },
    content: "Need someone to pick up my lunch from the cafeteria. I'm stuck in a 3-hour lab session 😭",
    category: "Food Delivery",
    price: "₦800",
    location: "Engineering Block → Hostel B",
    timeAgo: "2 min ago",
    urgency: "urgent",
    tags: ["Quick", "Easy"],
    likes: 12,
    comments: 3,
    gradient: "from-rose-500 via-pink-500 to-red-500",
    bgGradient: "from-rose-50/80 via-pink-50/60 to-red-50/40",
    cardBg: "bg-gradient-to-br from-white via-rose-50/30 to-pink-50/20",
    accentColor: "text-rose-600",
    icon: "🍽️",
  },
  {
    id: 2,
    user: {
      name: "Fatima K.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e3?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      verified: true,
    },
    content:
      "Looking for someone to help me move my stuff from old room to new hostel. Have some boxes and a few bags.",
    category: "Moving Help",
    price: "₦2,500",
    location: "Hostel A → Hostel C",
    timeAgo: "15 min ago",
    urgency: "normal",
    tags: ["Heavy Lifting", "Multiple Items"],
    likes: 8,
    comments: 5,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    bgGradient: "from-blue-50/80 via-indigo-50/60 to-purple-50/40",
    cardBg: "bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20",
    accentColor: "text-blue-600",
    icon: "📦",
  },
  {
    id: 3,
    user: {
      name: "Chidi O.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5.0,
      verified: true,
    },
    content: "Need my laundry picked up and dropped off at the laundromat. Will pay extra for same-day service! 🧺",
    category: "Laundry",
    price: "₦1,200",
    location: "Room 204 → Campus Laundry",
    timeAgo: "32 min ago",
    urgency: "normal",
    tags: ["Same Day", "Pickup & Drop"],
    likes: 15,
    comments: 2,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    bgGradient: "from-violet-50/80 via-purple-50/60 to-fuchsia-50/40",
    cardBg: "bg-gradient-to-br from-white via-violet-50/30 to-purple-50/20",
    accentColor: "text-violet-600",
    icon: "👕",
  },
  {
    id: 4,
    user: {
      name: "Amina S.",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
      rating: 4.7,
      verified: true,
    },
    content: "Can someone help me get groceries from the campus store? I have a detailed shopping list ready 📝",
    category: "Shopping",
    price: "₦1,500",
    location: "Campus Store → Hostel D",
    timeAgo: "1 hour ago",
    urgency: "normal",
    tags: ["Groceries", "List Provided"],
    likes: 6,
    comments: 4,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    bgGradient: "from-emerald-50/80 via-green-50/60 to-teal-50/40",
    cardBg: "bg-gradient-to-br from-white via-emerald-50/30 to-green-50/20",
    accentColor: "text-emerald-600",
    icon: "🛒",
  },
  {
    id: 5,
    user: {
      name: "Kemi A.",
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop&crop=face",
      rating: 4.9,
      verified: true,
    },
    content: "Looking for someone to share a ride to the city center. Split the transport cost 50/50. Leaving at 3 PM.",
    category: "Ride Share",
    price: "₦600",
    location: "Campus Gate → City Center",
    timeAgo: "2 hours ago",
    urgency: "scheduled",
    tags: ["Split Cost", "3 PM"],
    likes: 9,
    comments: 7,
    gradient: "from-cyan-500 via-sky-500 to-blue-500",
    bgGradient: "from-cyan-50/80 via-sky-50/60 to-blue-50/40",
    cardBg: "bg-gradient-to-br from-white via-cyan-50/30 to-sky-50/20",
    accentColor: "text-cyan-600",
    icon: "🚗",
  },
  {
    id: 6,
    user: {
      name: "Ibrahim L.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      verified: true,
    },
    content: "Need someone to help me print and bind my project report. The print shop is across campus 📄",
    category: "Document Service",
    price: "₦1,000",
    location: "Library → Print Shop → Hostel",
    timeAgo: "3 hours ago",
    urgency: "normal",
    tags: ["Printing", "Binding"],
    likes: 4,
    comments: 1,
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    bgGradient: "from-amber-50/80 via-yellow-50/60 to-orange-50/40",
    cardBg: "bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/20",
    accentColor: "text-amber-600",
    icon: "📄",
  },
]

const urgencyColors = {
  urgent: "bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg",
  normal: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg",
  scheduled: "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg",
}

// Create extended posts array for infinite scroll
const extendedPosts = [...posts, ...posts, ...posts]

export function PostExamples() {
  const [isPlaying, setIsPlaying] = useState(true)

  const PostCard = ({ post, index }: { post: (typeof posts)[0]; index: number }) => (
    <motion.div
      className={`flex-shrink-0 w-72 h-[480px] ${post.cardBg} rounded-2xl shadow-xl border border-white/60 backdrop-blur-sm overflow-hidden mx-3 relative`}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Subtle gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${post.bgGradient} opacity-40 pointer-events-none`} />

      {/* Post Header */}
      <div className="relative p-5 border-b border-white/30">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={post.user.avatar || "/placeholder.svg"}
                alt={post.user.name}
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
              {post.user.verified && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">{post.user.name}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-600 font-medium">{post.user.rating}</span>
              </div>
            </div>
          </div>

          <div className={`px-2.5 py-1 rounded-full text-xs font-bold ${urgencyColors[post.urgency]}`}>
            {post.urgency.toUpperCase()}
          </div>
        </div>

        {/* Category Badge */}
        <div className="flex items-center gap-2">
          <span className="text-xl">{post.icon}</span>
          <span
            className={`px-3 py-1.5 bg-gradient-to-r ${post.gradient} text-white rounded-full text-xs font-semibold shadow-lg`}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Post Content */}
      <div className="relative p-5 flex-1 flex flex-col">
        <p className="text-sm text-gray-800 leading-relaxed mb-4 font-medium line-clamp-3">{post.content}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2.5 py-1 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full text-xs font-medium border border-white/50 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Location & Time */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-medium text-xs">{post.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-medium text-xs">{post.timeAgo}</span>
          </div>
        </div>

        {/* Price */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-4 border border-white/60 shadow-sm">
          <div className="text-center">
            <div className={`text-xl font-black ${post.accentColor} mb-1`}>{post.price}</div>
            <div className="text-xs text-gray-600 font-medium">Payment on completion</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`bg-gradient-to-r ${post.gradient} text-white py-2 px-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 text-xs`}
          >
            Accept Task
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/80 backdrop-blur-sm text-gray-700 py-2 px-3 rounded-xl font-bold border border-white/60 hover:bg-white/90 transition-all duration-200 text-xs shadow-sm"
          >
            Message
          </motion.button>
        </div>

        {/* Engagement */}
        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{post.comments}</span>
            </div>
          </div>
          <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-gray-800 transition-colors" />
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/20">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 -left-32 w-64 h-64 bg-gradient-to-br from-primary/6 to-purple-400/4 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-gradient-to-br from-emerald-400/6 to-teal-300/4 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-rose-400/4 to-pink-300/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/8 to-purple-500/8 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/15 backdrop-blur-sm mb-6 shadow-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Live Campus Posts
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-montserrat mb-6 leading-tight">
            Real Students,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-primary">
              Real Requests
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See what students are posting right now on campus. From quick errands to bigger tasks.
          </p>
        </motion.div>

        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: isPlaying ? [0, -300 * posts.length] : 0,
            }}
            transition={{
              x: {
                repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                repeatType: "loop",
                duration: posts.length * 8, // Much slower - 8 seconds per post
                ease: "linear",
              },
            }}
            style={{
              width: `${300 * extendedPosts.length}px`,
            }}
          >
            {extendedPosts.map((post, index) => (
              <PostCard key={`${post.id}-${Math.floor(index / posts.length)}`} post={post} index={index} />
            ))}
          </motion.div>

          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-50 via-white/90 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-50 via-white/90 to-transparent pointer-events-none z-10" />
        </div>

        {/* Enhanced Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
              isPlaying
                ? "bg-gradient-to-r from-primary to-purple-600 text-white hover:from-primary/90 hover:to-purple-600/90 shadow-primary/25"
                : "bg-white/90 backdrop-blur-sm text-gray-700 border border-white/60 hover:bg-white shadow-gray-200/50"
            }`}
          >
            {isPlaying ? "⏸️ Pause Animation" : "▶️ Play Animation"}
          </motion.button>
        </div>

        {/* Enhanced Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/60 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-sm text-gray-600 font-medium">Daily Posts</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  12min
                </div>
                <div className="text-sm text-gray-600 font-medium">Avg Response</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-medium">Active</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
