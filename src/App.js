import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoggedInHome from "./components/LoggedInHome";
import DashboardHome from "./components/DashboardHome";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserState from "./context/myUsers/UserState";
import RecordState from "./context/records/RecordState";
import Preferences from "./components/Preferences";
import UserSettings from "./components/UserSettings";
import AdminHome from "./components/AdminHome";
import CompanyState from "./context/companies/CompanyState";


function App() {


  return (
    <div className="overflow-x-hidden">

      <UserState>

      <CompanyState>

      
        <RecordState>
          <Router>



            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/dashboard" element={<Dashboard />}>
                <Route exact path="" element={<DashboardHome />} />
                <Route exact path="preferences" element={<Preferences />} />
                <Route exact path="adminhome" element={<AdminHome />} />
                <Route exact path="settings" element={<UserSettings />} />
              </Route>
              <Route exact path="/home" element={<LoggedInHome />} />
            </Routes>
          </Router>
        </RecordState></CompanyState>
      </UserState>
    </div>
  );
}

export default App;
