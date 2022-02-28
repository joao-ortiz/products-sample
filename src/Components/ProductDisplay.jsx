import React from "react"
import PropTypes from "prop-types"
import FadeInText from "./FadeInText"
import { Link } from "react-router-dom"
import "./ProductDisplay/styles.css"
const ProductDisplay = ({product, styles, to}) => {
    const {image, name} = product
    const imageUrl = require(`../Assets/${image}.png`)
    return <Link to={`/product/${to}`}> 
        <div style={styles} className="product-container">
            <div style={{backgroundImage: `url("${imageUrl}")`}} className="product-image"></div>
            <FadeInText style={{fontSize: "2vw", position: "absolute", top: "0", color: "white", left:"50%",transform: "translateX(-50%)"}} text={name} />
        </div>
    </Link>
}

ProductDisplay.propTypes ={
    product: PropTypes.object,
    styles: PropTypes.object,
    to: PropTypes.string
}

export default ProductDisplay