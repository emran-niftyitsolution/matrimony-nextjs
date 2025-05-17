interface InterestsProps {
  interests: string[];
}

export default function Interests({ interests }: InterestsProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Interests</h2>
      <div className="flex flex-wrap gap-3">
        {interests.map((interest, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-medium"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
}
