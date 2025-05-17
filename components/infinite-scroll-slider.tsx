"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const successStories = [
  {
    id: 1,
    names: "Ahmed & Fatima",
    date: "Married Jan 2025",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&h=600&q=80",
    story:
      "Found each other through the platform and instantly connected. Our values and life goals aligned perfectly. The journey from our first conversation to our wedding day was magical.",
  },
  {
    id: 2,
    names: "Rahul & Priya",
    date: "Married Mar 2025",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&h=600&q=80",
    story:
      "After months of searching, we found our perfect match here. Our families couldn't be happier! The platform's compatibility matching made all the difference in finding true love.",
  },
  {
    id: 3,
    names: "Michael & Sarah",
    date: "Married Feb 2025",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&h=600&q=80",
    story:
      "The platform's matching system really works! We share so many common interests and values. Every day we thank this platform for bringing us together.",
  },
  {
    id: 4,
    names: "Karim & Nadia",
    date: "Married Apr 2025",
    image:
      "https://images.unsplash.com/photo-1609151162377-794faf68b02f?auto=format&fit=crop&w=800&h=600&q=80",
    story:
      "We're grateful to have found each other here. The journey to marriage was smooth and beautiful. The support from the platform made our search for love so much easier.",
  },
  {
    id: 5,
    names: "David & Lisa",
    date: "Married May 2025",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&h=600&q=80",
    story:
      "From the first message to our wedding day, everything felt just right. Thank you for bringing us together! We couldn't have asked for a better way to find our soulmate.",
  },
  {
    id: 6,
    names: "Hassan & Aisha",
    date: "Married Jun 2025",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&h=600&q=80",
    story:
      "Our story proves that true love knows no boundaries. We're living our dream life together. This platform helped us find exactly what we were looking for in a life partner.",
  },
];

export function InfiniteScrollSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 1;
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0;
        scrollContainer.scrollTo({ left: 0, behavior: "instant" });
      } else {
        scrollContainer.scrollTo({ left: scrollPos, behavior: "smooth" });
      }
    };

    const interval = setInterval(scroll, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
          Success Stories
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-6 pb-5 overflow-x-hidden whitespace-nowrap"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* First set of items */}
          {successStories.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
          {/* Duplicate set for seamless loop */}
          {successStories.map((story) => (
            <StoryCard key={`${story.id}-duplicate`} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryCard({
  names,
  date,
  image,
  story,
}: {
  names: string;
  date: string;
  image: string;
  story: string;
}) {
  return (
    <div className="inline-flex flex-col w-[400px] bg-white rounded-2xl shadow-sm border border-pink-100/50 hover:shadow-2xl transition-all duration-300 hover:border-pink-200">
      <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
        <Image
          src={image}
          alt={names}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {names}
          </h3>
          <p className="text-sm font-medium text-pink-500">{date}</p>
        </div>
        <p className="text-gray-700 whitespace-normal line-clamp-4 leading-relaxed">
          {story}
        </p>
      </div>
    </div>
  );
}
