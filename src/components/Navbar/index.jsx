import React from "react";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../../data/links";
import { Link } from "gatsby";
import logo from "../../assets/images/logo.svg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="web developer logo" />
          </a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map((link) => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;