"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function OtpPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newCode.every((digit) => digit !== "") && index === 5) {
      handleVerify(newCode.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newCode[index] = char;
    });
    setCode(newCode);

    // Focus last filled input or first empty
    const lastFilledIndex = Math.min(pastedData.length - 1, 5);
    inputRefs.current[lastFilledIndex]?.focus();

    // Auto-submit if complete
    if (pastedData.length === 6) {
      handleVerify(pastedData);
    }
  };

  const handleVerify = async (verificationCode: string) => {
    setIsVerifying(true);
    console.log("Verifying 2FA code:", verificationCode);

    // Simulate verification
    setTimeout(() => {
      // For demo purposes - replace with actual verification
      if (verificationCode === "123456") {
        window.location.href = "/dashboard";
      } else {
        setError("Invalid verification code. Please try again.");
        setCode(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
      setIsVerifying(false);
    }, 1000);
  };

  const handleResend = () => {
    console.log("Resending verification code");
    setResendTimer(30);
    setCode(["", "", "", "", "", ""]);
    setError("");
    inputRefs.current[0]?.focus();
    // Add resend logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[url('/bg-blue.jpg')] bg-cover">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <Image
              src="/apple-touch-icon.png"
              alt="Cardlet Logo"
              width={64}
              height={64}
              className="w-10 h-auto"
            />
          </div>
          <h1 className="text-3xl text-[#1FF3A5] font-bold text-balance">
            Verify Your Email
          </h1>
          <p className="text-accent-foreground mt-2 leading-relaxed">
            Enter the 6-digit code sent to your Verified email Address
          </p>
        </div>

        {/* Verification Card */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
          <div className="space-y-6">
            {/* Code Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Verification Code
              </label>
              <div className="flex gap-2 justify-between">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-full h-14 text-center text-xl font-semibold"
                    disabled={isVerifying}
                    aria-label={`Digit ${index + 1}`}
                  />
                ))}
              </div>
              {error && (
                <p className="text-sm text-destructive mt-2">{error}</p>
              )}
            </div>

            {/* Verify Button */}
            <Button
              onClick={() => handleVerify(code.join(""))}
              disabled={code.some((digit) => digit === "") || isVerifying}
              className="w-full"
              size="lg"
            >
              {isVerifying ? "Verifying..." : "Verify Code"}
            </Button>

            {/* Resend Code */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-gray-400 mb-2">
                Didn't receive the code?
              </p>
              {resendTimer > 0 ? (
                <p className="text-sm text-gray-400">
                  Resend code in{" "}
                  <span className="font-medium text-foreground">
                    {resendTimer}s
                  </span>
                </p>
              ) : (
                <Button
                  variant="link"
                  onClick={handleResend}
                  className="text-primary p-0 h-auto"
                >
                  Resend Code
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="mt-6 space-y-3">
          <div className="text-center">
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Having trouble?{" "}
          <Link href="/support" className="text-[#1FF3A5] hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}

// "use client";

// import type React from "react";
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// export function OtpPage() {
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

//   useEffect(() => {
//     inputRefs.current[0]?.focus();
//   }, []);

//   const handleChange = (index: number, value: string) => {
//     if (value.length > 1) value = value.slice(0, 1);
//     if (!/^\d*$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (
//     index: number,
//     e: React.KeyboardEvent<HTMLInputElement>
//   ) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e: React.ClipboardEvent) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData("text").slice(0, 6);
//     if (!/^\d+$/.test(pastedData)) return;

//     const newOtp = [...otp];
//     pastedData.split("").forEach((char, index) => {
//       if (index < 6) newOtp[index] = char;
//     });
//     setOtp(newOtp);
//     const lastIndex = Math.min(pastedData.length, 5);
//     inputRefs.current[lastIndex]?.focus();
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("OTP:", otp.join(""));
//   };

//   const handleResend = () => {
//     console.log("Resending OTP...");
//     setOtp(["", "", "", "", "", ""]);
//     inputRefs.current[0]?.focus();
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8"
//       >
//         <div className="flex flex-col items-center text-center">
//           <Image
//             src="/apple-touch-icon.png"
//             alt="GofaGuy Logo"
//             width={100}
//             height={100}
//             className="h-10 w-auto mb-6"
//             priority
//           />
//           <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//             Enter Verification Code
//           </h2>
//           <p className="text-gray-500 text-sm sm:text-base mb-6">
//             We sent a code to your registered email
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex justify-center gap-2 sm:gap-3">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 type="text"
//                 inputMode="numeric"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 onPaste={handlePaste}
//                 className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-semibold bg-gray-50 border border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
//               />
//             ))}
//           </div>

//           <Button
//             type="submit"
//             disabled={otp.some((digit) => !digit)}
//             className="w-full h-11 sm:h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             Verify Code
//           </Button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600 mb-3">Didn't receive the code?</p>
//           <button
//             onClick={handleResend}
//             className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
//           >
//             Resend Code
//           </button>
//         </div>

//         <div className="mt-8 text-center">
//           <Link
//             href="/auth/login"
//             className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
//           >
//             Back to Login
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
