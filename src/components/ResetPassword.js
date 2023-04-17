import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'




const ResetPassword = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const forgotHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",email:email}
    
    //navigate('/dashboard')
    try {
      const { data } = await axios
        // .post('https://hxj0776.uta.cloud/react-backend/forgotpassword.php', config)
        .post('http://localhost/Backend/resetpassword.php', config)
        .then((response) => {
          //console.log(response.data)
          navigate('/changepassword')
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
        <div class="login-block-pass">
            <div class="login-form-pass">
                <form action="#" onSubmit={forgotHandle} method="post">
                        
                    <h2>&nbsp;Reset Password</h2>
                    <div class="container">
                    <label ><b>Enter Email</b></label>
                    <input type="text" placeholder="Enter Email " onChange={(e) => setEmail(e.target.value)} name="uname" required/>
                
                    
                    <button type="submit">Send</button>
                    
                    </div>
                
                    
                </form>
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default ResetPassword