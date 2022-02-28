import React from "react"
import Divider from "./Divider"
import "./CustomInput/styles.css"
import PropTypes from "prop-types"
import { useState } from "react"

const CustomInput = ({placeHolder , style, action, withButton}) => {
    const [value, setValue] = useState("")

    return <div style={style} className="input-custom-container">
            <input required className="custom-input" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <label className="input-label">{placeHolder}</label>
            {withButton ? <button className="input-button" onClick={action}/> : null}
            <Divider style={{position: "absolute", bottom: 0, left: 0}} />
        </div>
}

CustomInput.propTypes = {
    text: PropTypes.string,
    style : PropTypes.object,
    action : PropTypes.func,
    withButton: PropTypes.bool,
    placeHolder: PropTypes.string
}

export default CustomInput