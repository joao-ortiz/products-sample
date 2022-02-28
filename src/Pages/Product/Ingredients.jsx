import React from "react"
import FadeInText from "../../Components/FadeInText"
import "./Ingredients/styles.css"
import PropTypes from "prop-types"

const Ingredients = ({id}) => {
    const ingr = ["watermelon","grapefruit","strawberry","kiwi"]
    const txt = ingr[id-1]
    return <div className="ingredients-container">
        <FadeInText text="Only one ingredient" style={{fontSize: "5vw"}}/>
        <FadeInText text={txt} style={{fontSize: "5vw",fontStyle: "italic"}} />
    </div>
}

Ingredients.propTypes = {
    id: PropTypes.string
}

export default Ingredients