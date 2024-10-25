// src/components/ui/DropdownMenu.js
import React, { useState, useRef, useEffect } from "react";

export function DropdownMenu({ children }) {
    return <div className="relative">{children}</div>;
}

export function DropdownMenuTrigger({ asChild, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref}>
            {React.cloneElement(children, {
                "aria-haspopup": "true",
                onClick: () => setIsOpen(!isOpen),
            })}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg">
                    {children.props.children[1]}
                </div>
            )}
        </div>
    );
}

export function DropdownMenuContent({ className, children }) {
    return <div className={className}>{children}</div>;
}

export function DropdownMenuLabel({ className, children }) {
    return <div className={`px-4 py-2 ${className}`}>{children}</div>;
}

export function DropdownMenuItem({ children, ...props }) {
    return (
        <button className="w-full text-left px-4 py-2 hover:bg-gray-100" {...props}>
            {children}
        </button>
    );
}

export function DropdownMenuSeparator() {
    return <div className="border-t border-gray-200 my-1"></div>;
}