import React, { useLayoutEffect, useState, useRef} from "react"
import FadeInText from "../../Components/FadeInText"
import SlideText from "../../Components/SlideText"
import "./SlidingText/styles.css"

const SlidingText = () => {
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

    return <>
        <div className="intro-sliding-texts">
            <FadeInText style={{fontSize: "4vw"}} text="All about:" />
            <FadeInText style={{fontSize: "4vw", fontStyle: "italic"}} text="the juiciness" />
        </div>
        <div ref={slideRef} className="sliding-container">
            <SlideText position={position} text="fruit" />
            <SlideText position={position} odd text="juice" />
            <SlideText position={position} text="only" />
            <SlideText position={position} odd text="fruit" />
            <SlideText position={position} text="juice" />
        </div>
    </>
}

export default SlidingText