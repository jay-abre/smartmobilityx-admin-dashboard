// src/components/ui/Avatar.js
import React from "react";

export function Avatar({ className, children }) {
    return <div className={`relative ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt }) {
    return <img className="rounded-full" src={src} alt={alt} />;
}

export function AvatarFallback({ children }) {
    return <div className="rounded-full bg-gray-200 flex items-center justify-center">{children}</div>;
}