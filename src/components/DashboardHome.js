import React, { useContext, useEffect } from 'react'
import placementImage from '../assets/placementImage.jfif'
import companyContext from '../context/companies/companyContext'
import recordContext from '../context/records/recordContext'


const DashboardHome = () => {

  const cContext = useContext(companyContext);
  const { getCompany } = cContext;
  const { company } = cContext;

  const context = useContext(recordContext);
  const { records } = context;
  // const { getRecords } = context;

  // const [myCompany, setMyCompany] = useState({ companyName: "", jobRole: "", criteria: "", driveLink: "", aboutCompany: "" });

  useEffect(() => {
    // setMyCompany(getCompany())
    getCompany()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='px-5 py-5'>
      <div className='flex flex-col sm:flex-row '>
        <div className='sm:w-1/2'>
          <h1 className='text-4xl font-medium my-9'>Current Drive</h1>
          <div className='sm:hidden sm:w-1/2 flex justify-center items-center'>
            <img src={placementImage} alt="placementGif" />
          </div>
          <div className='company flex flex-col gap-5'>
            <div className='company-name flex flex-col gap-2'>
              <div><span className='text-xl font-medium'>Company name:</span></div>
              <div><span>{company.companyName}</span></div>
            </div>
            <div className='job-role flex flex-col gap-2'>
              <div><span className='text-xl font-medium'>Job role:</span></div>
              <div><span>{company.jobRole}</span></div>
            </div>
            <div className='about-company flex flex-col gap-2'>
              <div><span className='text-xl font-medium'>About company:</span></div>
              <div>
                <p>{company.aboutCompany}</p>
              </div>
            </div>
            <div className='apply-for-company flex flex-col gap-2'>
              <div><span className='text-xl font-medium'>Criteria: </span></div>
              <div>
                <p><span className='text-purple-700'>{company.criteria}</span></p>
              </div>
            </div>
            <div className='apply-for-company flex flex-col gap-2'>
              <div><span className='text-xl font-medium'>Apply for Drive:</span></div>
              <div>
                <p><a href="/" className='text-purple-700'>{company.driveLink}</a></p>
              </div>
            </div>
            <div className='apply-for-company flex flex-col gap-2'>
              <div><span className='text-xl font-medium'>Last date to apply:</span></div>
              <div>
                <p><span className='text-purple-700'>Lorem ipsum dolor sit amet consectetur adipisicing.</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden w-1/2 sm:flex justify-center items-center'>
          <img src={placementImage} alt="placementGif" />
        </div>
      </div>
      {localStorage.email!=='ndesai171@gmail.com'?<div className='py-32 '>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-7'>
          <div className='border flex flex-col gap-2 py-6 bg-green-400 rounded-lg w-2/3 sm:w-[20%]'>
            <p className='font-medium text-xl text-center'>Status</p>
            <p className='font-medium text-xl text-center'>Status</p>
          </div>
          <div className='border flex flex-col gap-2 py-6 bg-red-400 rounded-lg w-2/3 sm:w-[20%]' >
            <p className='font-medium text-xl text-center'>10<sup>th</sup></p>
            <p className='font-medium text-xl text-center'>{records.tenth}</p>
          </div>
          <div className='border flex flex-col gap-2  py-6 bg-orange-400 rounded-lg w-2/3 sm:w-[20%]'>
            <p className='font-medium text-xl text-center'>12<sup>th</sup></p>
            <p className='font-medium text-xl text-center'>{records.twelfth}</p>
          </div>
          <div className='border flex flex-col gap-2  py-6 bg-blue-400 rounded-lg w-2/3 sm:w-[20%]'>
            <p className='font-medium text-[18px] text-center'>Aggregate</p>
            <p className='font-medium text-xl text-center'>{records.aggregate}</p>
          </div>

        </div>
      </div>: ''}
    </div>
  )
}

export default DashboardHome