import React from 'react'

const BannerMenu = () => {
  return (
    <div className = "flex items-center gap-1.5 text-sm font-semibold">
      <button className = "border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect">Men</button>
      <button className = "border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-darkColor hover:text-white hoverEffect">Women</button>
    </div>
  )
}

export default BannerMenu
