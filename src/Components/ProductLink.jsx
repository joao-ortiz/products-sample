import React, { useLayoutEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Divider from "./Divider"
import "./ProductLink/styles.css"

const ProductLink = ({text, id, label, mouse}) => {
    const [visible, setVisible] = useState("hidden-link")
    const [showMouse, setMouse] = useState(false)
    const containerRef = useRef(null) ?? "ref"
    const onScroll = () => {
        const top = containerRef.current.getBoundingClientRect().top
        if(top - (window.innerHeight / 2) < 140) {
                setVisible("")
                return null
            }
        setVisible("hidden-link")
        return null
    }

    const linkFloatImage = require(`../Assets/product${id}bg.jpg`)

    useLayoutEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll, true)
    },[])

    return <Link onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}   to={`/product/${id}`}>
        <div ref={containerRef} className={"product-link-container " + visible}>
            <span className="pre-icon">{label}</span>
            <p className="link-product-text">{text}</p>
            <span className="after-icon" />
            <Divider transitionOnScroll style={{position: "absolute", bottom: 0, left: 0, borderColor: "transparent", borderBottom: "none !important", borderLeft: "none !important", borderRight: "none !important"}}/>
        </div>
        {showMouse ? <div className="floating-image" style={{backgroundImage: `url(${linkFloatImage})`, top: `${mouse.y}px`, left: `${mouse.x}px`}} /> : null}  
    </Link>
}

export default ProductLink

ProductLink.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number,
    label: PropTypes.string,
    mouse: PropTypes.object
}
