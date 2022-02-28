import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../productData";
import ProductsDisplay from "./Home/ProductsDisplay";
import ProductHeadline from "./Product/ProductHeadline"
import SlidingZeroSugar from "./Product/SlidingZeroSugar"
import Ingredients from "./Product/Ingredients";
import Nutritional from "./Product/Nutritional"

const Product = () => {
    const { id } = useParams()
    const product = data[id-1]

    return <>
        <ProductHeadline id={id} name={product.name} description={product.description} price={product.price}/>
        <SlidingZeroSugar />
        <Ingredients id={id} />
        <Nutritional items={product.nutrition} />
        <ProductsDisplay />
    </>
}

export default Product