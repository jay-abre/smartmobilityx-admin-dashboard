// src/components/ui/Table.js
import React from "react";

export function Table({ children }) {
    return <table className="min-w-full bg-white">{children}</table>;
}

export function TableHeader({ children }) {
    return <thead className="bg-gray-100">{children}</thead>;
}

export function TableBody({ children }) {
    return <tbody>{children}</tbody>;
}

export function TableRow({ children }) {
    return <tr className="border-b">{children}</tr>;
}

export function TableHead({ children }) {
    return <th className="text-left px-4 py-2">{children}</th>;
}

export function TableCell({ children, className }) {
    return <td className={`px-4 py-2 ${className}`}>{children}</td>;
}