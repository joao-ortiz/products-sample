import React, { useRef, useState } from "react"
import PropTypes from "prop-types"

const RenderImageMouse = ({render}) => {
    const [mouse, setMouse] = useState({x:0,y:0})
    const divRef = useRef(null)

    return <div ref={divRef} onMouseMove={(e) => {setMouse({x:e.pageX,y: e.pageY})}} style={{height: "fit-content", width: "fit-content"}}>
        {render(mouse)}
    </div>
}

RenderImageMouse.propTypes ={ 
    render: PropTypes.func
}

export default RenderImageMouse