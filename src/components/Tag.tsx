import React from "react";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Tag({ children, className }: TagProps) {
  const baseStyles =
    "inline-block self-start bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4";

  return <div className={`${baseStyles} ${className || ""}`}>{children}</div>;
}
