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
import {
  BasicInfo,
  Contact,
  Education,
  ExpectedPartner,
  Occupation,
} from "@/components/sections/profile/page";
import { useState } from "react";

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
    name: "Sarah Johnson",
    relation: "Self",
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
            <BasicInfo
              birthYear={profileData.birthYear}
              height={profileData.height}
              color={profileData.color}
              weight={profileData.weight}
              bloodGroup={profileData.bloodGroup}
              nationality={profileData.nationality}
              occupation={profileData.occupation}
              company={profileData.company}
              education={profileData.education}
              university={profileData.university}
              religion={profileData.religion}
              maritalStatus={profileData.maritalStatus}
              languages={profileData.languages}
            />

            <Education qualifications={profileData.educationalQualifications} />

            <Occupation info={profileData.occupationalInfo} />

            <ExpectedPartner partner={profileData.expectedPartner} />

            <Contact contact={profileData.contact} />
          </div>
        </div>
      </div>
    </div>
  );
}
