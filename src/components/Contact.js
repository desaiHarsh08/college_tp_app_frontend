import React from 'react'
import contactImg from '../assets/contactGif.gif'

const Contact = () => {
  return (
    <div className='my-12 py-10 px-2 contact ' id='contact' data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" >
      <h2 className='text-center font-semibold text-3xl text-gray-600 mb-20'>Contact</h2>
      <div className='flex flex-col-reverse sm:flex-row '>
        <div className="left w-full sm:w-2/3 px-2 sm:px-12">
          <h3 className=' font-semibold text-2xl text-center sm:text-left sm:text-3xl my-12 '>Get in touch with us!</h3>
          <form  method='POST' className='w-full '>
            <div className='flex flex-col gap-2 px-4 py-2 '>
              <label htmlFor="email">Name</label>
              <div className='w-full flex '>
                <input type="name"  name="name" id="name" className='border-slate-300 border px-4 py-2 w-full ' required />
              </div>
            </div>
            <div className='flex flex-col gap-2 px-4 py-2 '>
              <label htmlFor="email">Email Address</label>
              <div className='w-full flex '>
                <input type="email"  name="email" id="email" className='border-slate-300 border px-4 py-2 w-full ' required />
              </div>
            </div>
            <div className='flex flex-col gap-2 px-4 py-2 '>
              <label htmlFor="message">Message</label>
              <div className='w-full flex '>
                <textarea rows={5}  className='border-slate-300 border px-4 py-2 w-full' />
              </div>
            </div>
            <div className='flex flex-col items-center gap-2 px-4 py-2 md:my-7 '>
              <button type='submit' className='px-4 py-2 border-2 border-transparent text-white bg-blue-500 rounded-md'>Sign in</button>

            </div>
          </form>
        </div>
        <div className="right w-full sm:w-1/3 flex justify-center items-center">
          <img src={contactImg} alt="" className='w-84 sm:w-[48rem]' />
        </div>
      </div>
    </div>
  )
}

export default Contact