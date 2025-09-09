"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Edit3,
  Star,
  CheckCircle,
  MapPin,
  Calendar,
  Mail,
  Phone,
  University,
  BookOpen,
  Award,
  Users,
  Copy,
  Share2,
  Camera,
  Settings,
  Moon,
  Shield,
  Bell,
  Lock,
  ChevronRight,
  MoreHorizontal,
  MessageCircle,
  Flag,
  Heart,
  Clock,
} from "lucide-react";
import { useTheme } from 'next-themes';
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { Modal } from "@/components/ui/modal";
import { ToastContainer } from "@/components/ui/toast";
import { Switch } from "@/components/ui/switch";
import { Header } from "@/components/explore-page/exp-header"

export default function ProfilePage() {
  // All hooks must be called unconditionally at the top
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isOwnProfile, setIsOwnProfile] = useState(true);
  const [showThemeSettings, setShowThemeSettings] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  const [showSecuritySettings, setShowSecuritySettings] = useState(false);
  
  const { theme, setTheme, resolvedTheme: contextResolvedTheme } = useTheme();
  const resolvedTheme: "light" | "dark" = contextResolvedTheme || "light";
  
  const { toast, toasts } = useToast();
  
  const [notificationSettings, setNotificationSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    taskUpdates: true,
    messageNotifications: true,
    marketingEmails: false,
    weeklyDigest: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    showEmail: false,
    showPhone: false,
    showOnlineStatus: true,
    allowMessages: true,
    showActivity: true,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // // Now we can safely check for loading state
  // if (!mounted) {
  //   return (
  //     // <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20 flex items-center justify-center">
  //     //   <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1657FB]"></div>
  //     // </div>
  //   );
  // }

  // User profile data
  const userProfile = {
    firstName: "Alex",
    lastName: "Johnson",
    username: "@alexjohnson",
    email: "alex.johnson@unilag.edu.ng",
    phone: "+234 801 234 5678",
    dateOfBirth: "May 15, 1999",
    university: "University of Lagos",
    course: "Computer Science",
    year: "3rd Year",
    bio: "Passionate computer science student always ready to help fellow students with their tasks and errands. I love connecting with people and making campus life easier for everyone!",
    location: "Lagos, Nigeria",
    joinDate: "January 2024",
    walletId: "GFA-ALX-2024-789456",
    isVerified: true,
    isOnline: true,
    lastSeen: "2 minutes ago",
  };

  const userStats = {
    tasksCompleted: 47,
    tasksPosted: 12,
    rating: 4.8,
    totalReviews: 23,
    responseTime: "< 2 hours",
    successRate: 96,
    followers: 156,
    following: 89,
  };

  const recentReviews = [
    {
      id: 1,
      reviewer: "Sarah M.",
      rating: 5,
      comment: "Alex was super helpful and delivered my lunch right on time. Highly recommend!",
      date: "2 days ago",
      task: "Lunch delivery",
    },
    {
      id: 2,
      reviewer: "David K.",
      rating: 5,
      comment: "Very reliable and professional. Got my textbooks exactly as requested.",
      date: "1 week ago",
      task: "Textbook purchase",
    },
    {
      id: 3,
      reviewer: "Emma L.",
      rating: 4,
      comment: "Good service, though took a bit longer than expected. Overall satisfied.",
      date: "2 weeks ago",
      task: "Library return",
    },
  ];

  const completedTasks = [
    {
      id: 1,
      title: "Deliver lunch to Moremi Hall",
      category: "Delivery",
      amount: 150,
      date: "2 days ago",
      rating: 5,
    },
    {
      id: 2,
      title: "Buy textbooks from bookstore",
      category: "Shopping",
      amount: 200,
      date: "1 week ago",
      rating: 5,
    },
    {
      id: 3,
      title: "Return library books",
      category: "Errands",
      amount: 50,
      date: "2 weeks ago",
      rating: 4,
    },
  ];

  const achievements = [
    {
      title: "Fast Responder",
      description: "Responds within 1 hour",
      icon: Clock,
      earned: true,
    },
    {
      title: "Top Rated",
      description: "Maintains 4.8+ rating",
      icon: Star,
      earned: true,
    },
    {
      title: "Reliable Runner",
      description: "Complete 50 tasks",
      icon: Award,
      earned: false,
    },
    {
      title: "Campus Hero",
      description: "Help 100 students",
      icon: Users,
      earned: false,
    },
  ];

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
        type: "success",
      });
    } catch (error) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        toast({
          title: "Copied!",
          description: `${label} copied to clipboard`,
          type: "success",
        });
      } catch (fallbackError) {
        toast({
          title: "Copy Failed",
          description: "Unable to copy to clipboard",
          type: "error",
        });
      }
      document.body.removeChild(textArea);
    }
  };

  const shareProfile = async () => {
    const profileUrl = `https://gofaguy.com/profile/${userProfile.username}`;
    const shareData = {
      title: `${userProfile.firstName} ${userProfile.lastName} - GofaGuy`,
      text: `Check out ${userProfile.firstName}'s profile on GofaGuy`,
      url: profileUrl,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        toast({
          title: "Shared!",
          description: "Profile shared successfully",
          type: "success",
        });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          copyToClipboard(profileUrl, "Profile link");
        }
      }
    } else {
      copyToClipboard(profileUrl, "Profile link");
    }
  };

  return (
    
    <div
      className={`min-h-screen transition-all duration-500 ${
        resolvedTheme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20"
      }`}
    >
        <Header />
      {/* Toast Container */}
      <ToastContainer toasts={toasts} onRemove={(id) => {}} />

      {/* Header */}
      <div
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-all duration-300 ${
          resolvedTheme === "dark"
            ? "bg-gray-900/80 border-gray-700/50"
            : "bg-white/80 border-gray-200/30 shadow-sm"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/explore">
              <button
                className={`p-2 rounded-xl transition-colors ${
                  resolvedTheme === "dark"
                    ? "text-white hover:bg-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </Link>

            <div>
              <h1
                className={`text-xl font-bold ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Hi, Alex
              </h1>
              <p
                className={`text-sm ${
                  resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {userProfile.username}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareProfile}
              className={`p-2 rounded-xl transition-all duration-200 ${
                resolvedTheme === "dark"
                  ? "bg-[#1657FB]/20 text-[#1657FB] hover:bg-[#1657FB]/30"
                  : "bg-[#1657FB]/10 text-[#1657FB] hover:bg-[#1657FB]/20 shadow-sm"
              }`}
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
            {isOwnProfile && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSettings(true)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  resolvedTheme === "dark"
                    ? "bg-[#1657FB]/20 text-[#1657FB] hover:bg-[#1657FB]/30"
                    : "bg-[#1657FB]/10 text-[#1657FB] hover:bg-[#1657FB]/20 shadow-sm"
                }`}
              >
                <Settings className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative overflow-hidden rounded-2xl backdrop-blur-xl border shadow-xl transition-all duration-300 ${
            resolvedTheme === "dark"
              ? "bg-gray-800/60 border-gray-700/50"
              : "bg-white/70 border-white/50 shadow-lg"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              resolvedTheme === "dark"
                ? "bg-gradient-to-br from-[#1657FB]/10 to-[#0033CD]/10"
                : "bg-gradient-to-br from-[#1657FB]/5 to-[#0033CD]/5"
            }`}
          />
          <div className="relative p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#1657FB] to-[#0033CD] p-1 shadow-lg">
                  <div
                    className={`w-full h-full rounded-2xl flex items-center justify-center ${
                      resolvedTheme === "dark" ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <Image
                      src="/placeholder.svg?height=120&width=120&text=Alex"
                      alt="Profile"
                      width={120}
                      height={120}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Camera Button (only for own profile) */}
                {isOwnProfile && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-2 right-2 w-8 h-8 bg-[#1657FB] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Camera className="w-4 h-4" />
                  </motion.button>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                  <h2
                    className={`text-3xl font-bold ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {userProfile.firstName} {userProfile.lastName}
                  </h2>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-[#1FF3A5] fill-current" />
                    <span
                      className={`font-semibold ${
                        resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {userStats.rating}
                    </span>
                    <span
                      className={`text-sm ${
                        resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      ({userStats.totalReviews})
                    </span>
                  </div>
                </div>

                <p
                  className={`mb-2 ${
                    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {userProfile.username}
                </p>

                <p
                  className={`mb-3 ${
                    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {userProfile.course} • {userProfile.year}
                </p>

                <p
                  className={`mb-4 flex items-center gap-2 justify-center md:justify-start ${
                    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  {userProfile.university}, {userProfile.location}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                  <div className="w-2 h-2 bg-[#1FF3A5] rounded-full animate-pulse" />
                  <span
                    className={`text-sm ${
                      resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {userProfile.isOnline ? "Online now" : `Last seen ${userProfile.lastSeen}`}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 justify-center md:justify-start">
                  <div className="text-center">
                    <p
                      className={`text-xl font-bold ${
                        resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {userStats.tasksCompleted}
                    </p>
                    <p
                      className={`text-sm ${
                        resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Completed
                    </p>
                  </div>
                  <div className="text-center">
                    <p
                      className={`text-xl font-bold ${
                        resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {userStats.successRate}%
                    </p>
                    <p
                      className={`text-sm ${
                        resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Success Rate
                    </p>
                  </div>
                  <div className="text-center">
                    <p
                      className={`text-xl font-bold ${
                        resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {userStats.followers}
                    </p>
                    <p
                      className={`text-sm ${
                        resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Followers
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {isOwnProfile ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowEditProfile(true)}
                    className="px-6 py-3 bg-[#1657FB] text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit Profile
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-[#1657FB] text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 border transition-all duration-200 ${
                        resolvedTheme === "dark"
                          ? "border-gray-600 text-gray-300 hover:bg-gray-700/50"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm"
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                      Follow
                    </motion.button>
                  </>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl border transition-all duration-200 ${
                    resolvedTheme === "dark"
                      ? "border-gray-600 text-gray-300 hover:bg-gray-700/50"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <MoreHorizontal className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div
          className={`backdrop-blur-xl border rounded-xl p-2 shadow-lg transition-all duration-300 ${
            resolvedTheme === "dark"
              ? "bg-gray-800/60 border-gray-700/50"
              : "bg-white/70 border-white/50"
          }`}
        >
          <div className="flex gap-2 overflow-x-auto">
            {[
              { id: "about", label: "About" },
              { id: "reviews", label: "Reviews" },
              { id: "tasks", label: "Tasks" },
              { id: "achievements", label: "Achievements" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#1657FB] text-white shadow-lg"
                    : resolvedTheme === "dark"
                    ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                    : "text-gray-600 hover:text-[#1657FB] hover:bg-gray-100/50"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Bio */}
              <div
                className={`backdrop-blur-xl border rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50"
                    : "bg-white/70 border-white/50"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  About
                </h3>
                <p
                  className={`leading-relaxed ${
                    resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {userProfile.bio}
                </p>
              </div>

              {/* Personal Information */}
              <div
                className={`backdrop-blur-xl border rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50"
                    : "bg-white/70 border-white/50"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: userProfile.email,
                      copyable: true,
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: userProfile.phone,
                      copyable: true,
                    },
                    {
                      icon: Calendar,
                      label: "Date of Birth",
                      value: userProfile.dateOfBirth,
                    },
                    {
                      icon: University,
                      label: "University",
                      value: userProfile.university,
                    },
                    {
                      icon: BookOpen,
                      label: "Course",
                      value: userProfile.course,
                    },
                    {
                      icon: Calendar,
                      label: "Joined",
                      value: userProfile.joinDate,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          resolvedTheme === "dark"
                            ? "bg-gray-700/50"
                            : "bg-[#1657FB]/10"
                        }`}
                      >
                        <item.icon
                          className={`w-5 h-5 ${
                            resolvedTheme === "dark" ? "text-gray-300" : "text-[#1657FB]"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <p
                          className={`text-sm ${
                            resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {item.label}
                        </p>
                        <div className="flex items-center gap-2">
                          <p
                            className={`font-semibold ${
                              resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.value}
                          </p>
                          {item.copyable && (
                            <button
                              onClick={() => copyToClipboard(item.value, item.label)}
                              className={`p-1 rounded transition-colors ${
                                resolvedTheme === "dark"
                                  ? "hover:bg-gray-700"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wallet ID (only for own profile) */}
              {isOwnProfile && (
                <div
                  className={`backdrop-blur-xl border rounded-xl p-6 shadow-lg transition-all duration-300 ${
                    resolvedTheme === "dark"
                      ? "bg-gray-800/60 border-gray-700/50"
                      : "bg-white/70 border-white/50"
                  }`}
                >
                  <h3
                    className={`text-lg font-bold mb-4 ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    GofaGuy Wallet ID
                  </h3>
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg border transition-colors ${
                      resolvedTheme === "dark"
                        ? "bg-gray-700/50 border-gray-600"
                        : "bg-gray-50/50 border-gray-200"
                    }`}
                  >
                    <code
                      className={`flex-1 text-sm font-mono ${
                        resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {userProfile.walletId}
                    </code>
                    <button
                      onClick={() => copyToClipboard(userProfile.walletId, "Wallet ID")}
                      className="p-2 bg-[#1657FB] text-white rounded-lg hover:bg-[#1657FB]/90 transition-colors shadow-sm"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div
                className={`backdrop-blur-xl border rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50"
                    : "bg-white/70 border-white/50"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className={`text-lg font-bold ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Reviews ({userStats.totalReviews})
                  </h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-[#1FF3A5] fill-current" />
                    <span
                      className={`font-bold ${
                        resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {userStats.rating}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {recentReviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        resolvedTheme === "dark"
                          ? "bg-gray-700/40 border-gray-600/50"
                          : "bg-white/40 border-white/30 shadow-sm"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#1657FB] to-[#0033CD] rounded-full flex items-center justify-center text-white font-bold shadow-sm">
                          {review.reviewer.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <p
                              className={`font-semibold ${
                                resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {review.reviewer}
                            </p>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-[#1FF3A5] fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span
                              className={`text-sm ${
                                resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              • {review.date}
                            </span>
                          </div>
                          <p
                            className={`mb-2 ${
                              resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {review.comment}
                          </p>
                          <p
                            className={`text-sm font-medium ${
                              resolvedTheme === "dark" ? "text-[#1657FB]" : "text-[#1657FB]"
                            }`}
                          >
                            Task: {review.task}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "tasks" && (
            <motion.div
              key="tasks"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div
                className={`backdrop-blur-xl border rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50"
                    : "bg-white/70 border-white/50"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-6 ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Completed Tasks ({userStats.tasksCompleted})
                </h3>

                <div className="space-y-4">
                  {completedTasks.map((task, index) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                        resolvedTheme === "dark"
                          ? "bg-gray-700/40 border-gray-600/50"
                          : "bg-white/40 border-white/30 shadow-sm"
                      }`}
                    >
                      <div className="w-12 h-12 bg-[#1FF3A5]/20 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-[#1FF3A5]" />
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-semibold ${
                            resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {task.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              resolvedTheme === "dark"
                                ? "bg-gray-600 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {task.category}
                          </span>
                          <span
                            className={`text-sm ${
                              resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {task.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < task.rating
                                  ? "text-[#1FF3A5] fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-bold ${
                            resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          ₦{task.amount}
                        </p>
                        <p className="text-sm text-[#1FF3A5]">Completed</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div
                className={`backdrop-blur-xl border rounded-xl p-6 shadow-lg transition-all duration-300 ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800/60 border-gray-700/50"
                    : "bg-white/70 border-white/50"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-6 ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Achievements
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        achievement.earned
                          ? resolvedTheme === "dark"
                            ? "bg-[#1FF3A5]/10 border-[#1FF3A5]/20"
                            : "bg-[#1FF3A5]/10 border-[#1FF3A5]/20 shadow-sm"
                          : resolvedTheme === "dark"
                          ? "bg-gray-700/40 border-gray-600/50"
                          : "bg-gray-50/50 border-gray-200/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            achievement.earned
                              ? "bg-[#1FF3A5]/20 text-[#1FF3A5]"
                              : resolvedTheme === "dark"
                              ? "bg-gray-600 text-gray-400"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          <achievement.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p
                            className={`font-semibold ${
                              achievement.earned
                                ? resolvedTheme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                                : resolvedTheme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            {achievement.title}
                          </p>
                          <p
                            className={`text-sm ${
                              achievement.earned
                                ? resolvedTheme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-700"
                                : resolvedTheme === "dark"
                                ? "text-gray-500"
                                : "text-gray-400"
                            }`}
                          >
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.earned && (
                          <CheckCircle className="w-5 h-5 text-[#1FF3A5] ml-auto" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Report Button (only for other users) */}
        {!isOwnProfile && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center justify-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
              resolvedTheme === "dark"
                ? "border-red-800 text-red-400 hover:bg-red-900/20"
                : "border-red-200 text-red-600 hover:bg-red-50 shadow-sm"
            }`}
          >
            <Flag className="w-4 h-4" />
            Report User
          </motion.button>
        )}
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={showEditProfile}
        onClose={() => setShowEditProfile(false)}
        title="Edit Profile"
        size="lg"
      >
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                First Name
              </label>
              <input
                type="text"
                defaultValue={userProfile.firstName}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white focus:border-[#1657FB]"
                    : "bg-white border-gray-300 text-gray-900 focus:border-[#1657FB]"
                } focus:outline-none focus:ring-2 focus:ring-[#1657FB]/20`}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Last Name
              </label>
              <input
                type="text"
                defaultValue={userProfile.lastName}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white focus:border-[#1657FB]"
                    : "bg-white border-gray-300 text-gray-900 focus:border-[#1657FB]"
                } focus:outline-none focus:ring-2 focus:ring-[#1657FB]/20`}
              />
            </div>
          </div>

          <div>
            <label
              className={`block text-sm font-medium mb-2 ${
                resolvedTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Bio
            </label>
            <textarea
              defaultValue={userProfile.bio}
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                resolvedTheme === "dark"
                  ? "bg-gray-800 border-gray-600 text-white focus:border-[#1657FB]"
                  : "bg-white border-gray-300 text-gray-900 focus:border-[#1657FB]"
              } focus:outline-none focus:ring-2 focus:ring-[#1657FB]/20`}
              placeholder="Tell others about yourself..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                University
              </label>
              <input
                type="text"
                defaultValue={userProfile.university}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white focus:border-[#1657FB]"
                    : "bg-white border-gray-300 text-gray-900 focus:border-[#1657FB]"
                } focus:outline-none focus:ring-2 focus:ring-[#1657FB]/20`}
              />
            </div>
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Course
              </label>
              <input
                type="text"
                defaultValue={userProfile.course}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white focus:border-[#1657FB]"
                    : "bg-white border-gray-300 text-gray-900 focus:border-[#1657FB]"
                } focus:outline-none focus:ring-2 focus:ring-[#1657FB]/20`}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setShowEditProfile(false)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                resolvedTheme === "dark"
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowEditProfile(false);
                toast({
                  title: "Profile Updated",
                  description: "Your profile has been successfully updated",
                  type: "success",
                });
              }}
              className="px-6 py-3 bg-[#1657FB] text-white rounded-lg font-semibold hover:bg-[#1657FB]/90 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>

      {/* Settings Modal */}
      <Modal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        title="Settings"
        size="md"
      >
        <div className="p-6 space-y-4">
          {[
            {
              icon: Moon,
              label: "Theme",
              subtitle: "Appearance settings",
              action: () => setShowThemeSettings(true),
            },
            {
              icon: Bell,
              label: "Notifications",
              subtitle: "Manage notifications",
              action: () => setShowNotificationSettings(true),
            },
            {
              icon: Shield,
              label: "Privacy",
              subtitle: "Privacy settings",
              action: () => setShowPrivacySettings(true),
            },
            {
              icon: Lock,
              label: "Security",
              subtitle: "Security settings",
              action: () => setShowSecuritySettings(true),
            },
          ].map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={item.action}
              className={`w-full flex items-center gap-4 p-4 rounded-xl transition-colors ${
                resolvedTheme === "dark"
                  ? "hover:bg-gray-700/50 text-gray-300"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  resolvedTheme === "dark" ? "bg-gray-700" : "bg-[#1657FB]/10"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    resolvedTheme === "dark" ? "text-gray-300" : "text-[#1657FB]"
                  }`}
                />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm opacity-60">{item.subtitle}</p>
              </div>
              <ChevronRight className="w-5 h-5 opacity-40" />
            </motion.button>
          ))}
        </div>
      </Modal>

{/* Theme Settings Modal */}
<Modal
  isOpen={showThemeSettings}
  onClose={() => setShowThemeSettings(false)}
  title="Theme Settings"
  size="md"
>
  <div className="p-6 space-y-6">
    <div>
      <h3
        className={`text-lg font-semibold mb-4 ${
          resolvedTheme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        Choose Theme
      </h3>

      <div className="space-y-3">
        {[
          {
            value: "light",
            label: "Light",
            description: "Clean and bright interface",
          },
          {
            value: "dark",
            label: "Dark",
            description: "Easy on the eyes in low light",
          },
          {
            value: "system",
            label: "System",
            description: "Follow your device settings",
          },
        ].map((themeOption) => (
          <motion.button
            key={themeOption.value}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setTheme(themeOption.value as Theme)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-colors ${
              theme === themeOption.value
                ? "border-[#1657FB] bg-[#1657FB]/10"
                : resolvedTheme === "dark"
                ? "border-gray-600 hover:bg-gray-700/50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            {/* Radio Circle */}
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                theme === themeOption.value
                  ? "border-[#1657FB]"
                  : "border-gray-300"
              }`}
            >
              {theme === themeOption.value && (
                <div className="w-2 h-2 bg-[#1657FB] rounded-full" />
              )}
            </div>

            {/* Label + Description */}
            <div className="flex-1 text-left">
              <p
                className={`font-semibold ${
                  resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {themeOption.label}
              </p>
              <p
                className={`text-sm ${
                  resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {themeOption.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  </div>
</Modal>


      {/* Notification Settings Modal */}
      <Modal
        isOpen={showNotificationSettings}
        onClose={() => setShowNotificationSettings(false)}
        title="Notification Settings"
        size="md"
      >
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            {[
              {
                key: "pushNotifications",
                label: "Push Notifications",
                description: "Receive notifications on your device",
              },
              {
                key: "emailNotifications",
                label: "Email Notifications",
                description: "Get updates via email",
              },
              {
                key: "taskUpdates",
                label: "Task Updates",
                description: "Notifications about your tasks",
              },
              {
                key: "messageNotifications",
                label: "Messages",
                description: "New message notifications",
              },
              {
                key: "marketingEmails",
                label: "Marketing Emails",
                description: "Promotional content and offers",
              },
              {
                key: "weeklyDigest",
                label: "Weekly Digest",
                description: "Summary of your weekly activity",
              },
            ].map((setting) => (
              <div
                key={setting.key}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-1">
                  <p
                    className={`font-semibold ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {setting.label}
                  </p>
                  <p
                    className={`text-sm ${
                      resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {setting.description}
                  </p>
                </div>
                <Switch
                  checked={
                    notificationSettings[
                      setting.key as keyof typeof notificationSettings
                    ]
                  }
                  onCheckedChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      [setting.key]: checked,
                    }))
                  }
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setShowNotificationSettings(false);
                toast({
                  title: "Settings Saved",
                  description: "Your notification preferences have been updated",
                  type: "success",
                });
              }}
              className="px-6 py-3 bg-[#1657FB] text-white rounded-lg font-semibold hover:bg-[#1657FB]/90 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>

      {/* Privacy Settings Modal */}
      <Modal
        isOpen={showPrivacySettings}
        onClose={() => setShowPrivacySettings(false)}
        title="Privacy Settings"
        size="md"
      >
        <div className="p-6 space-y-6">
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                resolvedTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Profile Visibility
            </h3>
            <div className="space-y-3 mb-6">
              {[
                {
                  value: "public",
                  label: "Public",
                  description: "Anyone can view your profile",
                },
                {
                  value: "friends",
                  label: "Friends Only",
                  description: "Only people you follow can see your profile",
                },
                {
                  value: "private",
                  label: "Private",
                  description: "Only you can see your profile",
                },
              ].map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() =>
                    setPrivacySettings((prev) => ({
                      ...prev,
                      profileVisibility: option.value,
                    }))
                  }
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-colors ${
                    privacySettings.profileVisibility === option.value
                      ? "border-[#1657FB] bg-[#1657FB]/10"
                      : resolvedTheme === "dark"
                      ? "border-gray-600 hover:bg-gray-700/50"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      privacySettings.profileVisibility === option.value
                        ? "border-[#1657FB]"
                        : "border-gray-300"
                    }`}
                  >
                    {privacySettings.profileVisibility === option.value && (
                      <div className="w-2 h-2 bg-[#1657FB] rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className={`font-semibold ${
                        resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {option.label}
                    </p>
                    <p
                      className={`text-sm ${
                        resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {option.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3
              className={`text-lg font-semibold ${
                resolvedTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Information Visibility
            </h3>
            {[
              {
                key: "showEmail",
                label: "Show Email",
                description: "Display email on your profile",
              },
              {
                key: "showPhone",
                label: "Show Phone",
                description: "Display phone number on your profile",
              },
              {
                key: "showOnlineStatus",
                label: "Show Online Status",
                description: "Let others see when you're online",
              },
              {
                key: "allowMessages",
                label: "Allow Messages",
                description: "Let other users message you",
              },
              {
                key: "showActivity",
                label: "Show Activity",
                description: "Display your recent activity",
              },
            ].map((setting) => (
              <div
                key={setting.key}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex-1">
                  <p
                    className={`font-semibold ${
                      resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {setting.label}
                  </p>
                  <p
                    className={`text-sm ${
                      resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {setting.description}
                  </p>
                </div>
                <Switch
                  checked={
                    privacySettings[
                      setting.key as keyof typeof privacySettings
                    ] as boolean
                  }
                  onCheckedChange={(checked) =>
                    setPrivacySettings((prev) => ({
                      ...prev,
                      [setting.key]: checked,
                    }))
                  }
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setShowPrivacySettings(false);
                toast({
                  title: "Privacy Updated",
                  description: "Your privacy settings have been saved",
                  type: "success",
                });
              }}
              className="px-6 py-3 bg-[#1657FB] text-white rounded-lg font-semibold hover:bg-[#1657FB]/90 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>

      {/* Security Settings Modal */}
      <Modal
        isOpen={showSecuritySettings}
        onClose={() => setShowSecuritySettings(false)}
        title="Security Settings"
        size="lg"
      >
        <div className="p-6 space-y-6">
          {/* Change Password */}
          <div className="space-y-4">
            <h3
              className={`text-lg font-semibold ${
                resolvedTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Change Password
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Current Password
                </label>
                <input
                  type="password"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    resolvedTheme === "dark"
                      ? "bg-gray-800 border-gray-600 text-white focus:border-[#1657FB]"
                      : "bg-white border-gray-300 text-gray-900 focus:border-[#1657FB]"
                  } focus:outline-none focus:ring-2 focus:ring-[#1657FB]/20`}
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  New Password
                </label>
                <input
                  type="password"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    resolvedTheme === "dark"
                      ? "bg-gray-800 border-gray-600 text-white focus:border-[#1657FB]"
                      : "bg-white border-gray-300 text-gray-900 focus:border-[#1657FB]"
                  } focus:outline-none focus:ring-2 focus:ring-[#1657FB]/20`}
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    resolvedTheme === "dark"
                      ? "bg-gray-800 border-gray-600 text-white focus:border-[#1657FB]"
                      : "bg-white border-gray-300 text-gray-900 focus:border-[#1657FB]"
                  } focus:outline-none focus:ring-2 focus:ring-[#1657FB]/20`}
                  placeholder="Confirm new password"
                />
              </div>
              <button
                onClick={() => {
                  toast({
                    title: "Password Updated",
                    description: "Your password has been successfully changed",
                    type: "success",
                  });
                }}
                className="w-full px-4 py-3 bg-[#1657FB] text-white rounded-lg font-semibold hover:bg-[#1657FB]/90 transition-colors"
              >
                Update Password
              </button>
            </div>
          </div>

          {/* Two-Factor Authentication */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Two-Factor Authentication
                </h3>
                <p
                  className={`text-sm ${
                    resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch
                checked={false}
                onCheckedChange={(checked) => {
                  if (checked) {
                    toast({
                      title: "2FA Setup",
                      description: "Two-factor authentication setup initiated",
                      type: "info",
                    });
                  } else {
                    toast({
                      title: "2FA Disabled",
                      description: "Two-factor authentication has been disabled",
                      type: "warning",
                    });
                  }
                }}
              />
            </div>
          </div>

          {/* Login Sessions */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3
              className={`text-lg font-semibold mb-4 ${
                resolvedTheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Active Sessions
            </h3>
            <div className="space-y-3">
              {[
                {
                  device: "iPhone 14 Pro",
                  location: "Lagos, Nigeria",
                  current: true,
                  lastActive: "Active now",
                },
                {
                  device: "MacBook Pro",
                  location: "Lagos, Nigeria",
                  current: false,
                  lastActive: "2 hours ago",
                },
                {
                  device: "Chrome Browser",
                  location: "Abuja, Nigeria",
                  current: false,
                  lastActive: "1 day ago",
                },
              ].map((session, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-xl border ${
                    resolvedTheme === "dark"
                      ? "border-gray-600 bg-gray-700/20"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p
                        className={`font-semibold ${
                          resolvedTheme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {session.device}
                      </p>
                      {session.current && (
                        <span className="px-2 py-1 text-xs bg-[#1FF3A5] text-white rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm ${
                        resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {session.location} • {session.lastActive}
                    </p>
                  </div>
                  {!session.current && (
                    <button
                      onClick={() => {
                        toast({
                          title: "Session Terminated",
                          description: `${session.device} session has been ended`,
                          type: "success",
                        });
                      }}
                      className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      End Session
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Account Deletion */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className={`text-lg font-semibold mb-2 text-red-600`}>
              Danger Zone
            </h3>
            <p
              className={`text-sm mb-4 ${
                resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <button
              onClick={() => {
                toast({
                  title: "Account Deletion",
                  description: "Please contact support to delete your account",
                  type: "warning",
                });
              }}
              className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              Delete Account
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}