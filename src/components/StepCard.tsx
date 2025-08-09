import React from "react";

type StepCardProps = {
  icon?: React.ReactNode;
  stepLabel?: string;
  title: string;
  description: string;
  className?: string;
};

export default function StepCard({
  icon,
  stepLabel,
  title,
  description,
  className,
}: StepCardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 p-6 shadow-sm bg-white ${
        className || ""
      }`}
    >
      {stepLabel && (
        <p className="text-xs font-semibold tracking-wide text-blue-700 mb-2">
          {stepLabel}
        </p>
      )}
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-6">{description}</p>
    </div>
  );
}
