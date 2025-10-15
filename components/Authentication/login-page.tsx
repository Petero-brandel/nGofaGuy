"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { username, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Welcome & Security Tips */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full lg:w-1/2 bg-[url('/bg-blue.jpg')] bg-cover bg-center p-6 sm:p-10 flex flex-col justify-between text-white"
      >
        <div className="max-w-md mt-10 sm:mt-20 space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Good to see you again!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/80 mt-12 text-sm sm:text-base leading-relaxed max-w-sm"
          >
            Every login brings you closer to earning, learning, and connecting
            smarter. Sign in and make your day productive.
          </motion.p>
        </div>

        {/* Security Tip */}
        <div className="bg-[#010411]/90 rounded-xl p-4 sm:p-5 mt-10 mb-10 sm:mb-16 max-w-md">
          <h3 className="text-[#1FF3A5] text-base sm:text-lg font-semibold mb-1">
            #Security Tip
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Never share your password, OTP, or wallet codes. GofaGuy staff will
            never request them in chats or DMs. Stay smart, stay secure.
          </p>
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full lg:w-1/2 flex items-center justify-center bg-[#EEF6FF] p-6 sm:p-8 lg:p-12"
      >
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/apple-touch-icon.png"
                alt="GofaGuy Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-1">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm sm:text-base">
              Let’s get started with your 30-day free trial.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="text"
                placeholder="Email or Student ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-sm bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
              />

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 text-sm bg-gray-50 border-gray-200 rounded-xl pr-12 focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <Link
                  href="/auth/recovery"
                  className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all"
              >
                Login
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Button
                type="button"
                variant="outline"
                className="h-11 sm:h-12 border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm bg-transparent hover:bg-gray-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>

              <Button
                type="button"
                variant="outline"
                className="h-11 sm:h-12 border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm bg-transparent hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Sign Up
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
