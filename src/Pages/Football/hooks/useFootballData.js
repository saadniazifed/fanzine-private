import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFootballData = () => {
    const [footballMatch, setFootballMatch] = useState([]);
    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Football/news?main_site=1&snack=1&limit=48&page=1"
            )
            .then((res) => {
                setFootballMatch(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return footballMatch
}

export default useFootballData