"use client";

import Image from "next/image";
import { FaHeart, FaMapMarkerAlt, FaRegHeart, FaStar } from "react-icons/fa";

interface ProfileHeaderProps {
  name: string;
  age: number;
  location: string;
  rating: number;
  likes: number;
  photo: string;
  onRatingClick: () => void;
  onLikeClick: () => void;
  isLiked: boolean;
}

export default function ProfileHeader({
  name,
  age,
  location,
  rating,
  likes,
  photo,
  onRatingClick,
  onLikeClick,
  isLiked,
}: ProfileHeaderProps) {
  return (
    <div className="relative h-[60vh] bg-gradient-to-r from-pink-500 to-purple-500">
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-4 h-full flex items-end pb-20 relative z-10">
        <div className="flex items-end gap-8 w-full">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src={photo} alt={name} fill className="object-cover" />
          </div>
          <div className="text-white mb-4 flex-grow">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold mb-2">
                {name}, {age}
              </h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={onRatingClick}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all duration-300"
                >
                  <FaStar className="w-5 h-5 text-yellow-400" />
                  <span>Rate</span>
                </button>
                <button
                  onClick={onLikeClick}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all duration-300"
                >
                  {isLiked ? (
                    <FaHeart className="w-5 h-5 text-red-500" />
                  ) : (
                    <FaRegHeart className="w-5 h-5" />
                  )}
                  <span>{isLiked ? "Liked" : "Like"}</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="w-5 h-5 text-yellow-400" />
                <span>{rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="w-5 h-5" />
                <span>{likes} likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
