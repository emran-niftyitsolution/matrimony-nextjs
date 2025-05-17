import {
  FaChartLine,
  FaComments,
  FaGlobeAmericas,
  FaHandshake,
  FaHeart,
  FaSeedling,
} from "react-icons/fa";

interface Pledge {
  title: string;
  description: string;
  icon: string;
}

interface PledgesProps {
  pledges: Pledge[];
}

export default function Pledges({ pledges }: PledgesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FaHeart":
        return <FaHeart className="w-6 h-6 text-pink-500" />;
      case "FaSeedling":
        return <FaSeedling className="w-6 h-6 text-green-500" />;
      case "FaComments":
        return <FaComments className="w-6 h-6 text-blue-500" />;
      case "FaHandshake":
        return <FaHandshake className="w-6 h-6 text-purple-500" />;
      case "FaGlobeAmericas":
        return <FaGlobeAmericas className="w-6 h-6 text-indigo-500" />;
      case "FaChartLine":
        return <FaChartLine className="w-6 h-6 text-teal-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Pledges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pledges.map((pledge, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-white/80 p-3 rounded-lg shadow-sm">
                {getIcon(pledge.icon)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pledge.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {pledge.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
