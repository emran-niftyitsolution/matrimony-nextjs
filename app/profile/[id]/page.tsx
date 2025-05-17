"use client";

import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaExpand,
  FaFacebook,
  FaGlobe,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaInstagram,
  FaLanguage,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPalette,
  FaPhone,
  FaPrayingHands,
  FaRulerVertical,
  FaStar,
  FaTint,
  FaUserCircle,
  FaUserFriends,
  FaUsers,
  FaUserTie,
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
};

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [modalEmblaRef, modalEmblaApi] = useEmblaCarousel({ loop: true });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const modalScrollPrev = useCallback(() => {
    if (modalEmblaApi) modalEmblaApi.scrollPrev();
  }, [modalEmblaApi]);

  const modalScrollNext = useCallback(() => {
    if (modalEmblaApi) modalEmblaApi.scrollNext();
  }, [modalEmblaApi]);

  const openModal = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsModalOpen(true);
    if (modalEmblaApi) {
      modalEmblaApi.scrollTo(index);
    }
  };

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

            {/* Family Information Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Family Information
              </h2>

              {/* Parents Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Father's Info */}
                <div className="bg-pink-50/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUserTie className="w-6 h-6 text-pink-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Father&apos;s Information
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">Name:</span>{" "}
                      {profileData.family.father.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">
                        Occupation:
                      </span>{" "}
                      {profileData.family.father.occupation}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">
                        Company:
                      </span>{" "}
                      {profileData.family.father.company}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">
                        Education:
                      </span>{" "}
                      {profileData.family.father.education}
                    </p>
                  </div>
                </div>

                {/* Mother's Info */}
                <div className="bg-purple-50/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <FaUserCircle className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Mother&apos;s Information
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">Name:</span>{" "}
                      {profileData.family.mother.name}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">
                        Occupation:
                      </span>{" "}
                      {profileData.family.mother.occupation}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">
                        Education:
                      </span>{" "}
                      {profileData.family.mother.education}
                    </p>
                  </div>
                </div>
              </div>

              {/* Siblings Information */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaUsers className="w-6 h-6 text-pink-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Siblings
                  </h3>
                </div>

                {/* Brothers Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Brothers
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profileData.family.brothers.map((brother, index) => (
                      <div
                        key={index}
                        className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                      >
                        <p className="font-semibold text-gray-900 text-lg mb-1">
                          {brother.name}, {brother.age}
                        </p>
                        <p className="text-gray-700">{brother.occupation}</p>
                        <p className="text-gray-500 text-sm mt-1">
                          {brother.maritalStatus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sisters Section */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Sisters
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profileData.family.sisters.map((sister, index) => (
                      <div
                        key={index}
                        className="bg-pink-50/50 border border-pink-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                      >
                        <p className="font-semibold text-gray-900 text-lg mb-1">
                          {sister.name}, {sister.age}
                        </p>
                        <p className="text-gray-700">{sister.occupation}</p>
                        <p className="text-gray-500 text-sm mt-1">
                          {sister.maritalStatus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Family Background */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Father's Family */}
                <div className="bg-blue-50/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <FaHome className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Father&apos;s Family Background
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Origin:
                        </span>{" "}
                        {profileData.family.fatherFamily.origin}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Native Place:
                        </span>{" "}
                        {profileData.family.fatherFamily.nativePlace}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family Type:
                        </span>{" "}
                        {profileData.family.fatherFamily.familyType}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family Values:
                        </span>{" "}
                        {profileData.family.fatherFamily.familyValues}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family Status:
                        </span>{" "}
                        {profileData.family.fatherFamily.familyStatus}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family Business:
                        </span>{" "}
                        {profileData.family.fatherFamily.familyBusiness}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family History:
                        </span>{" "}
                        {profileData.family.fatherFamily.familyHistory}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Property Details:
                        </span>{" "}
                        {profileData.family.fatherFamily.propertyDetails}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-blue-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Family Members
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-white/50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                          <p className="font-semibold text-gray-900 mb-2">
                            Grandparents
                          </p>
                          <div className="space-y-2">
                            <p className="text-gray-700">
                              <span className="font-semibold text-gray-900">
                                Grandfather:
                              </span>{" "}
                              {
                                profileData.family.fatherFamily.familyMembers
                                  .grandfather.name
                              }{" "}
                              -{" "}
                              {
                                profileData.family.fatherFamily.familyMembers
                                  .grandfather.occupation
                              }
                            </p>
                            <p className="text-gray-700">
                              <span className="font-semibold text-gray-900">
                                Grandmother:
                              </span>{" "}
                              {
                                profileData.family.fatherFamily.familyMembers
                                  .grandmother.name
                              }{" "}
                              -{" "}
                              {
                                profileData.family.fatherFamily.familyMembers
                                  .grandmother.occupation
                              }
                            </p>
                          </div>
                        </div>

                        <div className="bg-white/50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                          <p className="font-semibold text-gray-900 mb-2">
                            Uncles
                          </p>
                          <div className="space-y-2">
                            {profileData.family.fatherFamily.familyMembers.uncles.map(
                              (uncle, index) => (
                                <p key={index} className="text-gray-700">
                                  {uncle.name} - {uncle.occupation}{" "}
                                  <span className="text-gray-500">
                                    ({uncle.maritalStatus})
                                  </span>
                                </p>
                              )
                            )}
                          </div>
                        </div>

                        <div className="bg-white/50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                          <p className="font-semibold text-gray-900 mb-2">
                            Aunts
                          </p>
                          <div className="space-y-2">
                            {profileData.family.fatherFamily.familyMembers.aunts.map(
                              (aunt, index) => (
                                <p key={index} className="text-gray-700">
                                  {aunt.name} - {aunt.occupation}{" "}
                                  <span className="text-gray-500">
                                    ({aunt.maritalStatus})
                                  </span>
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mother's Family */}
                <div className="bg-green-50/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <FaHome className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Mother&apos;s Family Background
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Origin:
                        </span>{" "}
                        {profileData.family.motherFamily.origin}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Native Place:
                        </span>{" "}
                        {profileData.family.motherFamily.nativePlace}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family Type:
                        </span>{" "}
                        {profileData.family.motherFamily.familyType}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family Values:
                        </span>{" "}
                        {profileData.family.motherFamily.familyValues}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family Status:
                        </span>{" "}
                        {profileData.family.motherFamily.familyStatus}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family Business:
                        </span>{" "}
                        {profileData.family.motherFamily.familyBusiness}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Family History:
                        </span>{" "}
                        {profileData.family.motherFamily.familyHistory}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Property Details:
                        </span>{" "}
                        {profileData.family.motherFamily.propertyDetails}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-green-100">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Family Members
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-white/50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                          <p className="font-semibold text-gray-900 mb-2">
                            Grandparents
                          </p>
                          <div className="space-y-2">
                            <p className="text-gray-700">
                              <span className="font-semibold text-gray-900">
                                Grandfather:
                              </span>{" "}
                              {
                                profileData.family.motherFamily.familyMembers
                                  .grandfather.name
                              }{" "}
                              -{" "}
                              {
                                profileData.family.motherFamily.familyMembers
                                  .grandfather.occupation
                              }
                            </p>
                            <p className="text-gray-700">
                              <span className="font-semibold text-gray-900">
                                Grandmother:
                              </span>{" "}
                              {
                                profileData.family.motherFamily.familyMembers
                                  .grandmother.name
                              }{" "}
                              -{" "}
                              {
                                profileData.family.motherFamily.familyMembers
                                  .grandmother.occupation
                              }
                            </p>
                          </div>
                        </div>

                        <div className="bg-white/50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                          <p className="font-semibold text-gray-900 mb-2">
                            Uncles
                          </p>
                          <div className="space-y-2">
                            {profileData.family.motherFamily.familyMembers.uncles.map(
                              (uncle, index) => (
                                <p key={index} className="text-gray-700">
                                  {uncle.name} - {uncle.occupation}{" "}
                                  <span className="text-gray-500">
                                    ({uncle.maritalStatus})
                                  </span>
                                </p>
                              )
                            )}
                          </div>
                        </div>

                        <div className="bg-white/50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                          <p className="font-semibold text-gray-900 mb-2">
                            Aunts
                          </p>
                          <div className="space-y-2">
                            {profileData.family.motherFamily.familyMembers.aunts.map(
                              (aunt, index) => (
                                <p key={index} className="text-gray-700">
                                  {aunt.name} - {aunt.occupation}{" "}
                                  <span className="text-gray-500">
                                    ({aunt.maritalStatus})
                                  </span>
                                </p>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Photos</h2>
              <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {profileData.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="flex-[0_0_33.33%] min-w-0 pl-4 first:pl-0"
                      >
                        <div className="aspect-square relative rounded-xl overflow-hidden group">
                          <Image
                            src={photo}
                            alt={`${profileData.name}'s photo ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button
                              onClick={() => openModal(index)}
                              className="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                              <FaExpand className="w-4 h-4" />
                              <span>View</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaChevronRight className="w-5 h-5" />
                </button>
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

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-4xl mx-4">
            <div className="overflow-hidden" ref={modalEmblaRef}>
              <div className="flex">
                {profileData.photos.map((photo, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={photo}
                        alt={`${profileData.name}'s photo ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={modalScrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={modalScrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
