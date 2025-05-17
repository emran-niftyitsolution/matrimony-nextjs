import { FaHome, FaUserCircle, FaUserTie, FaUsers } from "react-icons/fa";

interface FamilyMember {
  name: string;
  occupation: string;
  education?: string;
  maritalStatus?: string;
  company?: string;
  alive?: boolean;
  age?: number;
}

interface FamilyMemberInfo {
  name: string;
  occupation: string;
  education: string;
}

interface UncleAunt {
  name: string;
  occupation: string;
  maritalStatus: string;
}

interface FamilyMembers {
  grandfather: FamilyMemberInfo;
  grandmother: FamilyMemberInfo;
  uncles: UncleAunt[];
  aunts: UncleAunt[];
}

interface FamilyBackground {
  origin: string;
  siblings: number;
  familyType: string;
  familyValues: string;
  familyStatus: string;
  nativePlace: string;
  familyBusiness: string;
  familyHistory: string;
  propertyDetails: string;
  familyMembers: FamilyMembers;
}

interface Family {
  father: FamilyMember;
  mother: FamilyMember;
  brothers: FamilyMember[];
  sisters: FamilyMember[];
  fatherFamily: FamilyBackground;
  motherFamily: FamilyBackground;
}

interface FamilyProps {
  family: Family;
}

export default function Family({ family }: FamilyProps) {
  return (
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
              {family.father.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Occupation:</span>{" "}
              {family.father.occupation}
            </p>
            {family.father.company && (
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Company:</span>{" "}
                {family.father.company}
              </p>
            )}
            {family.father.education && (
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Education:</span>{" "}
                {family.father.education}
              </p>
            )}
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
              {family.mother.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Occupation:</span>{" "}
              {family.mother.occupation}
            </p>
            {family.mother.education && (
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">Education:</span>{" "}
                {family.mother.education}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Siblings Information */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <FaUsers className="w-6 h-6 text-pink-600" />
          <h3 className="text-xl font-semibold text-gray-900">Siblings</h3>
        </div>

        {/* Brothers Section */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Brothers</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {family.brothers.map((brother, index) => (
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
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Sisters</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {family.sisters.map((sister, index) => (
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
                <span className="font-semibold text-gray-900">Origin:</span>{" "}
                {family.fatherFamily.origin}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Native Place:
                </span>{" "}
                {family.fatherFamily.nativePlace}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family Type:
                </span>{" "}
                {family.fatherFamily.familyType}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family Values:
                </span>{" "}
                {family.fatherFamily.familyValues}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family Status:
                </span>{" "}
                {family.fatherFamily.familyStatus}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family Business:
                </span>{" "}
                {family.fatherFamily.familyBusiness}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family History:
                </span>{" "}
                {family.fatherFamily.familyHistory}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Property Details:
                </span>{" "}
                {family.fatherFamily.propertyDetails}
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
                      {family.fatherFamily.familyMembers.grandfather.name} -{" "}
                      {family.fatherFamily.familyMembers.grandfather.occupation}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">
                        Grandmother:
                      </span>{" "}
                      {family.fatherFamily.familyMembers.grandmother.name} -{" "}
                      {family.fatherFamily.familyMembers.grandmother.occupation}
                    </p>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <p className="font-semibold text-gray-900 mb-2">Uncles</p>
                  <div className="space-y-2">
                    {family.fatherFamily.familyMembers.uncles.map(
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
                  <p className="font-semibold text-gray-900 mb-2">Aunts</p>
                  <div className="space-y-2">
                    {family.fatherFamily.familyMembers.aunts.map(
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
                <span className="font-semibold text-gray-900">Origin:</span>{" "}
                {family.motherFamily.origin}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Native Place:
                </span>{" "}
                {family.motherFamily.nativePlace}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family Type:
                </span>{" "}
                {family.motherFamily.familyType}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family Values:
                </span>{" "}
                {family.motherFamily.familyValues}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family Status:
                </span>{" "}
                {family.motherFamily.familyStatus}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family Business:
                </span>{" "}
                {family.motherFamily.familyBusiness}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Family History:
                </span>{" "}
                {family.motherFamily.familyHistory}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Property Details:
                </span>{" "}
                {family.motherFamily.propertyDetails}
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
                      {family.motherFamily.familyMembers.grandfather.name} -{" "}
                      {family.motherFamily.familyMembers.grandfather.occupation}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold text-gray-900">
                        Grandmother:
                      </span>{" "}
                      {family.motherFamily.familyMembers.grandmother.name} -{" "}
                      {family.motherFamily.familyMembers.grandmother.occupation}
                    </p>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                  <p className="font-semibold text-gray-900 mb-2">Uncles</p>
                  <div className="space-y-2">
                    {family.motherFamily.familyMembers.uncles.map(
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
                  <p className="font-semibold text-gray-900 mb-2">Aunts</p>
                  <div className="space-y-2">
                    {family.motherFamily.familyMembers.aunts.map(
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
  );
}
