
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Trustees", path: "/trustees" },
    { name: "Objectives", path: "/objectives" },
    { name: "Contact", path: "/contact" },
    {name:"Donate", path:"/donate"}, 
  ];

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-blue-900">
          Trust Foundation
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path}>
              <span
                className={`cursor-pointer font-medium pb-1 transition
                ${
                  pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 cursor-pointer">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
              Signup
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-blue-900"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white px-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            onClick={() => setIsOpen(false)} // ✅ auto close
          >
            <div
              className={`py-2 border-b cursor-pointer
              ${
                pathname === link.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </div>
          </Link>
        ))}

        {/* Mobile Buttons */}
        <div className="mt-4 flex flex-col space-y-2">
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full border border-blue-600 text-blue-600 py-2 rounded">
              Login
            </button>
          </Link>

          <Link href="/signup" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Signup
            </button>  
          </Link>
        </div>
      </div>
    </nav>
  );
}