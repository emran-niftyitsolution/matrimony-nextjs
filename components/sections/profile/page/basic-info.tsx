import {
  FaBriefcase,
  FaCalendarAlt,
  FaGlobe,
  FaGraduationCap,
  FaLanguage,
  FaPalette,
  FaPrayingHands,
  FaRulerVertical,
  FaTint,
  FaUserFriends,
  FaWeight,
} from "react-icons/fa";

interface BasicInfoProps {
  birthYear: number;
  height: string;
  color: string;
  weight: string;
  bloodGroup: string;
  nationality: string;
  occupation: string;
  company: string;
  education: string;
  university: string;
  religion: string;
  maritalStatus: string;
  languages: string[];
}

export default function BasicInfo({
  birthYear,
  height,
  color,
  weight,
  bloodGroup,
  nationality,
  occupation,
  company,
  education,
  university,
  religion,
  maritalStatus,
  languages,
}: BasicInfoProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Basic Information
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaCalendarAlt className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Birth Year</p>
            <p className="font-semibold text-gray-900">{birthYear}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaRulerVertical className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Height</p>
            <p className="font-semibold text-gray-900">{height}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaPalette className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Complexion</p>
            <p className="font-semibold text-gray-900">{color}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaWeight className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Weight</p>
            <p className="font-semibold text-gray-900">{weight}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaTint className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Blood Group</p>
            <p className="font-semibold text-gray-900">{bloodGroup}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaGlobe className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Nationality</p>
            <p className="font-semibold text-gray-900">{nationality}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaBriefcase className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Occupation</p>
            <p className="font-semibold text-gray-900">
              {occupation} at {company}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaGraduationCap className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Education</p>
            <p className="font-semibold text-gray-900">{education}</p>
            <p className="text-sm text-gray-700">{university}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaPrayingHands className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Religion</p>
            <p className="font-semibold text-gray-900">{religion}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaUserFriends className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Marital Status</p>
            <p className="font-semibold text-gray-900">{maritalStatus}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaLanguage className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Languages</p>
            <p className="font-semibold text-gray-900">
              {languages.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
