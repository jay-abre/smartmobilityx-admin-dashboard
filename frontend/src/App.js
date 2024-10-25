// src/App.js
import React, { useState } from "react";
import { Bell, LogOut, Menu, ParkingCircle, Settings, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/Avatar";
import { Button } from "./components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/DropdownMenu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/Table";
import { mockUsers, mockParkingAreas } from "./data/mockData";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
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

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-white shadow-sm">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-6 w-6" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="profile.jpg" alt="@johndoe" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <h3 className="text-gray-700 text-3xl font-medium">
                {activeTab === "users" ? "Users" : "Parking Areas"}
              </h3>

              {activeTab === "users" && (
                  <div className="mt-8">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockUsers.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">{user.name}</TableCell>
                              <TableCell>{user.email}</TableCell>
                              <TableCell>{user.role}</TableCell>
                            </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
              )}

              {activeTab === "parking" && (
                  <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {mockParkingAreas.map((area) => (
                        <div key={area.id} className="bg-white rounded-lg shadow-md p-6">
                          <h4 className="text-xl font-semibold mb-2">{area.name}</h4>
                          <p className="text-gray-600">Capacity: {area.capacity}</p>
                          <p className="text-gray-600">Available: {area.available}</p>
                          <div className="mt-4 bg-gray-200 h-2 rounded-full">
                            <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${(area.available / area.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                    ))}
                  </div>
              )}
            </div>
          </main>
        </div>
      </div>
  );
}

export default AdminDashboard;