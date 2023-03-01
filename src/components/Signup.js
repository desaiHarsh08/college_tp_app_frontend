import React, { useState, useContext, useRef } from 'react'
import userContext from '../context/myUsers/userContext';
import { useNavigate } from "react-router-dom";
import registerGif from '.././assets/registerGif.gif'


import emailjs from '@emailjs/browser';

const Signup = () => {



  const context = useContext(userContext);
  // const { user, setUser } = context;
  const { createUser } = context;

  const form = useRef();

  const navigate = useNavigate();

  const [otp, setOtp] = useState(0);
  const [otpByUser, setOtpByUser] = useState(0);

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });


  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100000)
    return randomNumber;
  }


  const handleOTP = ()=>{
    document.getElementById('fromName').value = 'Training_And_Placement_App';
    document.getElementById('randomNumber').value = handleRandomNumber();
    // // console.log('randomnumber', document.getElementById('randomNumber').value, form.current)
    setOtp(document.getElementById('randomNumber').value);

    document.getElementById('otpnumber').classList.toggle('hidden')
    document.getElementById('otpnumber').classList.toggle('block')


    emailjs.sendForm('service_74ydz2b', 'template_vjywdlj', form.current, 'xU4DEAjKUB5Xj-rrY')
      .then((result) => {
        // // console.log(result, " otp: ", otp);
        // console.log(result);
      }, (error) => {
        // console.log(error.text);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(otp === otpByUser){
      let success = await createUser(credentials.name, credentials.email, credentials.password);
      if (success) {
        alert('Success!');
        // console.log('form submitted')
        navigate('/login');
      } else {
        alert('Try to sign up again');
        document.getElementById('form').reset();
      }
    }else{
      alert('invalid otp')
      document.getElementById('otpnumber').classList.toggle('hidden')

    }

    // // console.log(credentials);
    // setUser({
    //   name: credentials.name,
    //   email: credentials.email,
    //   password: credentials.password,
    // })
    // // console.log('user',user)


    // // console.log('as')




  }

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setOtpByUser(document.getElementById('otpnumber').value);
  }

  return (
    <div className='w-full h-[100vh] '>
      {/* <form id='form' onSubmit={handleSubmit} method='POST'>
        <div>
          <label htmlFor='fname'>First Name</label>
          <input type={'text'} name='fname' value={credentials.fname} onChange={handleOnChange} id='fname' />
        </div>
        <div>
          <label htmlFor='mname'>Middle Name</label>
          <input type={'text'} name='mname' value={credentials.mname} onChange={handleOnChange} id='mname' />
        </div>
        <div>
          <label htmlFor='lname'>Last Name</label>
          <input type={'text'} name='lname' value={credentials.lname} onChange={handleOnChange} id='lname' />
        </div>
        <div>
          <label htmlFor='email'>Email address</label>
          <input type={'email'} name='email' value={credentials.email} onChange={handleOnChange} id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type={'password'} name='password' value={credentials.password} onChange={handleOnChange} id='password' />
        </div>
        <div>
          <button type='submit' >Submit</button>
        </div>
      </form> */}

      <div className='flex flex-col-reverse md:flex-row w-full h-full'>
        <div className='left w-full md:w-1/2 py-7 h-1/3 md:h-full '>
          <div className='px-3 md:px-20 md:h-[90%] flex flex-col justify-between'>
            <h2 className='font-semibold text-2xl text-center my-7'>Get registered with us!</h2>
            <form ref={form} onSubmit={handleSubmit} method='POST' className='flex shadow-xl py-10 flex-col justify-between border h-full'>
              <div>
                <div className='flex flex-col gap-2 px-4 py-2 '>
                  <label htmlFor="name">Name</label>
                  <div className='w-full flex '>
                    <input type="text" name="name" id="name" value={credentials.name} onChange={handleOnChange} placeholder='Enter your name' className='border-slate-300 border px-4 py-2 w-full ' required />
                  </div>
                </div>
                <div className='flex flex-col gap-2 px-4 py-2 '>
                  <label htmlFor="email">Email Address</label>
                  <div className='w-full flex '>
                    <input type="email" name="email" id="email" value={credentials.email} onChange={handleOnChange} placeholder='Enter your email' className='border-slate-300 border px-4 py-2 w-full ' required />
                  </div>
                </div>
                <div className='flex-col gap-2 px-4 py-2 hidden '>
                  <div className='w-full flex '>
                    <input type={'number'} name="randomNumber" id="randomNumber" className='border-slate-300 border px-4 py-2 w-full ' />
                  </div>
                </div>
                <div className='flex-col gap-2 px-4 py-2 hidden '>
                  <div className='w-full flex '>
                    <input type={'text'} name="fromName" id="fromName" className='border-slate-300 border px-4 py-2 w-full ' />
                  </div>
                </div>
                <div className='flex flex-col gap-2 px-4 py-2 '>
                  <label htmlFor="password">Password</label>
                  <div className='w-full flex '>
                    <input type="password" name="password" id="password" value={credentials.password} onChange={handleOnChange} placeholder='Enter your password' className='border-slate-300 border px-4 py-2 w-full ' required />
                  </div>
                </div>
                <div className='flex flex-col gap-2 px-4 py-2 '>
                  <label htmlFor="password">Enter OTP to continue</label>
                  <div className='w-full flex '>
                    <input type="number" name="otpnumber" id="otpnumber"  onChange={handleOnChange}  className='hidden border-slate-300 border px-4 py-2 w-full ' required/>
                  </div>
                  <button className='border-slate-300 border px-4 py-2 w-full ' onClick={handleOTP} >Generate OTP</button>
                </div>
              </div>

              <div className='btn px-4 py-2 flex justify-center '>
                <button  type='submit' className='border rounded-md px-7 py-2 bg-[#8de5ed] font-semibold hover:bg-[#6db9c0]'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className='right w-full md:w-1/2 h-full bg-right md:bg-center bg-[#8de5ed]' style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: `url(${registerGif})` }}>
          <div className='hidden space-y-5 mt-7 text-black px-5 w-1/2 bg-blue-200 md:text-center'>
            <h1 className='font-semibold text-2xl'>New to us?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima laborum voluptatum omnis?</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Signup