"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, CheckCircle } from "lucide-react";
import Link from "next/link";

interface LoginFormProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export function LoginForm({ isLoading, setIsLoading }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
          Email address
        </Label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
          <Input
            id="email"
            type="email"
            placeholder="john@university.edu"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="pl-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="password"
          className="text-sm font-semibold text-gray-700"
        >
          Password
        </Label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="pl-12 pr-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#1657FB] transition-colors duration-300 p-1"
            disabled={isLoading}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Checkbox
            id="rememberMe"
            checked={formData.rememberMe}
            onCheckedChange={(checked) =>
              handleInputChange("rememberMe", checked as boolean)
            }
            className="data-[state=checked]:bg-[#1657FB] data-[state=checked]:border-[#1657FB]"
            disabled={isLoading}
          />
          <Label
            htmlFor="rememberMe"
            className="text-sm font-medium text-gray-600"
          >
            Remember me
          </Label>
        </div>
        <Link
          href="/forgot-password"
          className="text-sm font-semibold text-[#1657FB] hover:text-[#0033CD] transition-colors duration-300"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full h-14 bg-gradient-to-r from-[#1657FB] to-[#0033CD] hover:from-[#0033CD] hover:to-[#1657FB] text-white font-bold text-base transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] rounded-xl"
      >
        {isLoading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Signing in...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <span>Sign in</span>
            <CheckCircle className="w-5 h-5" />
          </div>
        )}
      </Button>
    </motion.form>
  );
}
