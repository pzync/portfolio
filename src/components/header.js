import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="HeaderGroup">
      <div className="SiteTitleContainer">
        <h1>
          <Link to="/" className="SiteTitle">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <nav className="SiteNav">
        <Link to="/work" className="NavLink">
          Work
        </Link>
        <Link to="#writing" className="NavLink">
          Writing
        </Link>
        <Link to="/cabinet" className="NavLink">
          Cabinet
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
