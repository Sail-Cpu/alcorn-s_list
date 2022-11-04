import React, { useEffect, useState } from "react";
/* Api */
import Api from '../../api/Api';
/* Components */
import TopNavBar from "../../components/navigation/TopNavBar";
import Category from "../../components/Category";
import Loading from "../../components/other/Loading";

const AllPlatforms = () => {

    const[allPlatforms, setAllPlatforms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            setAllPlatforms(await Api.fetchPlatforms());
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
                        {allPlatforms.map((platform, idx) => {
                            return(
                                <Category key={idx} name={platform.slug} image={platform.image_background} type={"platform"}/>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}

export default AllPlatforms;