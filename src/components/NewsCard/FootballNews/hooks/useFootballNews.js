import React, { useState, useEffect } from "react";
import axios from "axios";

const useFootballNews = () => {
    const [footballNews, setFootballNews] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Football/news?main_site=1&snack=1&limit=6&page=1"
            )
            .then((res) => {
                console.log(res.data)
                setFootballNews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return footballNews
}

export default useFootballNews