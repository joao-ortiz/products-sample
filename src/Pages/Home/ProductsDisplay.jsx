import React, { useLayoutEffect, useRef, useState } from "react"
import ProductDisplay from "../../Components/ProductDisplay"
import FadeInText from "../../Components/FadeInText"
import "./ProductsDisplay/styles.css"

const ProductsDisplay = () => {
    const [style, setStyle] = useState({animation: "none", opacity: 0})
    const displaysRef = useRef(null) ?? "ref"

    const onScroll = () => {
        const top =  displaysRef.current.getBoundingClientRect().top
        if(top - window.innerHeight / 2 < 0) {
            setStyle({})
        } 
    }

    useLayoutEffect(() => {
        window.addEventListener("scroll", onScroll)
        onScroll()
        return () => window.removeEventListener("scroll", onScroll, true)
    },[])

    return <div ref={displaysRef} style={style} className="products-display-container">
        <FadeInText text="In 4 different flavours" style={{fontSize: "5vw", height: "40vh", paddingTop: "10vh"}} />
        <div className="products-display">
            <ProductDisplay styles={{height: "60vh", width: "25vw"}} product={{name: "Watermelon", image: "product1" , to: "1"}} />
            <ProductDisplay styles={{height: "60vh", width: "25vw"}} product={{name: "Grapefruit", image: "product2", to: "2"}} />
            <ProductDisplay styles={{height: "60vh", width: "25vw"}} product={{name: "Strawberry", image:"product3", to: "3" }} />
            <ProductDisplay styles={{height: "60vh", width: "25vw"}} product={{name: "Kiwi", image: "product4", to: "4"}} />
        </div>
        
    </div>
}

export default ProductsDisplay