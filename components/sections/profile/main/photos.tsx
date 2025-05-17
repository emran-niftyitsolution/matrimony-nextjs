"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";

interface PhotosProps {
  photos: string[];
  name: string;
}

export default function Photos({ photos, name }: PhotosProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [modalEmblaRef, modalEmblaApi] = useEmblaCarousel({ loop: true });
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const modalScrollPrev = useCallback(() => {
    if (modalEmblaApi) modalEmblaApi.scrollPrev();
  }, [modalEmblaApi]);

  const modalScrollNext = useCallback(() => {
    if (modalEmblaApi) modalEmblaApi.scrollNext();
  }, [modalEmblaApi]);

  const openModal = (index: number) => {
    // setSelectedPhotoIndex(index);
    setIsModalOpen(true);
    if (modalEmblaApi) {
      modalEmblaApi.scrollTo(index);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Photos</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_33.33%] min-w-0 pl-4 first:pl-0"
                >
                  <div className="aspect-square relative rounded-xl overflow-hidden group">
                    <Image
                      src={photo}
                      alt={`${name}'s photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => openModal(index)}
                        className="bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                      >
                        <FaExpand className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-4xl mx-4">
            <div className="overflow-hidden" ref={modalEmblaRef}>
              <div className="flex">
                {photos.map((photo, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={photo}
                        alt={`${name}'s photo ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={modalScrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={modalScrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
