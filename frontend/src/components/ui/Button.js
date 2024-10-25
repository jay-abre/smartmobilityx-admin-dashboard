// src/components/ui/Button.js
import React from "react";

export function Button({ variant, size, className, children, ...props }) {
    const baseStyles = "px-4 py-2 rounded focus:outline-none";
    const variantStyles = {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
        ghost: "bg-transparent text-gray-700",
    };
    const sizeStyles = {
        icon: "p-2",
        default: "px-4 py-2",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}