import React, { useState, useEffect } from 'react'
import axios from 'axios';
const useNBAMatchCard = () => {
    const [nbaCard, setNBACard] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/NBA/homePageMatches"
            )
            .then((res) => {
                setNBACard(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return nbaCard
}

export default useNBAMatchCard