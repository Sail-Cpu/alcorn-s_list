import React from "react";

const NavBar = () => {
    return(
        <div className="nav-bar">
            <div className="nav-bar-logo">
                Alcorn's List
            </div>
            <ul className="tabs">
                <li>Tournaments</li>
                <li>Event</li>
                <li>Games</li>
            </ul>
            <input type="text" placeholder="Rechercher"/>
        </div>
    )
}

export default NavBar;