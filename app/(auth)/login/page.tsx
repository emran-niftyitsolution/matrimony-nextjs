"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

interface FormErrors {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({ email: "", password: "" });

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log("Form submitted:", { email, password });
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px] grid md:grid-cols-2 items-center gap-8 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
        {/* Left side - Form */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=64&h=64&q=80"
                alt="Matrimony Logo"
                width={48}
                height={48}
                className="rounded-full mx-auto"
              />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
              Welcome Back!
            </h1>
            <p className="text-gray-500 mt-2">
              Please sign in to continue your journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`pl-10 ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                  value={email}
                  onChange={handleEmailChange}
                />
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`pl-10 pr-10 ${
                    errors.password ? "border-red-500" : "border-gray-200"
                  }`}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-pink-600 hover:text-pink-700"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
            >
              Sign In
            </Button>

            <p className="text-center text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&h=1000&q=80"
            alt="Login Banner"
            width={800}
            height={1000}
            className="rounded-xl object-cover h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
