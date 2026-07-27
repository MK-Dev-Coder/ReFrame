import { Link, NavLink } from "react-router-dom";

const LINKS = [
  ["/", "Home"],
  ["/about", "About"],
  ["/reconstructions", "Reconstructions"],
];

export default function NavBar() {
  return (
    <header className="nav">
      <Link to="/" className="wordmark">
        ReFrame<span className="wordmark-dot">·</span>
        <span className="wordmark-sub">reconstruction project</span>
      </Link>
      <nav className="nav-links">
        {LINKS.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
