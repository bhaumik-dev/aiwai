import React from "react";

type FeatureCardProps = {
  children?: React.ReactNode;
  className?: string;
  title: string;
  subtitle: string;
  imgSrc?: string;
  description: string;
};

export default function FeatureCard({
  title,
  subtitle,
  imgSrc,
  description,
}: FeatureCardProps) {
  return (
    <div className="p-6">
      <h3 className="text-2xl text-black-600 font-semibold leading-tight ">
        {title}
      </h3>
      <p className="text-gray-500 mb-2 text-lg">{subtitle}</p>
      <img
        src={imgSrc}
        alt={title}
        className="w-full my-4 border-1 rounded-md"
      />
      <p className="text-md text-gray-700">{description}</p>
    </div>
  );
}
