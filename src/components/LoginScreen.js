import React, { useState, useContext } from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import axios from 'axios'
import { UserContext } from '../AppContext/UserContext'
import { Link, useNavigate } from 'react-router-dom'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [pass, setPassword] = useState('')
    const [error, setError] = useState('')
    const { value, setValue } = useContext(UserContext)
    const [isLoggedin, setLogin] = useState(false)
    const navigate = useNavigate()
const loginHandle = async (e) => {
    e.preventDefault()
    let config = { method: 'POST', email: email, password: pass }
    

    try {
        // debugger
        await axios
          .post('http://localhost/Backend/login.php', config)
          .then((response) => {
            // debugger
            console.log(response.data)
  
            setLogin(true)
            if (Object.keys(response.data.userData).length > 0) {
              let obj = {...response.data.userData}
              obj = {...obj, isLogged: isLoggedin}
              setValue(obj)
              navigate('/dashboard')
            }
          })
          .catch((error) => {
            console.log('no authorization', error)
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
    
        
        <div id="page-header" class="about-header">

            <h2>WELCOME</h2>
            <p>JOIN OUR JOURNEY TO MAKE THE FUTURE</p>

        
        <div class="login-block">
                    <div class="login-form">
                        <form onSubmit={loginHandle} method="post">
                                
                            <h2>&nbsp;Login Form </h2>
                                <div class="container">
                                <label  id="use" ><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" onChange={(e) => setEmail(e.target.value)}
                      required />
                            
                                <label id="pas" ><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" onChange={(e) => setPassword(e.target.value)}
                      required />
                                
                                <Link to='/resetpassword'>Forget Password?</Link>
                                <button type="submit">Login</button>
                                
                                </div>
                        
                            
                        </form>

                    </div>
        </div>

        
        
                
                
        {/*
        <div>
                <div class="login-block">
                    <div class="login-form">
                        <form action="#" method="post">
                                
                            <h2>&nbsp;Login Form </h2>
                            <div class="container">
                            <label  id="use" ><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required />
                        
                            <label id="pas" ><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                            <a href="forgetpassword.html"><u>ForgetPassword?</u></a>
                                
                            <button type="submit">Login</button>
                            
                            </div>
                        
                            
                        </form>

                    </div>
                    <div class="signup-form">
                        <form action="/action_page.php" style="border:1px solid #ccc">
                            <div class="container">
                            <h2>Sign Up</h2>
                            <p>Please fill in this form to create an account.</p>
                            
                            <label id="fn" ><b>First Name</b></label>
                            <input type="text" placeholder="Enter First Name" name="name" required />

                            <label id="ln" ><b>Last Name</b></label>
                            <input type="text" placeholder="Enter Last Name" name="name" required />

                            <label id="em" ><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />
                        
                            <label id="pass" ><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                        
                            <label id="pasrep" ><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                            
                            <div class="dropdown">
                            <button class="dropbtn">Category
                                <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Student</a>
                                    <a href="#">Business</a>
                                    <a href="#">School Admin</a>
                                </div>
                            </div>

                            
                            
                            <div class="clearfix">
                                <button type="button" class="cancelbtn">Cancel</button>
                                <button type="submit" class="signupbtn">Sign Up</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        */}     
    </div>
   

    <Footer />
    </>
  )
}

export default LoginScreen