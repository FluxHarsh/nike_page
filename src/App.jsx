import React from 'react'
import './App.css'


const App = () => {
  return (
    <div>
      <nav className='flex max-w-[1280px] justify-between mx-auto h-[72px] items-center px-5'>

        <div className='logo' >
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul className='flex w-[333px] h-[24px] gap-[24px]' >
          <li href='#' >MENU</li>
          <li href='#'>LOCATION</li>
          <li href='#'>ABOUT</li>
          <li href='#'>CONTACT</li>
        </ul>

          <button className='w-[75px] h-[40px] px-[16px] py-[6px] bg-[#D01C28] text-white font-medium' >
            Login
          </button>


      </nav>
    </div>
  )
}

export default App
