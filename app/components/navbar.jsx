"use client";
// @flow strict
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#skills", label: "SKILLS" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#education", label: "EDUCATION" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav className="bg-transparent relative z-50">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            aria-label="Abhishek Mourya - Home"
            className="text-[#16f2b3] text-3xl font-bold tracking-tight hover:text-white transition-colors"
          >
            AM
          </Link>
        </div>

        <div className="mobile-menu block md:hidden">
          <button
            type="button"
            aria-label={navbarOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center p-2 border rounded border-slate-300 text-slate-200 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            {navbarOpen ? (
              <FaXmark className="h-5 w-5" />
            ) : (
              <GiHamburgerMenu className="h-5 w-5" />
            )}
          </button>
        </div>

        <ul
          className={`mt-4 w-full flex-col items-start text-sm mob-menu ${
            navbarOpen ? "active" : "hidden"
          } md:flex md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100`}
          id="navbar-default"
        >
          {navLinks.map((link) => (
            <li key={link.href} className="w-full md:w-auto">
              <a
                className="block px-4 py-2 no-underline outline-none hover:no-underline text-center md:text-left"
                href={link.href}
                onClick={() => setNavbarOpen(false)}
              >
                <div className="text-sm font-medium text-white transition-colors duration-300 hover:text-pink-500 tracking-wider">
                  {link.label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
