import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* Icon */
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import CottageIcon from '@mui/icons-material/Cottage';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import WindowIcon from '@mui/icons-material/Window';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import GamesIcon from '@mui/icons-material/Games';

const NavBar = () => {

   let pathname = window.location.pathname;

    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname])

    console.log(window.location.pathname)

    return(
        <div className="left-nav-bar">
            <Link to="/"><SportsEsportsIcon className="left-nav-logo" /></Link>
            <div className="left-nav-tab-container">
                <Link to="/">
                <div className="left-nav-tab" style={{backgroundColor: `${pathname === "/" ? '#0d82ec' : ''}`}}>
                   <CottageOutlinedIcon/>
                </div>
                </Link>
                <Link to="/genres">
                    <div className="left-nav-tab" style={{backgroundColor: `${pathname === "/genres" ? '#0d82ec' : ''}`}}>
                        <WindowOutlinedIcon/>
                    </div>
                </Link>
                <Link to="/developers">
                    <div className="left-nav-tab">
                        <IntegrationInstructionsOutlinedIcon />
                    </div>
                </Link>
                <Link to="/platforms">
                    <div className="left-nav-tab">
                        <GamesOutlinedIcon /> 
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;