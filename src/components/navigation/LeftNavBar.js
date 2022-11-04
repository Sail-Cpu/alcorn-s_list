import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

    function color(isActive){
        return {backgroundColor: isActive ? '#0d82ec' : '', Color: isActive ? '#fff' : 'rgb(125, 137, 156);'}
    }

    return(
        <div className="left-nav-bar">
            <Link to="/"><SportsEsportsIcon className="left-nav-logo" /></Link>
            <div className="left-nav-tab-container">
                <NavLink to="/" className="left-nav-tab" style={({ isActive }) => (color(isActive))}>
                        <CottageOutlinedIcon/>          
                </NavLink>
                <NavLink to="/genres" className="left-nav-tab" style={({ isActive }) => (color(isActive))}>
                        <WindowOutlinedIcon/>
                </NavLink>
                <NavLink to="/developers" className="left-nav-tab" style={({ isActive }) => (color(isActive))}>
                        <IntegrationInstructionsOutlinedIcon />
                </NavLink>
                <NavLink to="/platforms" className="left-nav-tab" style={({ isActive }) => (color(isActive))}>
                        <GamesOutlinedIcon /> 
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;