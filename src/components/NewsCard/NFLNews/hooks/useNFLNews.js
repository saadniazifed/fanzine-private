import React, { useState, useEffect } from "react";
import axios from "axios";

const useNFLNews = () => {
    const [nflNews, setNFLNews] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/NFL/news?limit=6&page=1"
            )
            .then((res) => {
                setNFLNews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return nflNews

}

export default useNFLNews