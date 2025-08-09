import React from "react";
import StepCard from "./StepCard";

type Step = {
  icon?: React.ReactNode;
  stepLabel?: string;
  title: string;
  description: string;
};

type StepsSection = {
  heading: string;
  subheading: string;
  steps: Step[];
  className?: string;
};

export default function StepsSection({
  heading,
  subheading,
  steps,
  className,
}: StepsSection) {
  return (
    <section className={`w-full py-24 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-3 text-gray-600 leading-7">{subheading}</p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s, idx) => (
            <StepCard
              key={idx}
              icon={s.icon}
              stepLabel={s.stepLabel}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
