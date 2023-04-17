import React, { useState, useContext} from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../AppContext/UserContext'


const ChangePassword = () => {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const userDat = useContext(UserContext)
  const [pass, setPassword] = useState('')
  const [oldpass, setOldPassword] = useState('')
  const navigate = useNavigate()

  const forgotHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",email:email,password:pass,oldpassword:oldpass}
    
    //navigate('/dashboard')
    try {
      const { data } = await axios
        .post('http://localhost/Backend/updatepassword.php', config)
        .then((response) => {
          console.log(response.data)
          navigate('/login')
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      setTimeout(() => {
        setError('Invalid credentials...')
      }, 10)
    }
  }
 



  return (
    <>
    <Navbar />

    <div>
        <div className="login-block-pass">
            <div className="login-form-pass">
                <form  onSubmit={forgotHandle} method="post">
                        
                    <h2>&nbsp;Change Password</h2>
                    <div class="container">

                      <label ><b>Email</b></label>
                      <input type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} required />                
                      <label ><b>Current Password</b></label>
                      <input type="password" placeholder="Enter Password" name="old" onChange={(e) => setOldPassword(e.target.value)} required />                
                      <label ><b>Enter New Password</b></label>
                      <input type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} required />                
                      
                      <button type="submit" value='login'>Confirm Password</button>
                    
                    </div>
                
                    
                </form>
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default ChangePassword