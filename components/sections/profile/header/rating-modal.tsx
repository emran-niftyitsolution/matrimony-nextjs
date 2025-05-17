"use client";

import { FaRegStar, FaStar } from "react-icons/fa";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRating: number;
  onRatingChange: (rating: number) => void;
  onSubmit: () => void;
}

export default function RatingModal({
  isOpen,
  onClose,
  userRating,
  onRatingChange,
  onSubmit,
}: RatingModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Rate Profile</h3>
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => onRatingChange(star)}
              className="text-3xl transition-transform hover:scale-110"
            >
              {star <= userRating ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaRegStar className="text-gray-300" />
              )}
            </button>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  );
}
