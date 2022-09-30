import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useFootballMatchCard = () => {
    const [footballMatch, setFootballMatch] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Football/homePageMatches"
            )
            .then((res) => {
                setFootballMatch(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return footballMatch
}

export default useFootballMatchCard