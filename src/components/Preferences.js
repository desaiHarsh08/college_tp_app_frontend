import React, { useContext } from 'react'
import recordContext from '../context/records/recordContext'
// import jwt_decode from "jwt-decode";

const Preferences = () => {

    const rContext = useContext(recordContext);
    // const { getRecords } = rContext;
    const { editRecords } = rContext;

    const { records, setRecords } = rContext;

    // useEffect(() => {
    //     getRecords()
    // }, [])

    // const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });


    const handleOnChange = (e) => {
        setRecords({ ...records, [e.target.name]: e.target.value });
    }

    const handleSaveInfo = (e) => {
        e.preventDefault();
        // let token = localStorage.token;
        // let decoded = jwt_decode(token)
        // console.log(decoded.user.id)

        // { _id, name, email, address, phone, department, yearOfPassing, homeTown, state, tenth, twelfth, aggregate}

        // console.log('dept. **********************************************************', document.getElementById('department').value)
        // setRecords(records)
        setRecords({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            dob: document.getElementById('dob').value,
            phone: document.getElementById('phone').value,
            state: document.getElementById('state').value,
            homeTown: document.getElementById('homeTown').value,
            address: document.getElementById('address').value,
            tenth: document.getElementById('tenth').value,
            twelfth: document.getElementById('twelfth').value,
            course: document.getElementById('course').value,
            department: document.getElementById('department').value,
            aggregate: document.getElementById('aggregate').value,
            // skills: document.getElementById('skills').value,
            yearOfPassing: document.getElementById('yearOfPassing').value,
        })
        // console.log('after submit', records)

        editRecords({
            _id: records.id,
            user: records.user,

            // name: records.name,
            // email: records.email,
            // address: records.address,
            // phone: records.phone,
            // department: records.department,
            // yearOfPassing: records.yearOfPassing,
            // homeTown: records.homeTown,
            // state: records.state,
            // tenth: records.tenth,
            // twelfth: records.twelfth,
            // aggregate: records.aggregate,


            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            department: document.getElementById('department').value,
            yearOfPassing: document.getElementById('yearOfPassing').value,
            homeTown: document.getElementById('homeTown').value,
            state: document.getElementById('state').value,
            tenth: document.getElementById('tenth').value,
            twelfth: document.getElementById('twelfth').value,
            aggregate: document.getElementById('aggregate').value,
            // dob: document.getElementById('dob').value,
            course: document.getElementById('course').value,
            skills: document.getElementById('skills').value,
        });
        alert('Information Updated!');
    }

    return (
        <div className='px-2 md:px-5 w-full '>Preferences
            <h1 className='font-medium text-3xl'>Enter your details</h1>
            <div className='w-full py-7' >
                <form onSubmit={handleSaveInfo} className='w-full flex flex-col gap-10 ' >
                    <div className='section'>
                        <h3 className='text-2xl font-medium my-2'>Personal Details</h3>
                        <div className='row my-3 flex flex-col sm:flex-row gap-6 w-full'>
                            <div className='name sm:w-1/3 flex flex-col '>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" value={records.name} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                            <div className='dob sm:w-1/3 flex flex-col '>
                                <label htmlFor="dob">Date of Birth</label>
                                <input type={'date'} name="dob" id="dob" className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                            <div className='email sm:w-1/3 flex flex-col '>
                                <label htmlFor="email">Email</label>
                                <input type={'email'} name="email" id="email" value={records === null ? localStorage.email : records.email} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                        </div>
                        <div className='row my-3 flex flex-col sm:flex-row gap-6 w-full'>
                            <div className='name sm:w-1/3 flex flex-col '>
                                <label htmlFor="phone">Phone</label>
                                <input type="number" name="phone" id="phone" value={records === null ? '' : records.phone} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                            <div className='email sm:w-1/3 flex flex-col '>
                                <label htmlFor="state">State</label>
                                <input type={'text'} name="state" id="state" value={records === null ? '' : records.state} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                            <div className='email sm:w-1/3 flex flex-col '>
                                <label htmlFor="homeTown">District</label>
                                <input type={'text'} name="homeTown" id="homeTown" value={records === null ? '' : records.homeTown} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                        </div>
                        <div className='row my-3 flex gap-6 w-full'>
                            <div className='address w-full sm:w-1/3 flex flex-col '>
                                <label htmlFor="dob">Address</label>
                                <textarea rows={3} type={'text'} name="address" id="address" value={records === null ? '' : records.address} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>

                        </div>
                    </div>
                    <div className="section">
                        <h3 className='text-2xl font-medium my-2'>Academic Details</h3>
                        <div className='row my-3 flex flex-col sm:flex-row gap-6 w-full'>
                            <div className='name sm:w-1/3 flex flex-col '>
                                <label htmlFor="tenth">10<sup>th</sup></label>
                                <input type="number" name="tenth" id="tenth" value={records === null ? '' : records.tenth} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                            <div className='name sm:w-1/3 flex flex-col '>
                                <label htmlFor="twelfth">12<sup>th</sup></label>
                                <input type="number" name="twelfth" id="twelfth" value={records === null ? '' : records.twelfth} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                        </div>
                        <div className='row my-3 flex flex-col sm:flex-row gap-6 w-full'>
                            <div className='name sm:w-1/3 flex flex-col '>
                                <label htmlFor="course">Course</label>
                                <input type="text" name="course" id="course" value={records === null ? '' : records.course} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                            <div className='department sm:w-1/3 flex flex-col '>

                                <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                <select id="department" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a department</option>
                                    <option value="IT">IT</option>
                                    <option value="CSE">CSE</option>
                                    <option value="ETX">ETX</option>
                                    <option value="Civil">Civil</option>
                                    <option value="Mech">Mech</option>
                                </select>

                                {/* <label htmlFor="department">Department</label>
                                <input type={'text'} name="department" id="department" value={records === null ? '' : records.department} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' /> */}
                            </div>
                            <div className='aggregate sm:w-1/3 flex flex-col '>
                                <label htmlFor="aggregate">Aggregate</label>
                                <input type={'number'} name="aggregate" id="aggregate" value={records === null ? '' : records.aggregate} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                        </div>
                        <div className='row my-3 flex flex-col sm:flex-row gap-6 w-full'>

                            <div className='resume sm:w-1/3 flex flex-col '>
                                <label htmlFor="yearOfPassing">Year of Passing</label>
                                <input type={'number'} name="yearOfPassing" id="yearOfPassing" value={records === null ? '' : records.yearOfPassing} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                            <div className='name sm:w-1/3 flex flex-col '>
                                <label htmlFor="skills">Skills</label>
                                <input type="text" name="skills" id="skills" value={records === null ? '' : records.skills} onChange={handleOnChange} className='border border-slate-500 rounded-md px-4 py-2' />
                            </div>
                            <div className='resume sm:w-1/3 flex flex-col '>
                                <label htmlFor="resume">Resume</label>
                                <input type={'file'} name="resume" id="resume" className=' py-2' />
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <button className='px-4 py-2 bg-blue-500 rounded-md text-white font-medium'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Preferences