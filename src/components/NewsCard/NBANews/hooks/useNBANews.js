import React, { useState, useEffect } from "react";
import axios from "axios";

const useNBANews = () => {
    const [nbaNews, setNBANews] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/NBA/news?limit=6&page=1"
            )
            .then((res) => {
                setNBANews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return nbaNews
}

export default useNBANews