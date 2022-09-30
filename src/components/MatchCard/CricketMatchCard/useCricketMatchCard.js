import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useCricketMatchCard = () => {
    const [cricketMatch, setCricketMatch] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Cricket/homePageMatches"
            )
            .then((res) => {
                setCricketMatch(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return cricketMatch

}

export default useCricketMatchCard