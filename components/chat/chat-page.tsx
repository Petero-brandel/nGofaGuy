"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Send,
  Phone,
  Video,
  ArrowLeft,
  Smile,
  Check,
  CheckCheck,
  Plus,
  X,
  MoreHorizontal,
  Edit,
  Trash2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "sonner" // Assuming toast is available from sonner

interface Conversation {
  id: string
  name: string
  avatar: string // This should be an empty string if no image
  lastMessage: string
  timestamp: string
  unreadCount: number
  isOnline: boolean
  subtitle: string
}

interface Message {
  id: string
  content: string
  timestamp: string
  isOwn: boolean
  status: "sent" | "delivered" | "read"
}

// Helper function to generate initials from full name
const getInitials = (name: string): string => {
  if (!name || typeof name !== "string") {
    return "?"
  }

  const parts = name.trim().split(/\s+/) // Split by one or more whitespace characters
  if (parts.length === 0) {
    return "?"
  }

  const initials = parts
    .filter((word) => word.length > 0) // Ensure no empty strings from multiple spaces
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2) // Take up to the first two initials

  return initials || "?" // Return '?' if initials are still empty (e.g., name was just spaces)
}

const initialConversations: Conversation[] = [
  {
    id: "1",
    name: "Williams Adebayo",
    avatar: "", // Explicitly empty to trigger fallback
    lastMessage: "Perfect, appreciate it!",
    timestamp: "4:47PM",
    unreadCount: 0,
    isOnline: true,
    subtitle: "Campus task • Boys Hostel - Chidubere",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    avatar: "", // Empty to show initials
    lastMessage: "I can help with your grocery run! 🛒",
    timestamp: "2:30PM",
    unreadCount: 2,
    isOnline: true,
    subtitle: "Grocery Shopping • University of Lagos",
  },
  {
    id: "3",
    name: "Mike Chen",
    avatar: "", // Empty to show initials
    lastMessage: "Task completed! Thanks for the tip",
    timestamp: "1:15PM",
    unreadCount: 0,
    isOnline: false,
    subtitle: "Food Delivery • Campus Store",
  },
  {
    id: "4",
    name: "Emma Wilson",
    avatar: "", // Empty to show initials
    lastMessage: "When do you need this done?",
    timestamp: "Yesterday",
    unreadCount: 1,
    isOnline: false,
    subtitle: "Library Books • Main Campus",
  },
  {
    id: "5",
    name: "SingleName",
    avatar: "", // Test single name
    lastMessage: "Hello!",
    timestamp: "Yesterday",
    unreadCount: 0,
    isOnline: true,
    subtitle: "Test",
  },
  {
    id: "6",
    name: "  ", // Test empty/whitespace name
    avatar: "",
    lastMessage: "Test",
    timestamp: "Yesterday",
    unreadCount: 0,
    isOnline: false,
    subtitle: "Test",
  },
  {
    id: "7",
    name: "A", // Test single letter name
    avatar: "",
    lastMessage: "Test",
    timestamp: "Yesterday",
    unreadCount: 0,
    isOnline: true,
    subtitle: "Test",
  },
  {
    id: "8",
    name: "John P. Smith", // Test middle initial
    avatar: "",
    lastMessage: "Test",
    timestamp: "Yesterday",
    unreadCount: 0,
    isOnline: false,
    subtitle: "Test",
  },
  {
    id: "9",
    name: "Existing User",
    avatar: "/placeholder.svg?height=40&width=40&text=EU", // Test with an actual image URL
    lastMessage: "This should show an image!",
    timestamp: "Now",
    unreadCount: 0,
    isOnline: true,
    subtitle: "Image Test",
  },
]

const initialMessages: Message[] = [
  { id: "1", content: "Hello!", timestamp: "10:00 AM", isOwn: false, status: "read" },
  { id: "2", content: "Hi there!", timestamp: "9:30 AM", isOwn: true, status: "sent" },
  { id: "3", content: "How are you doing today?", timestamp: "9:31 AM", isOwn: false, status: "read" },
  {
    id: "4",
    content: "I'm great, thanks! Just working on some tasks.",
    timestamp: "9:32 AM",
    isOwn: true,
    status: "delivered",
  },
  {
    id: "5",
    content: "That's good to hear! Let me know if you need any help.",
    timestamp: "9:35 AM",
    isOwn: false,
    status: "read",
  },
]

export function ChatPage() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [selectedChat, setSelectedChat] = useState<string | null>("1")
  const [messageInput, setMessageInput] = useState("")
  const [showChatList, setShowChatList] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const [editingMessageContent, setEditingMessageContent] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const emojiCategories = {
    Smileys: [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😊",
      "😇",
      "🙂",
      "🙃",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
      "😗",
      "😙",
      "😚",
      "😋",
      "😛",
      "😝",
      "😜",
      "🤪",
      "🤨",
      "🧐",
      "🤓",
      "😎",
      "🤩",
      "🥳",
    ],
    Gestures: [
      "👍",
      "👎",
      "👌",
      "🤌",
      "🤏",
      "✌️",
      "🤞",
      "🤟",
      "🤘",
      "🤙",
      "👈",
      "👉",
      "👆",
      "🖕",
      "👇",
      "☝️",
      "👏",
      "🙌",
      "👐",
      "🤲",
      "🤝",
      "🙏",
      "✊",
      "👊",
      "🤛",
      "🤜",
    ],
    Hearts: [
      "❤️",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🖤",
      "🤍",
      "🤎",
      "💔",
      "❣️",
      "💕",
      "💞",
      "💓",
      "💗",
      "💖",
      "💘",
      "💝",
      "💟",
    ],
    Objects: [
      "📱",
      "💻",
      "⌨️",
      "🖥️",
      "🖨️",
      "🖱️",
      "💾",
      "💿",
      "📀",
      "🎮",
      "🕹️",
      "📷",
      "📸",
      "📹",
      "🎥",
      "📞",
      "☎️",
      "📟",
      "📠",
      "📺",
      "📻",
      "🎙️",
      "🎚️",
      "🎛️",
      "⏰",
      "⏲️",
      "⏱️",
      "🕰️",
      "📡",
    ],
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showEmojiPicker && !(event.target as Element).closest(".emoji-picker-container")) {
        setShowEmojiPicker(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showEmojiPicker])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Filter conversations based on search query
  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.subtitle.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        id: String(messages.length + 1),
        content: messageInput.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
        status: "sent",
      }
      setMessages((prev) => [...prev, newMessage])
      setMessageInput("")
      toast.success("Message sent!")
    }
  }

  const insertEmoji = (emoji: string) => {
    setMessageInput((prev) => prev + emoji)
    setShowEmojiPicker(false)
  }

  const handleEditMessage = (messageId: string, currentContent: string) => {
    setEditingMessageId(messageId)
    setEditingMessageContent(currentContent)
  }

  const handleSaveEdit = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              content: editingMessageContent,
              timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " (edited)",
            }
          : msg,
      ),
    )
    setEditingMessageId(null)
    setEditingMessageContent("")
    toast.info("Message edited!")
  }

  const handleDeleteMessage = (messageId: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== messageId))
    toast.error("Message deleted!")
  }

  const handleEditConversation = (conversationId: string) => {
    const conversationToEdit = conversations.find((c) => c.id === conversationId)
    if (conversationToEdit) {
      const newName = prompt(`Edit name for ${conversationToEdit.name}:`, conversationToEdit.name)
      if (newName && newName.trim() !== "") {
        setConversations((prev) => prev.map((c) => (c.id === conversationId ? { ...c, name: newName.trim() } : c)))
        toast.info(`Conversation with ${newName.trim()} updated!`)
      }
    }
  }

  const handleDeleteConversation = (conversationId: string) => {
    if (window.confirm("Are you sure you want to delete this conversation?")) {
      setConversations((prev) => prev.filter((c) => c.id !== conversationId))
      if (selectedChat === conversationId) {
        setSelectedChat(null) // Deselect if the current chat is deleted
      }
      toast.error("Conversation deleted!")
    }
  }

  const selectedConversation = conversations.find((c) => c.id === selectedChat)

  return (
    <div className="h-screen bg-gray-50/30 flex">
      {/* Chat List Sidebar - Desktop Only */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden lg:flex w-96 bg-white/80 backdrop-blur-xl border-r border-gray-100/50 flex-col shadow-sm"
      >
        {/* Header */}
        <div className="px-8 py-8 border-b border-gray-50/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Messages</h1>
              <p className="text-sm text-gray-500 mt-1 font-medium">{filteredConversations.length} conversations</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="w-11 h-11 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 text-gray-600 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <Plus className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Search */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors duration-200 group-focus-within:text-gray-600" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 h-12 bg-gray-50/80 border-0 focus:bg-white/90 focus:ring-2 focus:ring-blue-500/20 focus:border-transparent rounded-2xl transition-all duration-300 text-gray-900 placeholder:text-gray-400 shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100/80 rounded-lg transition-all duration-200"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <AnimatePresence>
            {filteredConversations.map((conversation, index) => (
              <motion.div
                key={conversation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedChat(conversation.id)}
                className={`mx-2 mb-3 p-5 cursor-pointer rounded-2xl transition-all duration-300 group relative ${
                  selectedChat === conversation.id
                    ? "bg-blue-50/80 shadow-md border border-blue-100/50"
                    : "hover:bg-gray-50/80 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <Avatar className="w-14 h-14 ring-2 ring-white shadow-sm">
                      <AvatarImage src={conversation.avatar || undefined} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 font-semibold text-sm">
                        {getInitials(conversation.name)}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.isOnline && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-3 border-white rounded-full shadow-sm"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 truncate text-base tracking-tight">
                        {conversation.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500 font-medium">{conversation.timestamp}</span>
                        {conversation.unreadCount > 0 && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm"
                          >
                            {conversation.unreadCount}
                          </motion.div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 truncate mb-3 font-medium leading-relaxed">
                      {conversation.subtitle}
                    </p>
                    <p className="text-sm text-gray-700 truncate leading-relaxed">{conversation.lastMessage}</p>
                  </div>
                </div>
                {/* Conversation Options */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      onClick={(e) => e.stopPropagation()} // Prevent selecting conversation when opening menu
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem onClick={() => handleEditConversation(conversation.id)}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDeleteConversation(conversation.id)}
                      className="text-red-600 focus:text-red-600"
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            ))}
          </AnimatePresence>

          {searchQuery && filteredConversations.length === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-100/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">No conversations found</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Try searching with different keywords</p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Mobile Chat List */}
      <AnimatePresence>
        {showChatList && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden absolute inset-0 bg-white/95 backdrop-blur-xl z-50 flex flex-col"
          >
            <div className="px-6 py-8 border-b border-gray-50">
              <h1 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Messages</h1>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-gray-600 transition-colors duration-200" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 h-12 bg-gray-50 border-0 focus:bg-white focus:ring-2 focus:ring-blue-500/20 rounded-2xl transition-all duration-300"
                />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-400 hover:text-gray-600 rounded-lg"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2">
              {filteredConversations.map((conversation, index) => (
                <motion.div
                  key={conversation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedChat(conversation.id)
                    setShowChatList(false)
                  }}
                  className="mx-2 mb-3 p-5 rounded-2xl hover:bg-gray-50 transition-all duration-200 relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="w-14 h-14 ring-2 ring-white shadow-sm">
                        <AvatarImage src={conversation.avatar || undefined} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 font-semibold">
                          {getInitials(conversation.name)}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-3 border-white rounded-full" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 tracking-tight">{conversation.name}</h3>
                        <span className="text-sm text-gray-500 font-medium">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate mb-2 font-medium">{conversation.subtitle}</p>
                      <p className="text-sm text-gray-700 truncate">{conversation.lastMessage}</p>
                    </div>
                  </div>
                  {/* Conversation Options (Mobile) */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 w-8 h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100/80"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem onClick={() => handleEditConversation(conversation.id)}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteConversation(conversation.id)}
                        className="text-red-600 focus:text-red-600"
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white/90 backdrop-blur-xl">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-xl border-b border-gray-50/80 px-6 py-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden w-10 h-10 rounded-xl hover:bg-gray-100/80 transition-all duration-200"
                      onClick={() => setShowChatList(true)}
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                  </motion.div>

                  <div className="text-center lg:text-left">
                    <h2 className="font-bold text-gray-900 text-lg tracking-tight">{selectedConversation.name}</h2>
                    <p className="text-sm text-gray-500 font-medium mt-1">{selectedConversation.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-11 h-11 rounded-xl text-gray-500 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200"
                    >
                      <Phone className="w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-11 h-11 rounded-xl text-gray-500 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200"
                    >
                      <Video className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`flex group ${msg.isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-sm lg:max-w-md relative">
                    {editingMessageId === msg.id ? (
                      <div className="flex items-center gap-2">
                        <Input
                          value={editingMessageContent}
                          onChange={(e) => setEditingMessageContent(e.target.value)}
                          onKeyPress={(e) => e.key === "Enter" && handleSaveEdit(msg.id)}
                          className="px-4 py-2 rounded-xl border-2 border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        />
                        <Button onClick={() => handleSaveEdit(msg.id)} size="sm">
                          Save
                        </Button>
                        <Button onClick={() => setEditingMessageId(null)} variant="ghost" size="sm">
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`px-5 py-3 rounded-3xl shadow-sm ${
                          msg.isOwn
                            ? "bg-blue-500 text-white rounded-br-lg shadow-blue-500/20"
                            : "bg-gray-100/80 text-gray-900 rounded-bl-lg backdrop-blur-sm"
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{msg.content}</p>
                      </motion.div>
                    )}

                    <div className={`flex items-center gap-2 mt-2 px-2 ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                      <span className="text-xs text-gray-500 font-medium">{msg.timestamp}</span>
                      {msg.isOwn && (
                        <div className="text-gray-400">
                          {msg.status === "sent" && <Check className="w-3 h-3" />}
                          {msg.status === "delivered" && <CheckCheck className="w-3 h-3" />}
                          {msg.status === "read" && <CheckCheck className="w-3 h-3 text-blue-500" />}
                        </div>
                      )}
                    </div>
                    {/* Message Options */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100/80 transition-opacity duration-200 ${
                            msg.isOwn
                              ? "-left-10 opacity-0 group-hover:opacity-100"
                              : "-right-10 opacity-0 group-hover:opacity-100"
                          }`}
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align={msg.isOwn ? "end" : "start"} className="w-40">
                        <DropdownMenuItem onClick={() => handleEditMessage(msg.id, msg.content)}>
                          <Edit className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="text-red-600 focus:text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} /> {/* Scroll to bottom */}
            </div>

            {/* Message Input */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl border-t border-gray-50/80 px-6 py-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                {" "}
                {/* Adjusted gap */}
                <div className="flex-1 relative">
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Message..."
                    className="bg-gray-50/80 border-0 rounded-3xl px-6 py-4 h-12 focus:ring-2 focus:ring-blue-500/20 focus:bg-white/90 transition-all duration-300 text-gray-900 placeholder:text-gray-400 shadow-sm hover:shadow-md focus:shadow-lg backdrop-blur-sm"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                </div>
                {/* Emoji Button - Always Visible */}
                <div className="relative">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className={`w-12 h-12 rounded-full transition-all duration-200 ${
                        showEmojiPicker
                          ? "text-blue-600 bg-blue-50/80"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/80"
                      }`}
                    >
                      <Smile className="w-5 h-5" />
                    </Button>
                  </motion.div>

                  {/* Emoji Picker */}
                  <AnimatePresence>
                    {showEmojiPicker && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="emoji-picker-container absolute bottom-16 right-0 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 p-4 z-50"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-900">Emojis</h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => setShowEmojiPicker(false)}
                              className="w-8 h-8 rounded-lg text-gray-400 hover:text-gray-600"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="max-h-64 overflow-y-auto">
                            {Object.entries(emojiCategories).map(([category, emojis]) => (
                              <div key={category} className="mb-4">
                                <h4 className="text-xs font-medium text-gray-500 mb-2 px-1">{category}</h4>
                                <div className="grid grid-cols-8 gap-1">
                                  {emojis.map((emoji, index) => (
                                    <motion.button
                                      key={`${category}-${index}`}
                                      whileHover={{ scale: 1.2 }}
                                      whileTap={{ scale: 0.9 }}
                                      onClick={() => insertEmoji(emoji)}
                                      className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100/80 rounded-lg transition-all duration-150"
                                    >
                                      {emoji}
                                    </motion.button>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* Send Button - Enabled when messageInput is not empty */}
                <motion.div
                  key="send-button"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim()} // Disable if input is empty
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="text-center max-w-sm">
              <div className="w-20 h-20 bg-gray-100/80 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Send className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Select a conversation</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                Choose a conversation to start messaging with campus runners
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
