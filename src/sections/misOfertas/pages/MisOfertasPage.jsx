import React from 'react'
import { WkHeaderWrapper } from '../../../ui/components/WkHeaderWrapper'
import { WkFooter } from '../../../ui/components/WkFooter'
import { MisOfertasHeading } from '../components/MisOfertasHeading'

import '../styles/misOfertasPage.css'
import { MisOfertasGrid } from '../components/MisOfertasGrid'

export const MisOfertasPage = () => {
  return (
    <>
        <WkHeaderWrapper/>
          <main className='mis-ofertas-wrapper'>
            <MisOfertasHeading/>
            <MisOfertasGrid/>
          </main>
        <WkFooter/>
    </>
  )
}