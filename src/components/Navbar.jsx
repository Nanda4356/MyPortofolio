import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onScroll }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 fixed top-0 z-40">
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown">
          <button
            className="btn btn-ghost md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Dropdown menu */}
          {open && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link onClick={() => { onScroll("home"); setOpen(false); }}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => { onScroll("about"); setOpen(false); }}>
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => { onScroll("skills"); setOpen(false); }}>
                  Skills
                </Link>
              </li>
              <li>
                <Link onClick={() => { onScroll("contact"); setOpen(false); }}>
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <a href="/" className="btn btn-ghost text-xl">
          Nanda
        </a>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link onClick={() => onScroll("home")} to='/'>Home</Link></li>
          <li><Link onClick={() => onScroll("about")} to='/about'>About</Link></li>
          <li><Link onClick={() => onScroll("skills")} to='/skill'>Skills</Link></li>
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-2 rounded-lg">
        <Link
          className="btn btn-primary text-white"
          onClick={() => onScroll("contact")}
        >
          Download CV
        </Link>
      </div>
    </div>
  );
}
