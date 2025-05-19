import React from 'react'
import NavigationBar from '../components/NavigationBar'
import HeroSection from '../components/HeroSection'
import HomesForYou from '../components/HomesForYou'
import FindProperties from '../components/FindProperties'
import ChooseUs from '../components/ChooseUs'
import RecentArticlesNews from '../components/RecentArticlesNews'
import RealEstate from '../components/RealEstate'
import RealEstateAgent from '../components/RealEstateAgent'
import Footer from '../components/Footer'
import LuxuryHomes from '../components/LuxuryHomes'
import Customers from '../components/Customers'
import BestProperties from '../components/BestProperties'

export default function Home() {
    return (
        <>
            <div className='content-container-parent'> 
                <NavigationBar />
                <div className='content-container'>
                    <HeroSection />
                    <HomesForYou/>
                    <FindProperties/>
                    <ChooseUs/>
                    <BestProperties/>
                    <LuxuryHomes/>
                    <Customers/>
                    <RecentArticlesNews/>
                    <RealEstate/>
                    <RealEstateAgent/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
