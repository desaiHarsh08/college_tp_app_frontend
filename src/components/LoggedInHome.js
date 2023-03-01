import React, { useEffect } from 'react'
import About from './About'
import Contact from './Contact'
import homeGif from '../assets/homeGif.gif'
import Services from './Services'
import Footer from './Footer'
import LoggedInNavbar from './LoggedInNavbar'
import { useNavigate } from 'react-router-dom'

const LoggedInHome = () => {

  let navigate = useNavigate();

  useEffect(() => {
   
    if(!localStorage.getItem('token')){
      navigate('/login');
    }  
    // console.log('Welcome')
    
    // eslint-disable-next-line
  }, [])// eslint-disable-next-line react-hooks/exhaustive-deps
  
  return (
    <div>
        <div>


      <LoggedInNavbar />


      <div className='flex flex-col md:flex-row md:h-[100vh] home pt-12 sm:mb-12 md:py-40  px-5 ' id='home'>
        <div className='left w-full md:w-1/2  flex items-center py-20   flex-col gap-20'>
          <div>
            <h1 className='font-semibold text-2xl sm:text-3xl text-center'>Welcome to <br /> Training & Placement App</h1>
          </div>
          <div className='right flex md:hidden w-full md:w-1/2 justify-center items-center'>
            <img src={homeGif} alt="homeGif" />
          </div>
          <div>


            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus a mollitia maxime, voluptatem optio, magnam minima, quaerat corporis nesciunt expedita inventore? Consectetur, molestias?</p>
            <div className='my-7 flex justify-center'>

              <button className='px-4 inline py-2 border bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md'>Get Started</button>
            </div>
          </div>
        </div>
        <div className='right hidden md:flex w-full md:w-1/2 justify-center items-center'>
          <img src={homeGif} alt="homeGif" />
        </div>
      </div >



      <About />
      <Services />
      <Contact />
      <Footer />




      {/* <Records /> */}
    </div >
    </div>
  )
}

export default LoggedInHome