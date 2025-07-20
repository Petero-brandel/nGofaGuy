"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  name: string
  picture?: string
  firstName?: string
  lastName?: string
  university?: string
  phone?: string
  provider: "google" | "email"
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (userData: SignUpData) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  updateUser: (userData: Partial<User>) => Promise<void>
}

interface SignUpData {
  firstName: string
  lastName: string
  email: string
  phone: string
  university: string
  password: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem("gofaguy_token")
      if (token) {
        // Verify token with your backend
        const response = await fetch("/api/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const userData = await response.json()
          setUser(userData.user)
        } else {
          localStorage.removeItem("gofaguy_token")
        }
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      localStorage.removeItem("gofaguy_token")
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Sign in failed")
      }

      const data = await response.json()
      localStorage.setItem("gofaguy_token", data.token)
      setUser(data.user)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (userData: SignUpData) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Sign up failed")
      }

      const data = await response.json()
      localStorage.setItem("gofaguy_token", data.token)
      setUser(data.user)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    setIsLoading(true)
    try {
      // Import dynamically to avoid SSR issues
      const { googleAuth } = await import("./google")
      googleAuth.signIn()
    } catch (error) {
      console.error("Google sign in failed:", error)
      setIsLoading(false)
      throw error
    }
  }

  const signOut = async () => {
    setIsLoading(true)
    try {
      await fetch("/api/auth/signout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("gofaguy_token")}`,
        },
      })
    } catch (error) {
      console.error("Sign out error:", error)
    } finally {
      localStorage.removeItem("gofaguy_token")
      setUser(null)
      setIsLoading(false)
    }
  }

  const updateUser = async (userData: Partial<User>) => {
    try {
      const response = await fetch("/api/auth/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("gofaguy_token")}`,
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error("Failed to update user")
      }

      const data = await response.json()
      setUser(data.user)
    } catch (error) {
      throw error
    }
  }

  const value = {
    user,
    isLoading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
    updateUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
