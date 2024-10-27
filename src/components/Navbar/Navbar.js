import { NavLink, Link } from "react-router-dom"
// css
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>

        {/* TODO: make Hamburger menu visible */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {" "}
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/locations">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
