import { NavLink, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
// import recordContext from '../context/records/recordContext'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
// import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';

const LoggedInNavbar = () => {

  // const uContext = useContext(userContext);
  // const rContext = useContext(recordContext);
  // const { user, setUser } = uContext;
  // const { getRecords } = rContext;

  // const { records, setRecords } = rContext;

  useEffect(() => {
    // const authToken = localStorage.token;
    const userImg = localStorage.userImg;

    if (userImg === undefined) {
      let firstCharacter = localStorage.firstCharacter;

      document.getElementById('userImage').classList.add('hidden')
      document.getElementById('userImage1').classList.add('hidden')
      document.getElementById('userCharacter').innerHTML = firstCharacter;
      document.getElementById('userCharacter1').innerHTML = firstCharacter;
    }
    else{
      // document.getElementById('userCharacter-bg').classList.add('hidden')
    }
    document.getElementById('userImage').src = userImg;
    // document.getElementById('userImage1').src = userImg;
  }, [])

  let navigate = useNavigate();

  const handleUserImageClick = () => {
    document.getElementById('image-menu').classList.toggle('hidden');
    document.getElementById('image-menu-res').classList.toggle('hidden');
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  }

  const handleClick = () => {
    // console.log('fired')
    document.getElementById('menu').classList.toggle('translate-x-[1000px]');
  }


  //   const handleClick = () => {
  //     document.getElementById('menu').classList.toggle('translate-x-[1000px]');
  //   }

  return (
    <div className=' fixed w-full z-[1000000]'>
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
                <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>

              </ul>
            </div>
            <div className="right  w-1/2 flex justify-end items-center ">
              <ul className='flex space-x-7 '>
                <li onClick={handleUserImageClick} className='cursor-pointer'>
                  {/* <NavLink to={'/login'} className='flex items-center space-x-1'>
                    <PersonIcon /> */}
                  <img src='' id='userImage' alt='userImg' className='h-9 rounded-full' />
                  <div className={`px-3 text-xl py-1 rounded-full bg-orange-700 ${localStorage.userImg!==undefined?'hidden':''}`} id='userCharacter-box'>
                    <span id='userCharacter'></span>
                  </div>
                  {/* </NavLink> */}
                </li>
              </ul>
              <div id='image-menu' className='absolute hidden bg-white top-[61px] shadow-xl transition-all right-0 w-44 h-24 text-black border-2' >
                <div className='flex flex-col items-center space-y-2 h-full justify-center'>
                  <NavLink to={'/dashboard/settings'} className='cursor-pointer' >Settings</NavLink>
                  <button className='cursor-pointer' onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          </div>

          
          <div>
            <div className=' p-3 bg-blue-500 h-14 flex md:hidden justify-center items-center text-white font-semibold'>
              <span>Logo</span>
            </div>
            <div className='fixed md:hidden text-white px-3 top-3 right-0' onClick={handleClick}>
              
              <MoreHorizIcon />
              {/* <ul className='flex space-x-7 '>
                <li onClick={handleUserImageClick} className='cursor-pointer'>
                  <NavLink to={'/login'} className='flex items-center space-x-1'>
                    <PersonIcon />
                  <img src='' id='userImage1' alt='userImg' className='h-9 rounded-full' />
                  </NavLink>
                </li>
              </ul> */}
              <div id='image-menu-res' className='absolute hidden bg-white top-[61px] shadow-xl transition-all right-0 w-44 h-24 text-black border-2' >
                <ul className='flex flex-col items-center space-y-2 h-full justify-center'>
                  <li>Settings</li>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='menu md:hidden absolute top-0 right-0 left-0 h-screen translate-x-[1000px] transition-all duration-[700ms] bg-blue-600 py-7 px-5 text-white ' id='menu'>
            <div className='flex justify-between  border-b-2 border-b-blue-500 mb-10  py-2  '>
              <h2 className='text-xl font-semibold'>Lorem, ipsum dolor.</h2>
              <div className='close ' onClick={handleClick} id='close'>
                <CloseIcon />
              </div>
            </div>
            <div className='flex justify-center items-center my-9'>
              <img src='' id='userImage1' alt='userImg' className='h-9 rounded-full' />
              <div className={`inline px-5 text-xl py-3 rounded-full bg-orange-700 ${localStorage.userImg!==undefined?'hidden':''}`} id='userCharacter-box'>
                    <span id='userCharacter1'></span>
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
                  <NavLink to={'/dashboard/settings'} className='flex items-center space-x-1'>
                    <SettingsIcon />
                    <span>Settings</span>
                  </NavLink>
                </li>
                <li >
                  <button onClick={handleLogout} className='flex items-center space-x-1'>
                    <ExitToAppIcon />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


    </div >
  )
}

export default LoggedInNavbar