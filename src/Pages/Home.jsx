import React from "react"
import Headline from "./Home/Headline"
import Banner from "./Home/Banner"
import Mission from "./Home/Mission"
import Quotes from "./Home/Quotes"
import SlidingText from "./Home/SlidingText"
import ProductsLinks from "./Home/ProductsLinks"
import ProductsDisplay from "./Home/ProductsDisplay"

const Home = () => {
    return <>
        <Headline />
        <Banner />
        <Mission />
        <ProductsLinks />
        <Quotes />
        <SlidingText />
        <ProductsDisplay />
    </>
}

export default Home