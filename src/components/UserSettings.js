import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import hiGif from '../assets/hiGif.gif'

const UserSettings = () => {

  let navigate = useNavigate();


  return (


    <div className='flex flex-col sm:flex-row px-5 items-center justify-center w-full py-10 sm:py-0 sm:h-[90vh]'>
      <div className="left w-full sm:w-1/2 h-full  flex  justify-center items-center ">
        <form className='w-full'>
          <div className='section w-full h-full '>

            <div className='row  my-3 flex flex-col gap-6 w-full'>
              <div className='name w-full flex flex-col '>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={localStorage.name} className='border border-slate-500 rounded-md px-4 py-2' />
              </div>
              <div className='email flex flex-col '>
                <label htmlFor="email">Email</label>
                <input type={'email'} name="email" id="email" value={localStorage.email} className='border border-slate-500 rounded-md px-4 py-2' />
              </div>
              <div className='password flex flex-col '>
                <label htmlFor="password">Password</label>
                <input type={'password'} name="password" id="password" className='border border-slate-500 rounded-md px-4 py-2' />
              </div>
              <div>
                <button className='px-4 py-2 bg-blue-500 rounded-md text-white font-medium'>Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="right flex justify-center items-center  h-full">
        <img src={hiGif} alt="hiGif" />
      </div>
    </div>

  )
}

export default UserSettings