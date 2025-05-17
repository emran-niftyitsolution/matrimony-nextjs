interface Qualification {
  degree: string;
  institution: string;
  year: string;
  result: string;
  achievements?: string[];
}

interface EducationProps {
  qualifications: Qualification[];
}

export default function Education({ qualifications }: EducationProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Educational Qualifications
      </h2>
      <div className="space-y-6">
        {qualifications.map((edu, index) => (
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
  );
}
