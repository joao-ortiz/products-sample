import React from "react"
import Divider from "../../Components/Divider"
import FadeInText from "../../Components/FadeInText"
import "./Quotes/styles.css"

const Quotes = () => {
    return <div className="quotes-container">
        <div className="first-quotes">
            <FadeInText style={{fontSize: "5vw", fontWeight: "bold"}} text="GET SOM BRAIN FREEZE" />
            <FadeInText style={{fontSize: "5vw", fontWeight: "bold"}} text="THE MOST FROZEN" />
            <FadeInText style={{fontSize: "5vw", fontWeight: "bold"}} text="FRUIT JUICE" />   
        </div>
            <Divider style={{backgroundColor: "#231F20",justifyContent: "center", height: "30vh", width: "70%", display: "flex", flexDirection: "column", alignItems: "center", padding: "1vw 0", borderColor: "transparent"}} transitionOnScroll>
                <FadeInText style={{fontSize: "4vw", fontWeight: "bold"}} text="MADE ONLY WITH FRUITS" />
                <FadeInText style={{fontSize: "4vw", fontWeight: "bold"}} text="AND IT'S TASTY" />
            </Divider>
            <Divider style={{backgroundColor: "#231F20", justifyContent: "center", height: "30vh", width: "30%", display: "flex", flexDirection: "column", alignItems: "center", padding: "1vw 0", borderColor: "transparent"}} transitionOnScroll>
                <FadeInText style={{fontSize: "3vw", fontWeight: "bold"}} text="ONLY" />
                <FadeInText style={{fontSize: "3vw", fontWeight: "bold"}} text="FRUITS" />
            </Divider>
    </div>
}

export default Quotes