"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  FaBriefcase,
  FaGraduationCap,
  FaHeart,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const profiles = [
  {
    id: "1",
    name: "Sarah",
    age: 28,
    location: "New York",
    occupation: "Software Engineer",
    education: "Masters in Computer Science",
    rating: 4.8,
    likes: 245,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "2",
    name: "Michael",
    age: 30,
    location: "San Francisco",
    occupation: "Product Manager",
    education: "MBA from Stanford",
    rating: 4.9,
    likes: 312,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: "Emma",
    age: 26,
    location: "London",
    occupation: "Marketing Director",
    education: "Bachelors in Marketing",
    rating: 4.7,
    likes: 198,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: "David",
    age: 32,
    location: "Toronto",
    occupation: "Financial Analyst",
    education: "Masters in Finance",
    rating: 4.6,
    likes: 167,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

export function FeaturedProfiles() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
          Featured Profiles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-50"
            >
              <div className="aspect-square relative">
                <Image
                  src={profile.image}
                  alt={`${profile.name}'s profile`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaHeart className="text-pink-500 w-4 h-4" />
                  <span className="text-sm font-medium text-gray-700">
                    {profile.likes}
                  </span>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <span className="text-sm font-medium text-gray-700">
                    {profile.rating}
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl text-gray-900">
                    {profile.name}, {profile.age}
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="w-4 h-4 text-pink-500" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaBriefcase className="w-4 h-4 text-pink-500" />
                    <span className="text-sm">{profile.occupation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaGraduationCap className="w-4 h-4 text-pink-500" />
                    <span className="text-sm">{profile.education}</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <Link href={`/profile/${profile.id}`} className="w-full">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
