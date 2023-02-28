import React, { useState } from "react";
import CompanyContext from "./companyContext";

const CompanyState = (props)=>{


    // const host = "http://localhost:5000";
    const host = "https://college-tp-app-backend.onrender.com";

    const [company, setCompany] = useState({companyName: "default", jobRole: "default", criteria: "default", driveLink: "default", aboutCompany: "default"});
   


      //   Create company
      const createCompany = async ({companyName, jobRole, criteria, driveLink, aboutCompany})=>{
        setCompany({companyName, jobRole, criteria, driveLink, aboutCompany})
        // API Call
        const res = await fetch(`${host}/api/company/addcompany`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({companyName, jobRole, criteria, driveLink, aboutCompany})
        });
        const json = await res.json();
        // console.log(json)
        setCompany(json);
        return json.success;
    }

      //   get company
      const getCompany = async ()=>{
        // API Call
        const res = await fetch(`${host}/api/company/getcompany`, {
            method: 'GET'
        });
        const json = await res.json();
        // console.log("cc",json)
        setCompany(json);
        return json;
    }



    return (
        <CompanyContext.Provider value={{company, setCompany, createCompany, getCompany }} >
            {props.children}
        </CompanyContext.Provider>
    );

}

export default CompanyState;