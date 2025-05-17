interface OccupationalInfo {
  currentPosition: string;
  company: string;
  department: string;
  joiningYear: number;
  responsibilities: string[];
  achievements: string[];
  salary: string;
  workLocation: string;
}

interface OccupationProps {
  info: OccupationalInfo;
}

export default function Occupation({ info }: OccupationProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Occupational Information
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Current Position</p>
            <p className="font-semibold text-gray-900">
              {info.currentPosition}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Company</p>
            <p className="font-semibold text-gray-900">{info.company}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Department</p>
            <p className="font-semibold text-gray-900">{info.department}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Joining Year</p>
            <p className="font-semibold text-gray-900">{info.joiningYear}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Salary</p>
            <p className="font-semibold text-gray-900">{info.salary}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Work Location</p>
            <p className="font-semibold text-gray-900">{info.workLocation}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Responsibilities
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {info.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Achievements
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
