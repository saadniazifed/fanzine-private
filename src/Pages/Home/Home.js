import Ads from 'components/Ads/Ads'
import CricketMatchCard from 'components/MatchCard/CricketMatchCard/CricketMatchCard'
import FootballMatchCard from 'components/MatchCard/FootballMatchCard/FootballMatchCard'
import NBAMatchCard from 'components/MatchCard/NBAMatchCard/NBACard'
import CricketNews from 'components/NewsCard/CricketNews/CricketNewsCard'
import FootballNews from 'components/NewsCard/FootballNews/FootballNewsCard'
import MLBNews from 'components/NewsCard/MLBNews/MLBNewsCard'
import NBANews from 'components/NewsCard/NBANews/NBANewsCard'
import NFLNews from 'components/NewsCard/NFLNews/NFLNewsCard'
import React from 'react'

const Home = () => {
    return (
        <>
            <FootballNews />
            <FootballMatchCard />
            <Ads />
            <CricketNews />
            <CricketMatchCard />
            <Ads />
            <MLBNews />
            <Ads />
            <NBANews />
            <NBAMatchCard />
            <Ads />
            <NFLNews />
            <Ads />

        </>
    )
}

export default Home