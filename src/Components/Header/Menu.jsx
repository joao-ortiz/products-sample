import React from "react"
import FadeInText from "../FadeInText"
import NavLink from "../NavLink"
import PropTypes from "prop-types"
import "./Menu/styles.css"

const Menu = ({open, close}) => {
    return <div className={open ? "menu-container" : "menu-container hidden"}>
            <FadeInText text="MENU" style={{color: "black", fontSize: "12vw", marginTop: "10vh", height: "30vh"}} noScroll />
            <div className="menu-links">
                <NavLink onClick={close} text="watermelon" to="product/1" style={{height: "10vh", fontSize: "4vw", marginBottom: "1rem", color: "#231F20"}}/>
                <NavLink onClick={close} text="grapefruit" to="product/2" style={{height: "10vh", fontSize: "4vw", marginBottom: "1rem", color: "#231F20"}}/>
                <NavLink onClick={close} text="strawberry" to="product/3" style={{height: "10vh", fontSize: "4vw", marginBottom: "1rem", color: "#231F20"}}/>
                <NavLink onClick={close} text="kiwi" to="product/4" style={{height: "10vh", fontSize: "4vw", marginBottom: "1rem", color: "#231F20"}}/>
            </div>
        </div> 
}

Menu.propTypes = { 
    open: PropTypes.bool,
    close: PropTypes.func
}

export default Menu