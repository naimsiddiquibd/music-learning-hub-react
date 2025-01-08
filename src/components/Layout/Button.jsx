// src/components/Button.jsx
import React from "react";

const Button = ({
  type = "button", // Default to "button"
  onClick,
  children,
  variant = "primary", // Default variant
  className = "",
  disabled = false,
}) => {
  // Define Tailwind styles based on the variant
  const baseStyles =
    "px-4 py-2 rounded text-white font-medium transition duration-200 ease-in-out";

  const variants = {
    primary: "bg-[#B63FA1] font-light text-sm cursor-pointer",
    secondary: "border-[#B63FA1] border-2 hover:bg-[#B63FA1] hover:text-white text-gray-900 font-light text-sm cursor-pointer",
    danger: "bg-red-500 hover:bg-red-600",
    success: "bg-green-500 hover:bg-green-600",
  };

  // Merge the styles
  const styles = `${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""
    } ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
