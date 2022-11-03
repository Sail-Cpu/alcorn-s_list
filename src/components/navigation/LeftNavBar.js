import React from "react";
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
    return(
        <div className="left-nav-bar">
            <SportsEsportsIcon className="left-nav-logo" />
            <div className="left-nav-tab-container">
                <div className="left-nav-tab">
                    <CottageOutlinedIcon />
                </div>
                <div className="left-nav-tab">
                    <WindowOutlinedIcon />
                </div>
                <div className="left-nav-tab">
                    <IntegrationInstructionsOutlinedIcon />
                </div>
                <div className="left-nav-tab">
                    <GamesOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default NavBar;