import React from 'react'
import { bgImg } from '../../data'

function Header() {
  return (
      <header
    //   {/* Header */}
              className="h-[210px] sm:h-[250px] md:h-[300px] bg-cover bg-center bg-no-repeat flex flex-col justify-center"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <div className="px-6 sm:px-12 md:px-40 text-white">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  About
                </h1>
                <p className="text-base sm:text-lg pt-2 flex gap-2 sm:gap-4 items-center font-medium">
                  <span>Tradez</span>
                  <span className="text-xs sm:text-sm">{">"}</span>
                  <span>Company</span>
                  <span className="text-xs sm:text-sm">{">"}</span>
                  <span>About</span>
                </p>
              </div>
            </header>
  )
}

export default Header