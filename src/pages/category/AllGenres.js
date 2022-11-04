import React, { useEffect, useState } from "react";
/* Api */
import Api from '../../api/Api';
/* Components */
import TopNavBar from "../../components/navigation/TopNavBar";
import Category from "../../components/Category";

const AllGenres = () => {

    const[allGenres, setAllGenre] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setAllGenre(await Api.fetchGenres());
        }
        fetchData();
    }, [])

    return(
        <div className="page all-categories-container">
            <TopNavBar />
            <div className="all-categories">
                {allGenres.map((genre, idx) => {
                    return(
                        <Category key={idx} name={genre.slug} image={genre.image_background} type={"genre"}/>
                    )
                })}
            </div>
        </div>
    )
}

export default AllGenres;