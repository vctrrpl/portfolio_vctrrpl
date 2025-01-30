import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-slate-900 to-slate-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
        {/* Logo aligned to the left */}
        <div className="flex-shrink-0">
          <a href="/" className="logo">
            <img src={logo} alt="logo" className="w-10 h-10" />
          </a>
        </div>

        {/* Menu centered */}
        <div className="hidden md:flex justify-center flex-grow">
          <Navbar />
        </div>

        {/* Button aligned to the right */}
        <div className="flex-shrink-0">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Get in Touch!
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="menu-btn" onClick={null}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
}
