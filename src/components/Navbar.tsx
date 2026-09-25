import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="nav-logo">
        JULIE.
      </Link>

      <div className="nav-links">
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <a
          href="https://github.com/jclie"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <Link
        to="/resume"
        className="resume-button"
      >
        Resume
      </Link>

    </nav>
  );
}

export default Navbar;