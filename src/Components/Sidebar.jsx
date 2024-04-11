
import React from 'react'
import { Sidebar2 } from './Sidebar2/Sidebar2'
import { Navbar } from './Navbar/Navbar'
import { Widgets } from './Widgets/Widgets'
import { Featured } from './Featured/Featured'
import { Chart } from './Chart/Chart'

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
        
        <Sidebar2 />
        <div className="homecontainer">
          <Navbar />
          <div className='Widgets'>
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
            <Widgets type="sales report" />
            <Widgets type="purchase" />




          </div>
          <div className='Chart'>
            <Featured />
            <Chart />

          </div>

        </div>
        </div>
    
       
  )
}
