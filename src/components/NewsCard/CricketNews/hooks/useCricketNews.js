import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useCricketNews = () => {
    const [cricketNews, setCricketNews] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Cricket/news?limit=6&page=1"
            )
            .then((res) => {
                setCricketNews(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return cricketNews
}

export default useCricketNews