"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  School,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

interface SignupFormProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export function SignupForm({ isLoading, setIsLoading }: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name Fields */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="space-y-2">
          <Label
            htmlFor="firstName"
            className="text-sm font-semibold text-gray-700"
          >
            First name
          </Label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="pl-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
              required
              disabled={isLoading}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="lastName"
            className="text-sm font-semibold text-gray-700"
          >
            Last name
          </Label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
            <Input
              id="lastName"
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="pl-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
              required
              disabled={isLoading}
            />
          </div>
        </div>
      </motion.div>

      {/* Email */}
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

      {/* Phone & University */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label
            htmlFor="phone"
            className="text-sm font-semibold text-gray-700"
          >
            Phone number
          </Label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
            <Input
              id="phone"
              type="tel"
              placeholder="+234 800 000 0000"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="pl-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
              required
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="university"
            className="text-sm font-semibold text-gray-700"
          >
            University
          </Label>
          <div className="relative group">
            <School className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
            <Input
              id="university"
              type="text"
              placeholder="University of Lagos"
              value={formData.university}
              onChange={(e) => handleInputChange("university", e.target.value)}
              className="pl-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
              required
              disabled={isLoading}
            />
          </div>
        </div>
      </motion.div>

      {/* Password */}
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

      {/* Confirm Password */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="space-y-2"
      >
        <Label
          htmlFor="confirmPassword"
          className="text-sm font-semibold text-gray-700"
        >
          Confirm password
        </Label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#1657FB] transition-colors duration-300" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            className="pl-12 pr-12 h-14 border-2 border-gray-100 focus:border-[#1657FB] focus:ring-4 focus:ring-[#1657FB]/10 rounded-xl bg-white/80 backdrop-blur-sm transition-all duration-300 text-base"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#1657FB] transition-colors duration-300 p-1"
            disabled={isLoading}
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Terms Agreement */}
      <div className="flex items-start space-x-3">
        <Checkbox
          id="agreeToTerms"
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) =>
            handleInputChange("agreeToTerms", checked as boolean)
          }
          className="mt-1 data-[state=checked]:bg-[#1657FB] data-[state=checked]:border-[#1657FB]"
          disabled={isLoading}
        />
        <Label
          htmlFor="agreeToTerms"
          className="text-sm text-gray-600 leading-relaxed"
        >
          I agree to the{" "}
          <Link
            href="/terms"
            className="font-semibold text-[#1657FB] hover:text-[#0033CD] transition-colors duration-300"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-semibold text-[#1657FB] hover:text-[#0033CD] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading || !formData.agreeToTerms}
        className="w-full h-14 bg-gradient-to-r from-[#1657FB] to-[#0033CD] hover:from-[#0033CD] hover:to-[#1657FB] text-white font-bold text-base transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] rounded-xl"
      >
        {isLoading ? (
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Creating account...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3">
            <span>Create account</span>
            <CheckCircle className="w-5 h-5" />
          </div>
        )}
      </Button>
    </motion.form>
  );
}
