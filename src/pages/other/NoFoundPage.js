import React,{ useEffect } from "react";
import lottie from "lottie-web";
/* Components */
import TopNavBar from '../../components/navigation/TopNavBar';
/* Animation */
import anim from '../../img/404.json';

const NoFoundPage = () => {

    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#react-logo"),
          animationData : anim,
        });
    }, []);

    return(
        <div className="page no-found-page-container">
            <TopNavBar />
            <div className="no-found-page">
            <div id="react-logo" style={{ width: 500, height: 500 }} />
            </div>
        </div>
    )
}

export default NoFoundPage;