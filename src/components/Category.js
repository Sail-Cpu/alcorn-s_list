import React from "react";

const Category = (props) => {
    return(
        <div className="category-container">
            <div className="category" style={{backgroundImage: `url(${props.image})`}}>
                <div>
                    <span>{props.name}</span>
                </div>
                
            </div>
        </div>
    )
}

export default Category;