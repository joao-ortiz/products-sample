import React from "react"
import FadeInText from "../../Components/FadeInText"
import "./Headline/styles.css"

const Headline = () => {
    return <div className="headline-container">
    <div className="brand-title">
        <FadeInText style={{fontSize: "13vw"}} text="P" timeout={400} noScroll />
        <FadeInText style={{fontSize: "13vw"}} text="O" timeout={500} noScroll />
        <FadeInText style={{fontSize: "13vw"}} text="P" timeout={600} noScroll />
        <FadeInText style={{fontSize: "13vw"}} text="S" timeout={700} noScroll />
        <FadeInText style={{fontSize: "13vw"}} text="S" timeout={800} noScroll />
    </div>
    <div className="headline-quote">
        <FadeInText style={{fontSize: "2rem"}} text="An entire" timeout={500} noScroll />
        <FadeInText style={{fontSize: "2rem"}} text="new variety." noScroll  timeout={700}/>
    </div>
    <div className="headline-subquote">
        <FadeInText text="NEW POPSICLES" timeout={500} noScroll/>
        <FadeInText text="NEW SUMMER JOY" noScroll timeout={700} />
    </div>
</div>
    
   
}

export default Headline