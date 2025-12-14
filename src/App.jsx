import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingWatches from './components/TrendingWatches'
import Brands from './components/Brands'
import DemandedItems from './components/DemandedItems'
import Banner from './components/Banner'
import DownloadAppBanner from './components/DownloadAppBanner'
import Footer from './components/Footer'
import RecentSearch from './components/RecentSerch'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='bg-[#F1F1F1] min-h-screen'>
      <TrendingWatches/>
      <Brands/>
      <DemandedItems/>
      <Banner/>
      <RecentSearch/>
      <DownloadAppBanner/>
      <Footer/>
      </div>
    </div>
  )
}

export default App

//   <div className='bg-slate-100/80'>