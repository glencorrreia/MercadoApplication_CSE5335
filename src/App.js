import "./App.css"
import React, {useState,useMemo} from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import User from "./components/User";
import Business from "./components/Business";
import SchoolAdmin from "./components/SchoolAdmin";
import Admin from "./components/Admin";
import ResetPassword from "./components/ResetPassword";
import ChangePassword from "./components/ChangePassword";
import Profile  from "./components/Profile";
import { UserContext } from "./AppContext/UserContext";
import DashBoard from "./components/DashBoard";

function App () {
  const [value,setValue]=useState(null)
  const providerValue = useMemo(()=>({
    value,setValue
  }),[value,setValue])
    return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={providerValue}>
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<LoginScreen />}/>
            <Route path="/register" element={<RegisterScreen />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/user" element={<User />}/>
            <Route path="/business" element={<Business />}/>
            <Route path="/schooladmin" element={<SchoolAdmin />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/resetpassword" element={<ResetPassword />}/>
            <Route path="/changepassword" element={<ChangePassword />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/dashboard" element={<DashBoard />}/>


            </Routes>
            </UserContext.Provider>
      </BrowserRouter>
      </>
    )
};
export default App;
