"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80"
          alt="Happy couple"
          fill
          className="object-cover opacity-15"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 mb-6">
          Find Your Perfect Match
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 font-medium mb-8 max-w-2xl mx-auto">
          Join our community and start your journey to finding true love today
        </p>
        {/* Search Form */}
        <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl p-6 shadow-xl border border-pink-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Find Your Perfect Match
          </h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Select>
                <SelectTrigger className="w-full bg-white border-pink-100 hover:border-pink-300 transition-all duration-200 text-gray-700 shadow-sm hover:shadow-md">
                  <SelectValue placeholder="Religion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="islam">Islam</SelectItem>
                  <SelectItem value="hindu">Hindu</SelectItem>
                  <SelectItem value="christian">Christian</SelectItem>
                  <SelectItem value="buddhist">Buddhist</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full bg-white border-pink-100 hover:border-pink-300 transition-all duration-200 text-gray-700 shadow-sm hover:shadow-md">
                  <SelectValue placeholder="Looking For" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bride">Looking for Bride</SelectItem>
                  <SelectItem value="groom">Looking for Groom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full bg-white border-pink-100 hover:border-pink-300 transition-all duration-200 text-gray-700 shadow-sm hover:shadow-md">
                  <SelectValue placeholder="Marital Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="never_married">Never Married</SelectItem>
                  <SelectItem value="divorced">Divorced</SelectItem>
                  <SelectItem value="widowed">Widowed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full bg-white border-pink-100 hover:border-pink-300 transition-all duration-200 text-gray-700 shadow-sm hover:shadow-md">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dhaka">Dhaka</SelectItem>
                  <SelectItem value="chittagong">Chittagong</SelectItem>
                  <SelectItem value="sylhet">Sylhet</SelectItem>
                  <SelectItem value="rajshahi">Rajshahi</SelectItem>
                  <SelectItem value="khulna">Khulna</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
          <div className="mt-6 flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Search Matches
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
