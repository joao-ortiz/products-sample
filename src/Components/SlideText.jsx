import React from "react"
import "./SlideText/styles.css"
import PropTypes from "prop-types"

const SlideText = ({odd, text, position}) => {
    
    const texts = []
    for(let i = 0; i < 15; i++){
        texts.push(<h2 key={i} className={`sliding-text ${i % 2 === 0 ? 'dark' : ''}`}>{text}</h2>)
    }

    return <div style={{transform: `translateX(${(odd ? -1*position : position)}%)`}} className="sliding-text-container">
        {texts.map(text => text)}
    </div>
}

export default SlideText

SlideText.propTypes = {
    position: PropTypes.number,
    text: PropTypes.string,
    odd: PropTypes.bool
}