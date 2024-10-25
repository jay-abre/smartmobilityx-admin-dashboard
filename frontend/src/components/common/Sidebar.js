// src/components/common/Sidebar.js
import React from "react";
import { Users, ParkingCircle } from "lucide-react";
import { Button } from "../ui/Button";

function Sidebar({ activeTab, setActiveTab }) {
    return (
        <aside className="w-64 bg-white shadow-md">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-800">Smart Mobilitx X</h1>
            </div>
            <nav className="mt-6">
                <Button
                    variant={activeTab === "users" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("users")}
                >
                    <Users className="mr-2 h-4 w-4" />
                    Users
                </Button>
                <Button
                    variant={activeTab === "parking" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("parking")}
                >
                    <ParkingCircle className="mr-2 h-4 w-4" />
                    Parking Areas
                </Button>
            </nav>
        </aside>
    );
}

export default Sidebar;