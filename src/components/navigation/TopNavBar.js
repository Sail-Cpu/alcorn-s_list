import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const TopNavBar = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/alcorn-s_list/search`; 
        navigate(path);
    }

    return(
        <div className="top-nav-bar">
            <input type="text" placeholder="Search..." onChange={routeChange}></input>
            <div className="top-nav-bar-logo"></div>
            <div className="search-icon" onClick={() => routeChange()}><SearchIcon /></div>
        </div>
    )
}

export default TopNavBar;