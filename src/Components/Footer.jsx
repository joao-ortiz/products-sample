import React from "react"
import FadeInText from "./FadeInText"
import CustomInput from "./CustomInput"
import NavLink from "./NavLink"
import CustomLink from "./CustomLink"
import "./Footer/styles.css"
const Footer = () => {
    return <div className="footer-container">
        <div className="left-footer">
            <FadeInText text="POPSS" style={{fontSize: "12vw"}}/>
            <CustomLink style={{fontSize: "4vw", color: "white", marginLeft: "1vw"}} text="Product 1" to="product/1"/>
            <CustomLink style={{fontSize: "4vw", color: "white", marginLeft: "1vw"}} text="Product 2" to="product/2"/>
            <CustomLink style={{fontSize: "4vw", color: "white", marginLeft: "1vw"}} text="Product 3" to="product/3"/>
            <CustomLink style={{fontSize: "4vw", color: "white", marginLeft: "1vw"}} text="Product 4" to="product/4"/>
        </div>
        <div className="right-footer">
            <CustomInput placeHolder="Email" style={{fontSize: "4vw"}} withButton action={() => null}/>
            <div className="navigation-footer">
                <NavLink style={{alignSelf: "flex-start", justifySelf: "flex-start", fontSize: "2vw", color: "white"}} text="about" to="/about"/>
                <NavLink style={{alignSelf: "flex-start", justifySelf: "flex-start", fontSize: "2vw", color: "white"}} text="contact" to="/contact"/>
            </div>
        </div>
    </div>
}

export default Footer