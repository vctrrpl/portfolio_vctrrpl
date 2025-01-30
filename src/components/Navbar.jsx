import { useRef } from 'react';

export default function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink,
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link',
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
    },
  ];

  return (
    <nav className={`navbar${navOpen ? ' active' : ''}`}>
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          ref={item.ref}
          className={item.className}
          onClick={(e) => e.preventDefault()}
        >
          {item.label}
        </a>
      ))}
      <div ref={activeBox} className="active-box"></div>
    </nav>
  );
}
