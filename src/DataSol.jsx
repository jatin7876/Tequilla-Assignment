import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import stopwatchHero from "./assets/stopwatch-hero.jpg";

const slides = [
  {
    title: "Listing Millions Of Records In Milliseconds",
    description:
      "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam. amet, consetetur.",
  },
  {
    title: "Real-Time Data Processing At Scale",
    description:
      "Advanced analytics and processing capabilities for enterprise-level data solutions.",
  },
  {
    title: "Secure And Reliable Infrastructure",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee for your critical data.",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-[520px]">

        {/* LEFT SIDE EXACT LIKE IMAGE */}
        <div className="relative px-12 lg:px-16 py-12">

          {/* Big Title */}
          <h1 className="leading-none mb-6">
            <span className="block text-[#005792] text-5xl lg:text-6xl font-bold">
              About
            </span>
            <span className="block text-[#005792] text-6xl lg:text-7xl font-bold">
              Data X Solutions
            </span>
          </h1>

          {/* Stopwatch Image */}
          <img
            src={stopwatchHero}
            className="mt-6 w-full max-w-[350px] object-contain"
            alt="Stopwatch"
          />
        </div>

        {/* RIGHT SIDE → GRADIENT + SLIDER TEXT */}
        <div
          className="relative flex items-center px-10 lg:px-16 py-12"
          style={{
            background:
              "linear-gradient(to bottom, #5B9AC4 0%, #8DB9D5 100%)",
          }}
        >
          {/* Text Content */}
          <div className="text-white max-w-xl">

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              {slides[currentSlide].title}
            </h2>

            <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-10">
              {slides[currentSlide].description}
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-6">

              {/* Pagination */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-12 bg-white"
                        : "w-8 bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="bg-white text-[#005792] rounded-full h-9 w-9 flex items-center justify-center shadow hover:bg-white/90 transition"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>

                <button
                  onClick={nextSlide}
                  className="bg-white text-[#005792] rounded-full h-9 w-9 flex items-center justify-center shadow hover:bg-white/90 transition"
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default HeroSection;