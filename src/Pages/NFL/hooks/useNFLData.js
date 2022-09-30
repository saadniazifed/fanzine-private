import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useNFLData = () => {
    const [nflMatch, setNFLMatch] = useState([])

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/NFL/news?limit=48&page=1"
            )
            .then((res) => {
                setNFLMatch(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return nflMatch
}

export default useNFLData