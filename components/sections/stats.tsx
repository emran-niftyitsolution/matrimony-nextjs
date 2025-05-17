"use client";

import { FaFemale, FaHeart, FaMale, FaUsers } from "react-icons/fa";

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Total Biodata */}
          <div className="group p-8 rounded-2xl bg-white shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-50 group-hover:bg-pink-100 transition-colors duration-300 mb-6">
              <FaUsers className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-4xl font-bold text-pink-600 mb-2">25K+</h3>
            <p className="text-gray-700 font-medium">Total Biodata</p>
          </div>

          {/* Male Biodata */}
          <div className="group p-8 rounded-2xl bg-white shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300 mb-6">
              <FaMale className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-4xl font-bold text-blue-600 mb-2">12K+</h3>
            <p className="text-gray-700 font-medium">Male Biodata</p>
          </div>

          {/* Female Biodata */}
          <div className="group p-8 rounded-2xl bg-white shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300 mb-6">
              <FaFemale className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-4xl font-bold text-purple-600 mb-2">13K+</h3>
            <p className="text-gray-700 font-medium">Female Biodata</p>
          </div>

          {/* Total Couples */}
          <div className="group p-8 rounded-2xl bg-white shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50 group-hover:bg-red-100 transition-colors duration-300 mb-6">
              <FaHeart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-4xl font-bold text-red-600 mb-2">10K+</h3>
            <p className="text-gray-700 font-medium">Happy Couples</p>
          </div>
        </div>
      </div>
    </section>
  );
}
