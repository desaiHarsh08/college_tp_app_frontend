import jwtDecode from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import recordContext from '../context/records/recordContext'
import companyContext from '../context/companies/companyContext'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { NavLink, Outlet } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const Dashboard = () => {

    let navigate = useNavigate();
    let location = useLocation();

    const context = useContext(recordContext);
    const cContext = useContext(companyContext);
    const { records, setRecords } = context;
    const { getRecords } = context;
    const { getCompany } = cContext;

    const [myCompany, setMyCompany] = useState({companyName: "", jobRole: "", criteria: "", driveLink: "", aboutCompany: "" });

    useEffect(() => {
        const authToken = localStorage.token;
        const userImg = localStorage.userImg;
        const decoded = jwtDecode(authToken);
        // console.log("decoded", decoded)

        
        if(userImg){
        document.getElementById('userImage').src = userImg;
        document.getElementById('firstCharacter-box').classList.add('hidden')
        }
        else{
        document.getElementById('userImage').classList.add('hidden');
        document.getElementById('firstCharacter').innerHTML = localStorage.firstCharacter;
        }
        // setMyCompany(getCompany());
        // console.log("company", getCompany())
        setRecords(getRecords());
    }, [])


    const handleLogout = () => {
        localStorage.clear()
        navigate('/')
    }


  return (
    <div>





<div>
             <div className='h-[100vh] overflow-y-hidden'>
                 <div className='h-full flex flex-col md:flex-row '>
                     {/* Sidebar Toggle */}
                     <div className=' md:hidden flex   bg-slate-700 '>
                         <div className='row w-full flex justify-center items-center py-5 '>
                             <ul className='text-center flex px-5  text-white space-x-5'>
                                 <li className='flex justify-center '>
                                     <NavLink to={'/home'} className={` flex gap-2  justify-start items-center font-medium`}>
                                         <HomeIcon />
                                     </NavLink>
                                 </li>
                                 <li className='flex justify-center '>
                                     <NavLink to={''} className={`${location.pathname === '/dashboard' ? 'text-[#00ffff]' : ""} flex gap-2  justify-start items-center font-medium`}>
                                         <DashboardIcon />
                                     </NavLink>
                                 </li>
                                 <li className='flex justify-center '>
                                     <NavLink to={'preferences'} className={`${location.pathname === '/dashboard/preferences' ? 'text-[#00ffff]' : ""} flex gap-2  justify-start items-center font-medium`}>
                                         <RoomPreferencesIcon />
                                     </NavLink>
                                 </li>
                                 <li className='flex justify-center '>
                                     <NavLink to={'settings'} className={`${location.pathname === '/dashboard/settings' ? 'text-[#00ffff]' : ""} flex gap-2  justify-start items-center font-medium`}>
                                         <SettingsIcon />
                                     </NavLink>
                                 </li>
                                 <li className='flex justify-center cursor-pointer ' onClick={handleLogout}>
                                    <div className='flex gap-2  justify-start items-center font-medium'>
                                         <ExitToAppIcon />
                                     </div>
                                 </li>
                             </ul>
                         </div>
                         <div className='row'></div>
                     </div>
                     <div className='sidebar absolute -translate-x-[1000px] md:translate-x-0  md:relative w-[20%] flex flex-col gap-7 h-full bg-slate-700 text-white'>
                         <div className='row flex flex-col items-center px-2  py-7 gap-7'>
                             <h1 className='text-center text-4xl font-semibold'>Welcome!</h1>
                             <img src="" alt="userImage" id='userImage' className='rounded-full h-24' />
                             <div className='border flex justify-center items-center font-medium bg-orange-700 border-transparent text-5xl w-24 rounded-full h-24' id='firstCharacter-box'>
                                 <span id='firstCharacter'></span>
                             </div>
                             <h2 className=' uppercase font-medium text-center'>{localStorage.name?localStorage.name:records.name}</h2>
                         </div>
                         <div className='row'>
                             <ul className='text-center space-y-5'>
                                 <li className='flex justify-center '>
                                     <NavLink to={'/home'} className={` flex gap-2 w-1/2 justify-start items-center font-medium`}>
                                         <HomeIcon />
                                         <span>Home</span>
                                     </NavLink>
                                 </li>
                                 <li className='flex justify-center '>
                                     <NavLink to={''} className={`${location.pathname === '/dashboard' ? 'text-[#00ffff]' : ""} flex gap-2 w-1/2 justify-start items-center font-medium`}>
                                         <DashboardIcon />
                                         <span>Dashboard</span>
                                     </NavLink>
                                 </li>
                                 {localStorage.email!=='ndesai171@gmail.com'?<li className='flex justify-center '>
                                     <NavLink to={'preferences'} className={`${location.pathname === '/dashboard/user-info' ? 'text-[#00ffff]' : ""} flex gap-2 w-1/2 justify-start items-center font-medium`}>
                                         <RoomPreferencesIcon />
                                         <span>Preferences</span>
                                     </NavLink>
                                 </li>:''}
                                 {localStorage.email==='ndesai171@gmail.com'?<li className='flex justify-center '>
                                     <NavLink to={'adminhome'} className={`${location.pathname === '/dashboard/user-info' ? 'text-[#00ffff]' : ""} flex gap-2 w-1/2 justify-start items-center font-medium`}>
                                         <RoomPreferencesIcon />
                                         <span>Admin Home</span>
                                     </NavLink>
                                 </li>:''}
                                 <li className='flex justify-center '>
                                     <NavLink to={'settings'} className={`${location.pathname === '/dashboard/settings' ? 'text-[#00ffff]' : ""} flex gap-2 w-1/2 justify-start items-center font-medium`}>
                                         <SettingsIcon />
                                         <span>Settings</span>
                                     </NavLink>
                                 </li>
                                 <li className='flex justify-center cursor-pointer ' onClick={handleLogout}>
                                     <div className='flex gap-2 w-1/2 justify-start items-center font-medium'>
                                         <ExitToAppIcon />
                                         <span>Logut</span>
                                     </div>
                                 </li>
                             </ul>
                         </div>
                     </div>
                     <div className='main-container md:w-[80%] overflow-y-scroll '>


                         <Outlet />
                     </div>
                 </div>
             </div>
         </div>




    </div>
  )
}

export default Dashboard

