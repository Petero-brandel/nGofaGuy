"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { LoginForm } from "./login-form"
import { SignupForm } from "./signup-form"
import { GoogleSignInButton } from "./google-signin-button"

const BRAND = {
    primary: "#1657FD",
    primaryDark: "#010411",
    secondary: "#0033CD",
    accent: "#1FF3A5",
}

const features = [
    { icon: Shield, title: "Secure Payments", desc: "Escrow protection" },
    { icon: Users, title: "Verified Community", desc: "Students only" },
    { icon: Zap, title: "Instant Matching", desc: "Find runners fast" },
]

export function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const toggleAuthMode = () => setIsLogin((v) => !v)

    const handleGoogleSignIn = async () => {
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1200))
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen flex bg-[hsl(229,89%,4%)]">
            {/* Left: Form */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-white relative z-10">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-[hsl(230,91%,54%)] hover:text-[hsl(225,100%,40%)] transition mb-8 group"
                        >
                            <span className="p-2 rounded-full bg-[hsl(230,91%,54%)/.08] group-hover:bg-[hsl(230,91%,54%)/.15] transition">
                                <ArrowLeft className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-medium">Back to home</span>
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="mb-6"
                        >
                            <Image
                                src="/logo.svg"
                                alt="GofaGuy Logo"
                                width={80}
                                height={80}
                                className="mx-auto mb-2"
                                priority
                            />
                        </motion.div>
                        <motion.div
                            key={isLogin ? "login" : "signup"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-[hsl(230,91%,54%)] mb-2">
                                {isLogin ? "Welcome back!" : "Join GofaGuy"}
                            </h2>
                            <p className="text-gray-500 text-base">
                                {isLogin
                                    ? "Sign in to your account"
                                    : "Create your account to get started"}
                            </p>
                        </motion.div>
                    </div>

                    {/* Google Sign In */}
                    <GoogleSignInButton onSignIn={handleGoogleSignIn} isLoading={isLoading} />

                    {/* Forms */}
                    <AnimatePresence mode="wait">
                        {isLogin ? (
                            <LoginForm key="login" isLoading={isLoading} setIsLoading={setIsLoading} />
                        ) : (
                            <SignupForm key="signup" isLoading={isLoading} setIsLoading={setIsLoading} />
                        )}
                    </AnimatePresence>

                    {/* Toggle Auth Mode */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-center"
                    >
                        <p className="text-gray-500">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                            <button
                                onClick={toggleAuthMode}
                                className="font-bold text-[hsl(230,91%,54%)] hover:text-[hsl(225,100%,40%)] transition hover:underline"
                                disabled={isLoading}
                            >
                                {isLogin ? "Sign up" : "Sign in"}
                            </button>
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right: Illustration */}
            <div className="hidden lg:flex flex-1 items-center justify-center bg-[hsl(229,89%,4%)] border-l border-[hsl(230,91%,54%)/.08]">
                <div className="relative z-10 flex flex-col justify-center items-center text-white p-12 text-center w-full max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-bold mb-4 leading-tight text-[hsl(230,91%,54%)]">
                            {isLogin ? "Welcome back to GofaGuy!" : "Join the future of campus tasks"}
                        </h3>
                        <p className="text-base text-white/80 mb-8">
                            {isLogin
                                ? "Connect with reliable runners on campus. Your tasks await!"
                                : "Find trusted runners, complete tasks, and earn while building your campus community."}
                        </p>
                        {/* Features */}
                        <div className="grid gap-4 mb-8">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-4 bg-[hsl(229,89%,4%)] border border-[hsl(230,91%,54%)/.08] rounded-xl p-4 hover:bg-[hsl(229,89%,4%)]/90 transition"
                                >
                                    <span className="p-3 bg-[hsl(158,90%,54%)/.10] rounded-lg">
                                        {React.createElement(feature.icon, { className: "w-6 h-6 text-[hsl(158,90%,54%)]" })}
                                    </span>
                                    <div className="text-left">
                                        <div className="font-semibold text-lg text-white">{feature.title}</div>
                                        <div className="text-sm text-white/70">{feature.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[hsl(229,89%,4%)] border border-[hsl(230,91%,54%)/.08] rounded-xl p-6">
                                <div className="text-2xl font-bold text-[hsl(158,90%,54%)] mb-1">10K+</div>
                                <div className="text-sm text-white/80 font-medium">Active Students</div>
                            </div>
                            <div className="bg-[hsl(229,89%,4%)] border border-[hsl(230,91%,54%)/.08] rounded-xl p-6">
                                <div className="text-2xl font-bold text-[hsl(158,90%,54%)] mb-1">50K+</div>
                                <div className="text-sm text-white/80 font-medium">Tasks Completed</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
