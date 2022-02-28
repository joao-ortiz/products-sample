import React from "react"
import { Link } from "react-router-dom"
import Divider from "./Divider"
import "./CustomLink/styles.css"
import PropTypes from "prop-types"

const CustomLink = ({text, style, to}) => {
    return <Link to={to}>
        <div style={style} className="link-custom-container">
            <p className="link-custom-text">{text}</p>
            <span className="arrow-button" />
            <Divider style={{position: "absolute", bottom: 0, left: 0}} />
        </div>
    </Link>
}

CustomLink.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    to: PropTypes.string
}

export default CustomLink