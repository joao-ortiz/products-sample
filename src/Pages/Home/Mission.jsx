import React from "react"
import FadeInText from "../../Components/FadeInText"
import "./Mission/styles.css"

const Mission = () => {
    return <div className="mission-container">
        <FadeInText style={{fontSize: "5vw"}} text="We're bringing new and innovative" />
        <FadeInText style={{fontSize: "5vw"}} text="flavours made only with" timeout={100} />
        <FadeInText style={{fontStyle: "italic", fontSize: "5vw"}} text="real fruits." timeout={100} /> 
    </div>
}

export default Mission