import React from "react";
import FeatureCard from "./FeatureCard";
import Tag from "./Tag";

const featuresData = [
  {
    title: "Impact",
    subtitle: "Reach more people, make a difference.",
    imgSrc: "/impactimage.png",
    description:
      "Over 1 billion people worldwide live with some form of disability and number is slowly rising . An accessible website ensures you’re not excluding potential users, customers, or contributors.",
  },
  {
    title: "Compliance",
    subtitle: "Avoid lawsuits, meet global standards.",
    imgSrc: "/complianceimage.png",
    description:
      "Laws like the Accessibility for Ontarians with Disabilities Act (AODA) and ADA require WCAG compliance. Our tool helps you spot and fix issues before they become liabilities.",
  },
  {
    title: "Inclusion",
    subtitle: "Design that cares — for everyone.",
    imgSrc: "/inclusionimage.png",
    description:
      "Accessibility improves the experience for all users — from those using screen readers to someone navigating with one hand on mobile. Inclusive design is just good design.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-10 px-4 mt-4 mb-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 flex flex-col gap-1">
          <Tag className="mx-auto">Why Accessibility Matters?</Tag>
          <h2 className="text-4xl font-bold leading-tighter">
            Inclusive Design. Legal Safety. Better UX.
          </h2>
          <p className="text-gray-600 lg:text-lg text-lg leading-8">
            Accessibility isn’t an afterthought — it’s a commitment to better
            user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
