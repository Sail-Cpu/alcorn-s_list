import React, { useEffect, useState } from "react";
/* Api */
import Api from '../../api/Api';
/* Components */
import TopNavBar from "../../components/navigation/TopNavBar";
import Category from "../../components/Category";
import Loading from "../../components/other/Loading";

const AllDevelopers = () => {

    const[allDevelopers, setAllDevelopers] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            setAllDevelopers(await Api.fetchDevelopers());
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
                        {allDevelopers.map((dev, idx) => {
                                return(
                                    <Category key={idx} name={dev.slug} image={dev.image_background} type={"developer"}/>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default AllDevelopers;