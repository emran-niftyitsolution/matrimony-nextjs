interface ExpectedPartner {
  ageRange: string;
  height: string;
  education: string;
  occupation: string;
  maritalStatus: string;
  religion: string;
  location: string;
  familyType: string;
  otherPreferences: string[];
}

interface ExpectedPartnerProps {
  partner: ExpectedPartner;
}

export default function ExpectedPartner({ partner }: ExpectedPartnerProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Expected Life Partner
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Age Range</p>
            <p className="font-semibold text-gray-900">{partner.ageRange}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Height</p>
            <p className="font-semibold text-gray-900">{partner.height}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Education</p>
            <p className="font-semibold text-gray-900">{partner.education}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Occupation</p>
            <p className="font-semibold text-gray-900">{partner.occupation}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Marital Status</p>
            <p className="font-semibold text-gray-900">
              {partner.maritalStatus}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Religion</p>
            <p className="font-semibold text-gray-900">{partner.religion}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-semibold text-gray-900">{partner.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Family Type</p>
            <p className="font-semibold text-gray-900">{partner.familyType}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Other Preferences
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {partner.otherPreferences.map((pref, index) => (
              <li key={index}>{pref}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
