import React from "react";
import PropTypes from "prop-types"
import FadeInText from "../../Components/FadeInText";
import "./ProductHeadline/styles.css"

const ProductHeadline = ({name, price, description, id}) => {

    const productImage = require(`../../Assets/product${id}.png`)
    const formatPrice = price.toFixed(2)
    return <div className="headline-product-container">
        <div className="product-image-headline" style={{backgroundImage: `url(${productImage})`}}/>
        <FadeInText text={name} style={{textTransform: "uppercase", color: "#231F20" ,fontSize: "10vw", position: 'absolute', top: "2vw", right: "5vw", textShadow: "0px 0px 0px rgba(255,255,255,1)"}} noScroll/>
        <div className="product-information">
            <FadeInText text={`$${formatPrice} USD`} style={{fontSize: "3vw", width: "70%", marginBottom: "2vw"}} timeout={300} noScroll/>
            <FadeInText text={description} style={{fontSize: "1.4rem", textTransform: "uppercase", width: "70%"}} timeout={500} noScroll/>
        </div>
    </div>
}

ProductHeadline.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number
}

export default ProductHeadline