import React from 'react'
import { apple, bajajFinance, companyLogo, companyLogo2, companyLogo3, companyLogo4, financialServices, iciciBank, itcLimited, jswSteel, mrf, ongc, reliance, shriramFinance, tataMotors } from '../../data'
import Marquee from 'react-fast-marquee'

function GreenTab() {
  return (
    <section className="bg-white py-4 overflow-hidden w-full">
          <div className="relative w-full">
            <Marquee gradient={false}>
              <div className="flex gap-12 sm:gap-16 items-center whitespace-nowrap min-w-max px-4">
                <img
                  src={apple}
                  alt="Company Logo"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={iciciBank}
                  alt="Company Logo 2"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={tataMotors}
                  alt="Company Logo 3"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={jswSteel}
                  alt="Company Logo 4"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={mrf}
                  alt="Company Logo 5"
                  className="h-10 sm:h-12 w-auto"
                />
                {/* Duplicate logos for smooth infinite scroll */}
                <img
                  src={ongc}
                  alt="Company Logo 6"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={reliance}
                  alt="Company Logo 7"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={financialServices}
                  alt="Company Logo 8"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={bajajFinance}
                  alt="Company Logo 9"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={shriramFinance}
                  alt="Company Logo 1"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={iciciBank}
                  alt="Company Logo"
                  className="h-10 sm:h-12 w-auto"
                />
                <img
                  src={itcLimited}
                  alt="Company Logo"
                  className="h-10 sm:h-12 w-auto"
                />
              </div>
            </Marquee>
          </div>
        </section>
  )
}

export default GreenTab