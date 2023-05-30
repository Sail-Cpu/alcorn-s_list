import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
/* Icon */
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import GamesOutlinedIcon from '@mui/icons-material/GamesOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    let pathname = window.location.pathname;
    const[toogleNav, setToogleNav] = useState(false);

    useEffect(() => {
        pathname = window.location.pathname;
    }, [window.location.pathname])

    function color(isActive){
        return {backgroundColor: isActive ? '#0d82ec' : '', Color: isActive ? '#fff' : 'rgb(125, 137, 156)'}
    }

    return(
        <>
            <div className="left-nav-bar">
                <Link to="alcorn-s_list/"><SportsEsportsIcon className="left-nav-logo" /></Link>
                <div className="left-nav-tab-container">
                    <NavLink to="alcorn-s_list/" className="left-nav-tab" style={({ isActive }) => (color(isActive))}>
                            <CottageOutlinedIcon/>          
                    </NavLink>
                    <NavLink to="alcorn-s_list/genres" className="left-nav-tab" style={({ isActive }) => (color(isActive))}>
                            <WindowOutlinedIcon/>
                    </NavLink>
                    <NavLink to="alcorn-s_list/developers" className="left-nav-tab" style={({ isActive }) => (color(isActive))}>
                            <IntegrationInstructionsOutlinedIcon />
                    </NavLink>
                    <NavLink to="alcorn-s_list/platforms" className="left-nav-tab" style={({ isActive }) => (color(isActive))}>
                            <GamesOutlinedIcon /> 
                    </NavLink>
                </div>
            </div>
            <div className="left-nav-toogle-menu-container">
                <MenuIcon onClick={() => setToogleNav(!toogleNav)}/>
                <div className="left-nav-toogle-menu" style={{display: toogleNav ? 'flex' : 'none'}}>
                    <div className="toogle-menu-tab-container">
                    <NavLink to="alcorn-s_list/" className="toogle-menu-tab" onClick={() => setToogleNav(false)}>
                        <span>Home</span>         
                    </NavLink>
                    <NavLink to="alcorn-s_list/genres" className="toogle-menu-tab" onClick={() => setToogleNav(false)}>
                        <span>Genres</span>         
                    </NavLink>
                    <NavLink to="alcorn-s_list/developers" className="toogle-menu-tab" onClick={() => setToogleNav(false)}>
                        <span>Developers</span>         
                    </NavLink>
                    <NavLink to="alcorn-s_list/platforms" className="toogle-menu-tab" onClick={() => setToogleNav(false)}>
                        <span>Platforms</span>         
                    </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;