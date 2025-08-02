import React from "react";
import Tag from "./Tag";
import Button from "./Button";

type SolutionBlock = {
  title: string;
  description: string;
  imageSrc: string;
  reversed?: boolean;
  buttonleft?: string;
  buttonright?: string;
};

export default function SolutionBlock({
  title,
  description,
  imageSrc,
  reversed,
  buttonleft,
  buttonright,
}: SolutionBlock) {
  return (
    <section className="w-full py-20 bg-gray-50">
      {/* Outer container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Inner container */}
        <div
          className={`flex flex-col items-center gap-8 md:flex-row ${
            reversed ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Left side */}
          <div className="w-full md:w-1/2 text-left space-y-5">
            <h2 className="text-3xl font-bold leading-tighter">{title}</h2>
            <p className="text-gray-600 lg:text-md text-lg leading-8">
              {description}
            </p>
            {/* Buttons */}
            <div className="flex flex-row gap-3 mt-3">
              <Button variant="primary">{buttonleft}</Button>
              <Button variant="secondary">{buttonright}</Button>
            </div>
          </div>
          {/* Right side */}
          <div>
            <img
              src={imageSrc}
              alt="Feature visual"
              className="rounded-xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
