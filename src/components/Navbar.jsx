import React from 'react';
import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-6 pt-4">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu with background */}
      <div className="hidden md:flex items-center backdrop-blur-md bg-neutral-100/50 dark:bg-neutral-800/50 rounded-2xl shadow-xl shadow-black/5 border border-neutral-400/10 px-4 py-2">
        <ul className="flex gap-4">
          <NavbarLink href="#">Home</NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Work</NavbarLink>
        </ul>
      </div>

      {/* Button (right side) */}
      <a
        href="#"
        className="hidden md:inline-block text-white bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-[14px] px-5 py-2 text-sm shadow-md hover:scale-105 transition"
      >
        Get in Touch!
      </a>

      {/* Mobile Menu Button (Optional) */}
      <div className="md:hidden">
        <button className="text-neutral-800 dark:text-neutral-300">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}

function NavbarLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="relative inline-flex text-sm px-4 py-2 rounded-[14px] transition-all text-neutral-800 dark:text-neutral-300 
              hover:text-white hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600 hover:shadow-md hover:scale-105"
      >
        {children}
      </a>
    </li>
  );
}
