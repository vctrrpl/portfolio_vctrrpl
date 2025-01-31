import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section className="h-[600px] flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Victor Ivo Paul 🇲🇾</h1>
      <p className="text-lg mb-6 text-center max-w-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        blanditiis commodi fugit! Aliquam dolore eius, fugiats.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="flex items-center text-white bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-[14px] px-5 py-2 text-sm shadow-md hover:scale-105 transition"
        >
          Download CV
          <FontAwesomeIcon icon={faDownload} className="ml-2" />
        </a>
        <a
          href="#"
          className="flex items-center border border-white/30 bg-white/30 rounded-[14px] px-5 py-2 text-sm shadow-md hover:scale-105 transition"
        >
          Scroll Down <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
        </a>
      </div>
    </section>
  );
}
