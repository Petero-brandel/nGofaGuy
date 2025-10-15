"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(0, 1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP:", otp.join(""));
  };

  const handleResend = () => {
    console.log("Resending OTP...");
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Enter Verification Code
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6">
            We sent a code to your registered email
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2 sm:gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-semibold bg-gray-50 border border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
              />
            ))}
          </div>

          <Button
            type="submit"
            disabled={otp.some((digit) => !digit)}
            className="w-full h-11 sm:h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify Code
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-3">Didn't receive the code?</p>
          <button
            onClick={handleResend}
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
          >
            Resend Code
          </button>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/auth/login"
            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
