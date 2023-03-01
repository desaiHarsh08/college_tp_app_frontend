import React, { useState } from "react";
import RecordContext from "./recordContext";

const RecordState = (props)=>{

    // const host = "http://localhost:5000";
    const host = "https://college-tp-app-backend.onrender.com";

    const recordInitial = {};

      const [records, setRecords] = useState(recordInitial)


      //   Get record
    const getRecords = async ()=>{
        // API Call
        const res = await fetch(`${host}/api/records/fetchallrecords`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.token
            }
        });
        const json = await res.json();
        // console.log(json)
        setRecords(json);
        return records
    }


    //   Edit record
    const editRecords = async ({ _id, user, name, email, address, phone, department, yearOfPassing, homeTown, state, tenth, twelfth, aggregate, skills, course})=>{
        // console.log('here in edit before call', records._id, records.user, records.name, records.email, records.address, records.phone, records.department, records.yearOfPassing, records.homeTown, records.state, records.tenth, records.twelfth, records.aggregate, records.skills, records.course)
        // API Call
        const res = await fetch(`${host}/api/records/updaterecord/${user}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({_id, user, name, email, address, phone, department, yearOfPassing, homeTown, state, tenth, twelfth, aggregate, skills, course})
        });
        const json = await res.json();
        // console.log("from update", json)
        setRecords(json);
    }

    
    //   Get student records by search
    const studentRecordsBySearch = async (department, skills, yearOfPassing)=>{
        // // console.log('here in edit before call', records._id, records.user, records.name, records.email, records.address, records.phone, records.department, records.yearOfPassing, records.homeTown, records.state, records.tenth, records.twelfth, records.aggregate, records.skills, records.course)
        // API Call
        const res = await fetch(`${host}/api/records/fetchallstudentsbysearch`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ department, skills, yearOfPassing })
        });
        const json = await res.json();
        // console.log("from student record by department", json)
        return json;
    }

    return (
        <RecordContext.Provider value={{records, setRecords, editRecords, getRecords, studentRecordsBySearch}} >
            {props.children}
        </RecordContext.Provider>
    );
}

export default RecordState;