"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export function RecoveryPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recovery email:", email);
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src="/apple-touch-icon.png"
              alt="GofaGuy Logo"
              width={100}
              height={100}
              className="h-10 w-auto mb-6"
              priority
            />
          </div>

          <Link
            href="/auth/login"
            className="inline-flex items-center text-gray-600 hover:text-indigo-600 mb-6 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Forgot Password?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            No worries, we'll send you reset instructions.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 px-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
              >
                Send Reset Link
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Check Your Email
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                We've sent password reset instructions to{" "}
                <span className="font-medium text-gray-900">{email}</span>
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="h-11 px-6 border-gray-200 hover:bg-gray-50 rounded-lg text-sm font-medium"
              >
                Resend Email
              </Button>
            </motion.div>
          )}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
