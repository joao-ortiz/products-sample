import React from "react"
import FadeInText from "../../Components/FadeInText"
import ProductLink from "../../Components/ProductLink"
import Divider from "../../Components/Divider"
import RenderImageMouse from "../../Components/RenderImageMouse"
import "./ProductsLink/styles.css"

const ProductsLinks = () => {
    return <div className="products-links-container">
        <FadeInText style={{marginLeft: "5vw", marginBottom: "1rem", alignSelf: "flex-start"}} text="AVALIABLE IN" />
        <Divider transitionOnScroll style={{borderColor: "transparent", borderBottom: "none !important", borderLeft: "none !important", borderRight: "none !important"}} />
        <div className="products-links">
            <RenderImageMouse render={mouse => <ProductLink key={1} mouse={mouse} label="ø1" text="WATERMELON" id={1} />} />
            <RenderImageMouse render={mouse => <ProductLink key={2} mouse={mouse} label="ø2" text="GRAPEFRUIT" id={2} />} />
            <RenderImageMouse render={ mouse => <ProductLink key={3} mouse={mouse} label="ø3" text="STRAWBERRY" id={3} />} />
            <RenderImageMouse render={ mouse => <ProductLink key={4} mouse={mouse} label="ø4" text="KIWI" id={4} />} />
        </div>
    </div>
}

export default ProductsLinks