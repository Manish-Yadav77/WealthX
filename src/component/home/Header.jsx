import React from 'react'
import { bgImg } from '../../data'

function Header({title, obj}) {
  return (
    // 1
      <header
    //   {/* Header */}
              className="h-[210px] sm:h-[250px] md:h-[300px] bg-cover bg-center bg-no-repeat flex flex-col justify-center"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <div className="px-6 sm:px-12 md:px-40 text-white">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  {
                    title? title : ''
                  }
                </h1>
                <p className="text-base sm:text-lg pt-2 flex gap-2 sm:gap-4 items-center font-medium">
                  <span>{obj.title? obj.title:''}</span>
                  <span className="text-xs sm:text-sm">{">"}</span>
                  <span>{obj.para ? obj.para:''}</span>
                  <span className={`text-xs sm:text-sm ${obj.para2? '': 'hidden'}`}>{">"}</span>
                  <span>{obj.para2 ? obj.para2:''}</span>
                </p>
              </div>
              {/* <header
                className="h-[210px] sm:h-[250px] md:h-[300px] bg-cover bg-center bg-no-repeat flex flex-col justify-center text-white"
                style={{ backgroundImage: `url(${bgImg})` }}
              >
                <div className="px-6 sm:px-12 md:px-40">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Platinum A/C</h1>
                  <p className="text-base sm:text-lg pt-2 flex gap-2 sm:gap-4 items-center font-medium">
                    <span>Tradez</span>
                    <span className="text-xs sm:text-sm">{'>'}</span>
                    <span>Service</span>
                  </p>
                </div>
              </header> */}
            </header>
  )
}

export default Header