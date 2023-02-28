import React from 'react'
import { NavLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  // const handleClearStorage = ()=>{
  //   localStorage.clear();
  //   return '/';
  // }
  const handleClick = () => {
    // console.log('fired')
    document.getElementById('menu').classList.toggle('translate-x-[1000px]');
  }

  // const handleInOut = () => {
  //   // console.log(localStorage.token)
  //   if(localStorage.token === undefined){
  //     return false;
  //   }
  //   else{
  //     localStorage.clear();
  //     return true;
  //   }
  // }

  return (
    <div className='fixed w-full z-[1000000]'>
      <header >
        <nav>
          <div className='hidden md:flex justify-between p-3 font-medium text-white text-base bg-blue-500  '>
            <div className="left w-1/2  flex items-center space-x-14">
              <div className='logo'>
                <NavLink to={'/'} className='text-2xl'><span>Logo</span></NavLink>
              </div>
              <ul className='flex items-center space-x-7 text-base '>
                <li><a href={'#home'}>Home</a></li>
                <li><a href={'#about'}  >About</a></li>
                <li><a href={'#services'}  >Services</a></li>
                <li><a href={'#contact'}>Contact</a></li>

              </ul>
            </div>
            <div className="right  w-1/2 flex justify-end items-center ">
              <ul className='flex space-x-7 '>
                <li >
                  <NavLink to={'/login'} className='flex items-center space-x-1'>
                    <PersonIcon />
                    <span>Login</span>
                  </NavLink>
                </li>
                <li >
                  <NavLink to={'/Signup'} className='flex items-center space-x-1'>
                    <AppRegistrationIcon />
                    <span>Signup</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className=' p-3 bg-blue-500 h-14 flex md:hidden justify-center items-center text-white font-semibold'>
              <span>Logo</span>
            </div>
            <div onClick={handleClick} className='fixed md:hidden text-white px-3 top-3 right-0'>
              <MoreHorizIcon />
            </div>
          </div>

          <div className='menu md:hidden absolute top-0 right-0 left-0 h-screen translate-x-[1000px] transition-all duration-[700ms] bg-blue-600 py-7 px-5 text-white ' id='menu'>
            <div className='flex justify-between  border-b-2 border-b-blue-500 mb-10  py-2  '>
              <h2 className='text-xl font-semibold'>Lorem, ipsum dolor.</h2>
              <div className='close  ' onClick={handleClick} id='close'>
                <CloseIcon />
              </div>
            </div>
            <div className='border-b-2 border-b-blue-500 mb-10 py-2 '>
              <ul className='flex flex-col items-center font-medium space-y-7 text-base '>
                <li><a href={'#home'}>Home</a></li>
                <li><a href={'#about'}  >About</a></li>
                <li><a href={'#services'}  >Services</a></li>
                <li><a href={'#contact'}>Contact</a></li>
              </ul>
            </div>
            <div className='border-b-2 border-b-blue-500 mb-10 py-2 '>
              <ul className='flex flex-col items-center font-medium space-y-7 text-base '>
                <li >
                  <NavLink to={'/login'} className='flex items-center space-x-1'>
                    <PersonIcon />
                    <span>Login</span>
                  </NavLink>
                </li>
                <li >
                  <NavLink to={'/Signup'} className='flex items-center space-x-1'>
                    <AppRegistrationIcon />
                    <span>Signup</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


    </div >
  )
}

export default Navbar