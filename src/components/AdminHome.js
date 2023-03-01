import React, { useContext, useState } from 'react'
import companyContext from '../context/companies/companyContext';
import recordContext from '../context/records/recordContext'

const AdminHome = () => {

    const context = useContext(companyContext);
    const [company, setCompany] = useState();
    const { createCompany } = context;

    const rContext = useContext(recordContext);
    // const { records, setRecords } = rContext;
    // const { getRecords } = rContext;
    const { studentRecordsBySearch } = rContext;

    // const apiKey = '43dc9ad5f8f847a18898a6c1ea19ec0a';
    // const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey

    var arr = [];
    // var i = 0;

    const handleOnChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value });
    }

    const handleCreateSubmit = async(e) => {
        e.preventDefault();
        // console.log(company);
        await createCompany(company);
        alert('Drive Scheduled')
        // notifyAllStudents();
    }

    // const notifyAllStudents = async ()=>{
    //     let myStudentArr = await studentRecordsBySearch();
    //     console.log('notify',myStudentArr);
    //     for(i = 0; i < myStudentArr.length; i++){
    //         sendEmailValidationRequest(myStudentArr[i].email);
    //     }
    // }

    
    // const sendEmailValidationRequest = async (email) => {
    //     try {
    //         const response = await fetch(apiURL + '&email=' + email);
    //         const data = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    const handleSearch = async (e) => {
        e.preventDefault();
        let department = document.getElementById('byDepartment')
        let skills = document.getElementById('bySkills')
        let yearOfPassing = document.getElementById('yearOfPassing')
        let tbody = document.getElementById('tbody')


        // console.log("dept value", department.value, );

        arr = await studentRecordsBySearch(department.value, skills.value, yearOfPassing.value);
        // console.log("arr", arr);

        for(let i = 0; i < arr.length; i++){
            tbody.innerHTML += `<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ${i+1}
            </th>
            <td className="text-center px-6 py-4">
                ${arr[i].name}
            </td>
            <td className="text-center px-6 py-4">
                ${arr[i].department}
            </td>
            <td className="text-center px-6 py-4">
                ${arr[i].skills}
            </td>
            <td className="text-center px-6 py-4">
                ${arr[i].yearOfPassing}
            </td>
            <td className="text-center px-6 py-4">
                ${arr[i].email}
            </td>
            <td className="text-center px-6 py-4">
                ${arr[i].phone}
            </td>
        </tr>`;
        }


    }


    return (
        <div className='px-5 pb-20'>
            <div>
                <div>
                    <h1 className='text-4xl font-medium my-5 underline underline-offset-4'>Create Drive</h1>
                </div>
                <div className='py-7'>
                    <form onSubmit={handleCreateSubmit} className='flex flex-col gap-3' >
                        <div className='row flex flex-col sm:flex-row gap-2'>
                            <div className='company-name flex flex-col sm:w-1/3'>
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" name="companyName" id="companyName" onChange={handleOnChange} className='px-4 py-2 border-2 border-slate-400' />
                            </div>
                            <div className='job-role flex flex-col sm:w-1/3'>
                                <label htmlFor="jobRole">Job role</label>
                                <input type="text" name="jobRole" id="jobRole" onChange={handleOnChange} className='px-4 py-2 border-2 border-slate-400' />
                            </div>
                            <div className='job-role flex flex-col sm:w-1/3'>
                                <label htmlFor="criteria">Criteria</label>
                                <input type="text" name="criteria" id="criteria" onChange={handleOnChange} className='px-4 py-2 border-2 border-slate-400' />
                            </div>
                        </div>
                        <div className='row flex gap-2'>

                            <div className='drive-register-link flex flex-col w-1/2'>
                                <label htmlFor="driveLink">Drive Link</label>
                                <input type="text" name="driveLink" id="driveLink" onChange={handleOnChange} className='px-4 py-2 border-2 border-slate-400' />
                            </div>
                            <div className='job-role flex flex-col w-1/2'>
                                <label htmlFor="lastDate">Last date to apply</label>
                                <input type="date" name="lastDate" id="lastDate" onChange={handleOnChange} className='px-4 py-2 border-2 border-slate-400' />
                            </div>
                        </div>
                        <div className='row flex gap-2'>

                            <div className='about-company flex flex-col w-full'>
                                <label htmlFor="aboutCompany">About Company</label>
                                <textarea rows={4} name="aboutCompany" id="aboutCompany" onChange={handleOnChange} className='px-4 py-2 border-2 border-slate-400' />
                            </div>
                        </div>
                        <div className='row flex gap-2'>

                            <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium'>Create Drive</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Search students */}
            <div className='w-full py-5'>
                <h1 className='text-4xl font-medium my-5 underline underline-offset-4'>Search students</h1>
                <div className='w-full py-5'>
                    <form className='w-full' onSubmit={handleSearch} >
                        <div className="row flex items-center w-full gap-2 ">
                            <div className='department w-1/3'>

                                <label htmlFor="byDepartment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                <select id="byDepartment" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a department</option>
                                    <option value="IT">IT</option>
                                    <option value="CSE">CSE</option>
                                    <option value="ETX">ETX</option>
                                    <option value="Civil">Civil</option>
                                    <option value="Mech">Mech</option>
                                </select>




                                {/* <label htmlFor="byDepartment"></label>
                                <input type="text" name="byDepartment" id="byDepartment" className='w-full border border-slate-400 px-4 py-2 rounded-md' placeholder='Department...?' /> */}
                            </div>
                            <div className='skills w-1/3'>



                                <label htmlFor="bySkills" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
                                <select id="bySkills" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose by skills</option>
                                    <option value="Java">Java</option>
                                    <option value="C / C++">C / C++</option>
                                    <option value="Python">Python</option>
                                    <option value="Web development">Web development</option>
                                </select>






                            </div>
                            <div className='yearOfPassing w-1/3'>
                                {/* <label htmlFor="yearOfPassing">Year of Passing</label> */}
                                <input type="number" name="yearOfPassing" id="yearOfPassing" className='my-1 w-full border border-slate-400 px-4 py-2 rounded-md' placeholder='Passing year...?' />
                            </div>
                            {/* <div className='is-placed w-1/3'>
                                <label htmlFor="placedStudents"></label>
                                <input type="text" name="placedStudents" id="placedStudents" className='w-full border border-slate-400 px-4 py-2 rounded-md' placeholder='Company...?' />
                            </div> */}
                            <div className='search w-1/3'>
                                <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md'>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Table */}
            <div>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr.No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Department
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Skills
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Year
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Year of Passing
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Placed
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Contact
                                </th>
                            </tr>
                        </thead>
                        <tbody id='tbody'>
                            {
                                // arr.map((element) => {
                                //     return 
                                        // <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        //     <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        //         i+1
                                        //     </th>
                                        //     <td className="px-6 py-4">
                                        //         element.name
                                        //     </td>
                                        //     <td className="px-6 py-4">
                                        //         element.department
                                        //     </td>
                                        //     <td className="px-6 py-4">
                                        //         element.skills
                                        //     </td>
                                        //     <td className="px-6 py-4">
                                        //         element.yearOfPassing
                                        //     </td>
                                        //     <td className="px-6 py-4">
                                        //         element.email
                                        //     </td>
                                        //     <td className="px-6 py-4">
                                        //         element.Contact
                                        //     </td>
                                        // </tr>
                                // })
                            }
                            {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td> */}
                            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                            </tr> */}
                                {/* <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                </tr> */}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AdminHome