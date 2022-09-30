import React, { useState, useEffect } from 'react'

const useNBAData = () => {
    const [nbaMatch, setNBAMatch] = useState([])

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/NBA/news?limit=48&page=1"
            )
            .then((res) => {
                setNBAMatch(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return nbaMatch
}

export default useNBAData