import React from "react";
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/search`; 
        navigate(path);
    }

    return(
        <div className="top-nav-bar">
            <input type="text" placeholder="Search..." onChange={routeChange}></input>
            <div className="top-nav-bar-logo"></div>
        </div>
    )
}

export default TopNavBar;