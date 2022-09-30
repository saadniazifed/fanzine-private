import React, { useState, useEffect } from "react";
import axios from "axios";

const useMLBNews = () => {
    const [mlbNews, setMlbNews] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/MLB/news?limit=6&page=1"
            )
            .then((res) => {
                setMlbNews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return mlbNews
}

export default useMLBNews