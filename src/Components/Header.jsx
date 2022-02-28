import React, { useState } from "react"
import Menu from "./Header/Menu"
import "./Header/styles.css"
import { Link } from "react-router-dom"
const Header = () => {
    const [open, setOpen] = useState(false)

    return <nav className="navigation-container">
        <Link to="/products-sample/">
            <h2 className="header-title">
                POPSS
            </h2>
        </Link>
        <button className={!open ? "open-menu-button" : "open-menu-button menu-is-open" } onClick={() => setOpen(prev => !prev)}>
            <span className="menu-hmb one" />
            <span className="menu-hmb two" />
            <span className="menu-hmb three" />
        </button>
        <Menu close={() => setOpen(false)} open={open} />
    </nav>
}

export default Header