import React, { useEffect, useState } from "react";
/* Api */
import Api from '../../api/Api';
/* Components */
import TopNavBar from "../../components/navigation/TopNavBar";
import Category from "../../components/Category";
import Loading from "../../components/other/Loading";

const AllGenres = () => {

    const[allGenres, setAllGenre] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            setAllGenre(await Api.fetchGenres());
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
        fetchData();
    }, [])

    return(
        <div className="page all-categories-container">
            <TopNavBar />
            {loading ? (
                <Loading />
            ) : (
                    <div className="all-categories">
                        {allGenres.map((genre, idx) => {
                            return(
                                <Category key={idx} name={genre.slug} image={genre.image_background} type={"genre"}/>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default AllGenres;