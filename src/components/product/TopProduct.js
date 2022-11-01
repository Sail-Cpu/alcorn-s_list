import React from "react";

const TopProduct = (props) => {
    return(
        <div className="top-product-container">
            <div className="top-product">
                {props.name}
            </div>
        </div>
    )
}

export default TopProduct;