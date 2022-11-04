import React from "react";
import lottie from "lottie-web";
/* Animation */
import anim from '../../img/load.json';

const Loading = () => {

    React.useEffect(() => {
        lottie.loadAnimation({
          container: document.querySelector("#load-logo"),
          animationData : anim,
        });
    }, []);

    return(
        <div className="loading-container">
            <div id="load-logo"></div>
        </div>
    )
}

export default Loading;