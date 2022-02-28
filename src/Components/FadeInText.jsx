import React, { useRef, useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import "./FadeInText/styles.css"
const FadeInText = ({text, style, timeout, noScroll}) => {
    const textRef = useRef(null)
    const [visible, setVisible] = useState("hidden-text")
    
    const onScroll = () => {
        const top = textRef.current.getBoundingClientRect().top
        if(top - (window.innerHeight / 2) < 200) {
            setVisible("")
        }  else {
            setVisible("hidden-text")
        }   
        
        return null
    }

    useLayoutEffect(() => {
        if(noScroll !== true) {
            window.addEventListener("scroll", onScroll)
            onScroll()
            return () => window.removeEventListener("scroll", onScroll, true)
        } else {
            let time = setTimeout(() => {
                setVisible("")
            }, timeout)
            return () => clearTimeout(time)
        }
    },[timeout]) 

    return <p ref={textRef} style={style} className={"fade-in-text " + visible}>{text}</p>
}

export default FadeInText

FadeInText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    timeout: PropTypes.number,
    noScroll: PropTypes.bool,
}