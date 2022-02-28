import React from "react";
import PropTypes from "prop-types"
import FadeInText from "../../Components/FadeInText";
import Divider from "../../Components/Divider"
import "./Nutritional/styles.css"

const Nutritional = ({items}) => {
    console.log(items)
    return <div className="nutr-table" style={{color: "white"}}>
        <FadeInText text="Nutrition facts" style={{fontSize: "5vw", color: "white"}} />
        <div className="table">
            <div className="table-heading table-item">
                <p className="label">Serving size 1 package (10g)</p>
                <p className="amount">Amount</p>
                <p className="pdv">PDV*</p>
            </div>
            { items.map(item => {
                return <div key={item.label} className="table-item">
                    <p className="label">{item.label}</p>
                    <p className="amount">{item.value}{item.measure}</p>
                    <p className="percentage">{item.percentage}%</p>
                    <Divider style={{position: 'absolute', bottom: 0, left: 0}} />
                </div>
            })}
        </div>
        
    </div>
}

Nutritional.propTypes = { 
    items: PropTypes.array
}

export default Nutritional