"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FaBriefcase,
  FaEnvelope,
  FaFacebook,
  FaGraduationCap,
  FaHeart,
  FaInstagram,
  FaLanguage,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPrayingHands,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";

const profileData = {
  id: "1",
  name: "Sarah Johnson",
  age: 28,
  location: "New York, USA",
  occupation: "Software Engineer",
  company: "Google",
  education: "Masters in Computer Science",
  university: "Stanford University",
  religion: "Islam",
  maritalStatus: "Never Married",
  height: "5'6\"",
  languages: ["English", "Arabic", "French"],
  about:
    "I am a passionate software engineer with a love for technology and innovation. I enjoy traveling, reading, and outdoor activities. Looking for someone who shares similar interests and values.",
  interests: [
    "Technology",
    "Travel",
    "Reading",
    "Hiking",
    "Photography",
    "Cooking",
  ],
  photos: [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  ],
  rating: 4.8,
  likes: 245,
  contact: {
    phone: "+1 (555) 123-4567",
    email: "sarah.johnson@example.com",
    social: {
      facebook: "sarah.johnson",
      instagram: "@sarah.j",
      linkedin: "sarah-johnson",
    },
  },
};

export default function ProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Profile Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 h-full flex items-end pb-20 relative z-10">
          <div className="flex items-end gap-8">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src={profileData.photos[0]}
                alt={profileData.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-white mb-4">
              <h1 className="text-4xl font-bold mb-2">
                {profileData.name}, {profileData.age}
              </h1>
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="w-5 h-5 text-yellow-400" />
                  <span>{profileData.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="w-5 h-5" />
                  <span>{profileData.likes} likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {profileData.about}
              </p>
            </div>

            {/* Photos Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Photos</h2>
              <div className="grid grid-cols-3 gap-4">
                {profileData.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="aspect-square relative rounded-xl overflow-hidden"
                  >
                    <Image
                      src={photo}
                      alt={`${profileData.name}'s photo ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {profileData.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Basic Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Basic Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaBriefcase className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Occupation</p>
                    <p className="font-medium">
                      {profileData.occupation} at {profileData.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="font-medium">{profileData.education}</p>
                    <p className="text-sm text-gray-600">
                      {profileData.university}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPrayingHands className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Religion</p>
                    <p className="font-medium">{profileData.religion}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUserFriends className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Marital Status</p>
                    <p className="font-medium">{profileData.maritalStatus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLanguage className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Languages</p>
                    <p className="font-medium">
                      {profileData.languages.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{profileData.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{profileData.contact.email}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Send Message
              </Button>
              <Button
                variant="outline"
                className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 font-medium py-6 text-lg rounded-xl"
              >
                Save Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
