import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  variant = "primary",
  children,
  onClick,
  className,
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded font-medium transition-shadows";

  const variants = {
    primary: "bg-blue-600 text-white shadow hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
    >
      {children}
    </button>
  );
}
