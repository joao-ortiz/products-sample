import React from "react"
import { useEffect, useRef, useState } from "react"
import FadeInText from "../../Components/FadeInText"
import "./Banner/styles.css"

const Banner = () => {
    const [currWidth, setCurrWidth] = useState()
    const bannerRef = useRef(null) ?? "ref"
    const onScroll = () => {
        const top = bannerRef.current.getBoundingClientRect().top
        if(top < 0) {
            setCurrWidth("100%")
        } else {
            const height = window.innerHeight
            const newWidth = (150 - (top / height) * 100)
            setCurrWidth(`${newWidth>90 ? newWidth : 90}%`)
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", onScroll)
        onScroll()
        return () => document.removeEventListener("scroll", onScroll, true)
    }, [])

    return <div ref={bannerRef} className="banner-container">
        <div style={{width: currWidth, backgroundPosition:"center"}} className="banner">
            <FadeInText style={{fontSize: "2rem", fontWeight: "bold", color: "white"}} text="Get into the" />
            <FadeInText style={{color: "white", fontSize: "2rem"}} text="popsicles vibe" />
        </div>
    </div>
}

export default Banner