import React, { useLayoutEffect, useRef, useState } from "react"
import "./Divider/styles.css"
import PropTypes from "prop-types"

const Divider = ({children, style, transitionOnScroll}) => {
    const dividerRef = useRef(null)
    const [transitionClass, setClass] = useState("")
    const onScroll  = () => {
        const top = dividerRef.current ? dividerRef.current.getBoundingClientRect().top : null
        if(top - (window.innerHeight / 2) < 120) {
                setClass("draw")
                return null
        } 
        setClass("")
        return null
    }

    useLayoutEffect(() => {
        if(transitionOnScroll) {
            window.addEventListener("scroll", onScroll)
            return () => window.removeEventListener("scroll", onScroll,true)
        }
    })

    return <div ref={dividerRef} style={style} className={`divider ${transitionClass}`} >{children}</div>
}

export default Divider

Divider.propTypes ={
    children: PropTypes.node,
    style:  PropTypes.object,
    transitionOnScroll: PropTypes.bool
}