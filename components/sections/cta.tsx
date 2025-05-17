"use client";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
          Ready to Find Your Soulmate?
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-500 mb-8 max-w-2xl mx-auto">
          Join our community and start your journey to finding true love today.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
        >
          Create Your Profile
        </Button>
      </div>
    </section>
  );
}
