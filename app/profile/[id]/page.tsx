"use client";

import ProfileHeader from "@/components/sections/profile/header";
import RatingModal from "@/components/sections/profile/header/rating-modal";
import {
  About,
  Family,
  Interests,
  Photos,
  Pledges,
} from "@/components/sections/profile/main";
import { useState } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaGraduationCap,
  FaInstagram,
  FaLanguage,
  FaLinkedin,
  FaPalette,
  FaPhone,
  FaPrayingHands,
  FaRulerVertical,
  FaTint,
  FaUserFriends,
  FaWeight,
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
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=800&q=80",
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
  family: {
    father: {
      name: "John Johnson",
      occupation: "Business Owner",
      company: "Johnson Enterprises",
      education: "MBA",
      alive: true,
    },
    mother: {
      name: "Mary Johnson",
      occupation: "School Teacher",
      education: "Masters in Education",
      alive: true,
    },
    brothers: [
      {
        name: "Michael Johnson",
        age: 32,
        occupation: "Doctor",
        maritalStatus: "Married",
      },
    ],
    sisters: [
      {
        name: "Emily Johnson",
        age: 25,
        occupation: "Lawyer",
        maritalStatus: "Single",
      },
    ],
    fatherFamily: {
      origin: "New York",
      siblings: 3,
      familyType: "Joint",
      familyValues: "Traditional",
      familyStatus: "Upper Middle Class",
      nativePlace: "Brooklyn, New York",
      familyBusiness: "Johnson Enterprises",
      familyHistory: "Established in 1985",
      propertyDetails: "Owns multiple properties in New York",
      familyMembers: {
        grandfather: {
          name: "Robert Johnson",
          occupation: "Retired Business Owner",
          education: "Bachelor's in Business",
        },
        grandmother: {
          name: "Elizabeth Johnson",
          occupation: "Homemaker",
          education: "High School",
        },
        uncles: [
          {
            name: "William Johnson",
            occupation: "Business Consultant",
            maritalStatus: "Married",
          },
          {
            name: "Thomas Johnson",
            occupation: "Architect",
            maritalStatus: "Married",
          },
        ],
        aunts: [
          {
            name: "Margaret Johnson",
            occupation: "School Principal",
            maritalStatus: "Married",
          },
        ],
      },
    },
    motherFamily: {
      origin: "Boston",
      siblings: 2,
      familyType: "Nuclear",
      familyValues: "Modern",
      familyStatus: "Middle Class",
      nativePlace: "Cambridge, Massachusetts",
      familyBusiness: "Anderson Bookstore",
      familyHistory: "Established in 1990",
      propertyDetails: "Family home in Cambridge",
      familyMembers: {
        grandfather: {
          name: "James Anderson",
          occupation: "Retired Professor",
          education: "PhD in Literature",
        },
        grandmother: {
          name: "Patricia Anderson",
          occupation: "Retired Librarian",
          education: "Master's in Library Science",
        },
        uncles: [
          {
            name: "Richard Anderson",
            occupation: "College Professor",
            maritalStatus: "Married",
          },
        ],
        aunts: [
          {
            name: "Susan Anderson",
            occupation: "Author",
            maritalStatus: "Single",
          },
        ],
      },
    },
  },
  birthYear: 1995,
  color: "Fair",
  weight: "55 kg",
  bloodGroup: "O+",
  nationality: "American",
  educationalQualifications: [
    {
      degree: "Masters in Computer Science",
      institution: "Stanford University",
      year: "2017-2019",
      result: "CGPA 3.8/4.0",
      achievements: ["Dean's List", "Research Fellowship"],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT",
      year: "2013-2017",
      result: "CGPA 3.9/4.0",
      achievements: ["Summa Cum Laude", "Department Award"],
    },
  ],
  occupationalInfo: {
    currentPosition: "Senior Software Engineer",
    company: "Google",
    department: "Cloud Platform",
    joiningYear: 2019,
    responsibilities: [
      "Lead developer for cloud infrastructure",
      "Mentor junior developers",
      "Architect scalable solutions",
    ],
    achievements: [
      "Employee of the Year 2022",
      "Best Innovation Award 2021",
      "5+ successful project launches",
    ],
    salary: "150K+ USD",
    workLocation: "New York Office",
  },
  expectedPartner: {
    ageRange: "25-32",
    height: "5'4\" - 5'8\"",
    education: "Minimum Bachelor's Degree",
    occupation: "Professional/Working",
    maritalStatus: "Never Married",
    religion: "Islam",
    location: "USA/Canada",
    familyType: "Modern/Nuclear",
    otherPreferences: [
      "Should be career-oriented",
      "Family values are important",
      "Open to relocation",
      "Good communication skills",
    ],
  },
  pledges: [
    {
      title: "Commitment to Family",
      description:
        "I pledge to prioritize family values and create a loving, supportive environment for our future family.",
      icon: "FaHeart",
    },
    {
      title: "Mutual Growth",
      description:
        "I commit to supporting my partner's personal and professional growth while pursuing my own development.",
      icon: "FaSeedling",
    },
    {
      title: "Open Communication",
      description:
        "I promise to maintain honest and open communication, addressing concerns with respect and understanding.",
      icon: "FaComments",
    },
    {
      title: "Shared Responsibilities",
      description:
        "I vow to share household responsibilities and decision-making equally in our partnership.",
      icon: "FaHandshake",
    },
    {
      title: "Cultural Respect",
      description:
        "I commit to respecting and celebrating our cultural differences and traditions.",
      icon: "FaGlobeAmericas",
    },
    {
      title: "Financial Transparency",
      description:
        "I pledge to maintain transparency in financial matters and work together on financial goals.",
      icon: "FaChartLine",
    },
  ],
};

export default function ProfilePage() {
  const [isLiked, setIsLiked] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <ProfileHeader
        name={profileData.name}
        age={profileData.age}
        location={profileData.location}
        rating={profileData.rating}
        likes={profileData.likes}
        photo={profileData.photos[0]}
        onRatingClick={() => setIsRatingModalOpen(true)}
        onLikeClick={() => setIsLiked(!isLiked)}
        isLiked={isLiked}
      />

      <RatingModal
        isOpen={isRatingModalOpen}
        onClose={() => setIsRatingModalOpen(false)}
        userRating={userRating}
        onRatingChange={setUserRating}
        onSubmit={() => {
          // Handle rating submission
          setIsRatingModalOpen(false);
        }}
      />

      {/* Profile Content */}
      <div className="container mx-auto px-4 pb-20 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <About about={profileData.about} />
            <Photos photos={profileData.photos} name={profileData.name} />
            <Family family={profileData.family} />
            <Interests interests={profileData.interests} />
            <Pledges pledges={profileData.pledges} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Basic Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Basic Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Birth Year</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.birthYear}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaRulerVertical className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Height</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.height}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPalette className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Complexion</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.color}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaWeight className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Weight</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.weight}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaTint className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Blood Group</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.bloodGroup}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.nationality}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaBriefcase className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Occupation</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.occupation} at {profileData.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.education}
                    </p>
                    <p className="text-sm text-gray-700">
                      {profileData.university}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPrayingHands className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Religion</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.religion}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUserFriends className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Marital Status</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.maritalStatus}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLanguage className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Languages</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.languages.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Qualifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Educational Qualifications
              </h2>
              <div className="space-y-6">
                {profileData.educationalQualifications.map((edu, index) => (
                  <div key={index} className="border-l-4 border-pink-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700">{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span>{edu.year}</span>
                      <span>•</span>
                      <span>{edu.result}</span>
                    </div>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Achievements:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Occupational Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Occupational Information
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Current Position</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.occupationalInfo.currentPosition}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.occupationalInfo.company}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.occupationalInfo.department}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Joining Year</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.occupationalInfo.joiningYear}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Salary</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.occupationalInfo.salary}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Work Location</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.occupationalInfo.workLocation}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Responsibilities
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {profileData.occupationalInfo.responsibilities.map(
                      (resp, index) => (
                        <li key={index}>{resp}</li>
                      )
                    )}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Achievements
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {profileData.occupationalInfo.achievements.map(
                      (achievement, index) => (
                        <li key={index}>{achievement}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Expected Life Partner */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Expected Life Partner
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Age Range</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.expectedPartner.ageRange}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Height</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.expectedPartner.height}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.expectedPartner.education}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Occupation</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.expectedPartner.occupation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Marital Status</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.expectedPartner.maritalStatus}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Religion</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.expectedPartner.religion}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.expectedPartner.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Family Type</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.expectedPartner.familyType}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Other Preferences
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {profileData.expectedPartner.otherPreferences.map(
                      (pref, index) => (
                        <li key={index}>{pref}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhone className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.contact.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-5 h-5 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold text-gray-900">
                      {profileData.contact.email}
                    </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
