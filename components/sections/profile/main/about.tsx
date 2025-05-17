interface AboutProps {
  about: string;
}

export default function About({ about }: AboutProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
      <p className="text-gray-700 leading-relaxed">{about}</p>
    </div>
  );
}
