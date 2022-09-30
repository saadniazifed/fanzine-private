import React, { useEffect, useState } from "react"
import axios from "axios";

const useCricketData = () => {
    const [cricketMatch, setCricketMatch] = useState([])

    useEffect(() => {
        axios
            .get(
                "https://api2.fanzine.com/api-almet/v2.0/Cricket/news?limit=48&page=1"
            )
            .then((res) => {
                setCricketMatch(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return cricketMatch
}

export default useCricketData