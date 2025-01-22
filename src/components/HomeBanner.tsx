
import React from 'react'
import Title from './Title'
import BannerMenu from './BannerMenu'

const HomeBanner = () => {
  return (
    <div className = "flex flex-col items-center justify-center gap-5">
      <Title className = "text-3xl md:text-4xl uppercase font-bold text-center">Best Shoes Collection</Title>
      <p className = "text-sm text-center text-lightColor/80 font-medium max-w-[480px]">
        Find everything you need to look and feel best
      </p>
      <div>
        <BannerMenu/>
      </div>
    </div>
    
    
  )
}

export default HomeBanner
