import React, { useState, useRef, useLayoutEffect } from "react"
import SlideText from "../../Components/SlideText"
import "../Home/SlidingText/styles.css"

const SlidingZeroSugar = () => {
    const slideRef = useRef(null) ?? "ref"
    const [position, setPosition] = useState()

    const onScroll = () => {
        const top = slideRef !== null ? slideRef.current.getBoundingClientRect().top : -9999999
        const height = window.innerHeight
        if(top - height > 0) {
            setPosition(0)
        } else {
            const pos = ((top / height) * 10)
            setPosition(pos)
        }
    }

    useLayoutEffect(() => {
        setPosition(30)
        document.addEventListener("scroll", onScroll)
        onScroll()
        return () => document.removeEventListener("scroll", onScroll, true)
    }, [])

    return <div ref={slideRef} className="sliding-container" style={{marginTop: "40vh"}}>
        <SlideText text="zero" position={position}/>
        <SlideText odd text="sugar" position={position} />
    </div>
}

export default SlidingZeroSugar