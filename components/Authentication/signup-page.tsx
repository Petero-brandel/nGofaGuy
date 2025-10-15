"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Upload, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

type AccountType = "personal" | "business";

export function SignupPage() {
  const [accountType, setAccountType] = useState<AccountType>("personal");
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    website: "",
    description: "",
    logo: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", { accountType, acceptPolicy, ...formData });
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, logo: e.target.files[0] });
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#EEF6FF]">
        {/* Right (Info Banner) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex lg:w-1/2 bg-[url('/bg-blue.jpg')] bg-cover p-10 lg:p-16 text-white flex-col"
        >
          <h1 className="text-5xl font-extrabold mt-10 mb-4 leading-tight">
            Let’s Get You an Account!
          </h1>
          <p className="text-lg mb-6 text-white/90">
            Create your account and unlock amazing features.
          </p>
          <p className="text-white/70">
            Join thousands of students using GofaGuy as the #1 campus micro-gig
            and errand platform in Nigeria.
          </p>
          <div className="bg-[#010411]/80 p-6 mt-20 rounded-lg">
            <h3 className="text-xl text-[#1FF3A5] mb-2">
              Get a #smoother experience with the GofaGuy NG app
            </h3>
            <p className="text-white/70 mb-4">
              GofaGuy works best on the app. Get it on PlayStore.
            </p>
            <Button className="bg-[#1FF3A5] text-black px-6 py-2 rounded-lg font-semibold flex items-center gap-2">
              <Download size={16} /> Download App
            </Button>
          </div>
        </motion.div>

        {/* Left (Form Section) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex items-center justify-center px-4 py-10 sm:px-6 md:px-8"
        >
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Image
                src="/apple-touch-icon.png"
                alt="GofaGuy Logo"
                width={120}
                height={120}
                className="h-10 mb-6 sm:mb-8 w-auto mx-auto"
                priority
              />

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 text-center">
                Create Account
              </h2>
              <p className="text-gray-500 text-center mb-6 sm:mb-8 text-sm sm:text-base">
                Choose your account type and get started
              </p>

              {/* Account Type Tabs */}
              <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setAccountType("personal")}
                  className={`flex-1 py-2 text-sm sm:text-base rounded-lg font-medium transition-all ${
                    accountType === "personal"
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Personal
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType("business")}
                  className={`flex-1 py-2 text-sm sm:text-base rounded-lg font-medium transition-all ${
                    accountType === "business"
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Business
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {accountType === "personal" ? (
                  <>
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    />

                    {/* Password */}
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full h-12 bg-gray-50 border-gray-200 rounded-xl pr-10 focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full h-12 bg-gray-50 border-gray-200 rounded-xl pr-10 focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <Input
                      type="text"
                      placeholder="Business Name"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      className="w-full h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    />
                    <Input
                      type="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    />
                    <Input
                      type="url"
                      placeholder="Website (optional)"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="w-full h-12 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                    />
                    <Textarea
                      placeholder="Business Description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Logo
                      </label>
                      <label
                        htmlFor="logo-upload"
                        className="flex items-center justify-center w-full h-12 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-indigo-500"
                      >
                        <Upload size={18} className="mr-2 text-gray-400" />
                        <span className="text-gray-600 text-sm">
                          {formData.logo ? formData.logo.name : "Upload Image"}
                        </span>
                        <input
                          type="file"
                          id="logo-upload"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full h-12 bg-gray-50 border-gray-200 rounded-xl pr-10 focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </>
                )}

                {/* Accept Policy */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="accept-policy"
                    checked={acceptPolicy}
                    onChange={(e) => setAcceptPolicy(e.target.checked)}
                    className="w-4 h-4 mt-0.5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="accept-policy"
                    className="text-sm text-gray-600 leading-tight"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={!acceptPolicy}
                  className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors mt-4 disabled:opacity-50"
                >
                  Create Account
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                {" "}
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 border-gray-200 hover:text-primary/55 hover:bg-gray-50 rounded-xl bg-transparent"
                >
                  {" "}
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    {" "}
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />{" "}
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />{" "}
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />{" "}
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />{" "}
                  </svg>{" "}
                  Google{" "}
                </Button>{" "}
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 border-gray-200 hover:text-primary/55 hover:bg-gray-50 rounded-xl bg-transparent"
                >
                  {" "}
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="#1877F2"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />{" "}
                  </svg>{" "}
                  Facebook{" "}
                </Button>{" "}
              </div>

              <p className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Login
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
