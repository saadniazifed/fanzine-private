import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useMLBData = () => {
    const [mlbNews, setMLBNews] = useState([])

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/MLB/news?limit=48&page=1"
            )
            .then((res) => {
                setMLBNews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return mlbNews
}

export default useMLBData