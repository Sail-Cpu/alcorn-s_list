import React, { useEffect, useState } from "react";
/* Api */
import Api from '../api/Api';
/* Components */
import TopNavBar from "../components/navigation/TopNavBar";
import Category from "../components/Category";

const AllDevelopers = () => {

    const[allDevelopers, setAllDevelopers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setAllDevelopers(await Api.fetchDevelopers());
        }
        fetchData();
    }, [])
    
    return(
        <div className="page all-categories-container">
            <TopNavBar />
            <div className="all-categories">
                {allDevelopers.map((dev, idx) => {
                    return(
                        <Category key={idx} name={dev.name} image={dev.image_background} />
                    )
                })}
            </div>
        </div>
    )
}

export default AllDevelopers;