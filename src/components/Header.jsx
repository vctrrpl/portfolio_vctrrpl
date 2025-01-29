import React from 'react';
import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-slate-900 to-slate-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <a href="/" className="logo">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </a>

        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={null}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <a href="#contact" className="">
          Get in Touch!
        </a>
      </div>
    </header>
  );
}
