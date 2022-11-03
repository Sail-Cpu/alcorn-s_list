import React, { useEffect, useState } from "react";
/* Api */
import Api from '../api/Api';
/* Components */
import TopNavBar from "../components/navigation/TopNavBar";
import Category from "../components/Category";

const AllPlatforms = () => {

    const[allPlatforms, setAllPlatforms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setAllPlatforms(await Api.fetchPlatforms());
        }
        fetchData();
    }, [])

    return(
        <div className="page all-categories-container">
            <TopNavBar />
            <div className="all-categories">
                {allPlatforms.map((platform, idx) => {
                    return(
                        <Category key={idx} name={platform.name} image={platform.image_background} />
                    )
                })}
            </div>
        </div>
    )
}

export default AllPlatforms;