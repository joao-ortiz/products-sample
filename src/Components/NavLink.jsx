import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./NavLink/styles.css"

const NavLink = ({text, to, style, onClick}) => {
    return <Link onClick={onClick} to={to}>
        <p style={style} className="nav-link-text">{text}</p>
    </Link>
}

NavLink.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
}

export default NavLink