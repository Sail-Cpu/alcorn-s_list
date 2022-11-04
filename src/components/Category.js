import React from "react";
import { Link, Routes } from "react-router-dom";

const Category = (props) => {
    return(
        <div className="category-container">
            <Link to={`/games/${props.type}/${props.name}`}>
                <div className="category" style={{backgroundImage: `url(${props.image})`}}>
                    <div>
                        <span>{props.name}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Category;