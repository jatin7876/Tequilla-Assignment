import React from "react";
import caseStudy1 from "./assets/case-study-1.jpg";
import caseStudy2 from "./assets/case-study-2.jpg";
import caseStudy3 from "./assets/case-study-3.jpg";

const caseStudies = [
  {
    id: 1,
    title: "Social Finance: A Decentralized Creators Economy",
    date: "18 Nov 2021",
    image: caseStudy1,
  },
  {
    id: 2,
    title: "Switzerland-Wide Rollout Of Digital Authorization For Unmanned Aer...",
    date: "18 Mar 2021",
    image: caseStudy2,
  },
  {
    id: 3,
    title: "Poisson Distribution - Adapting For Different Intervals",
    date: "18 Nov 2021",
    image: caseStudy3,
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-12 leading-none">
          Case <br /> Studies
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group cursor-pointer overflow-hidden bg-white border border-gray-200 rounded-xl shadow hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="pt-4 pb-6 px-4 border-b-4 border-orange-500">
                <h3 className="text-blue-700 text-lg font-semibold mb-2 line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-gray-500 text-sm">{study.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
