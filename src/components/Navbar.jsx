import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// Menu items array
const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Work', href: '#' },
  { name: 'Reviews', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 relative">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-10 w-auto flex-shrink-0" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center backdrop-blur-md bg-neutral-100/50 dark:bg-neutral-800/50 rounded-2xl shadow-xl shadow-black/5 border border-neutral-400/10 ml-20 px-4 py-2">
        <ul className="flex gap-4">
          {menuItems.slice(0, 3).map((item) => (
            <NavbarLink key={item.name} href={item.href}>
              {item.name}
            </NavbarLink>
          ))}
        </ul>
      </div>

      {/* Desktop Button */}
      <a
        href="#"
        className="hidden md:inline-block text-white bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-[14px] px-5 py-2 text-sm shadow-md hover:scale-105 transition"
      >
        Get in Touch!
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="text-neutral-800 dark:text-neutral-300 p-2"
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed right-4 top-20 w-40 bg-neutral-100/95 dark:bg-neutral-800/95 backdrop-blur-lg z-50 rounded-2xl border border-neutral-400/10 shadow-xl"
        >
          <div className="py-4">
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <MobileNavLink
                  key={item.name}
                  href={item.href}
                  onClick={toggleMenu}
                >
                  {item.name}
                </MobileNavLink>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

// Reusable Navbar Link Component
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

// Mobile Nav Link Component
function MobileNavLink({ href, children, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="block mx-2 py-2 px-4 text-sm rounded-[12px] transition-all
               text-neutral-800 dark:text-neutral-300
               hover:text-white hover:bg-gradient-to-b hover:from-indigo-500 hover:to-indigo-600
               hover:shadow-md active:scale-95"
      >
        {children}
      </a>
    </li>
  );
}
