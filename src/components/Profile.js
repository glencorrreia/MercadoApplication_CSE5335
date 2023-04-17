import React from 'react'
import pro1 from '../assets/Profile/60111.jpg'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
const Profile = () => {
  return (
    <>
    <Navbar />

    <div>
        
       
            
           
            <div class="signup-form">
                <div >
                    <img src={pro1} width="25%"/>
                </div>
                <form action="/action_page.php" >
                    <div class="container">
                    <h2>Profile</h2>
                    
                    <label for="fname"><b>First Name</b></label>
                    <input type="text" placeholder="Enter First Name" name="name" required/>

                    <label for="lname"><b>Last Name</b></label>
                    <input type="text" placeholder="Enter Last Name" name="name" required/>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>
                
                    <label for="contact"><b>Phone</b></label>
                    <input type="text" placeholder="Enter Phone No" name="psw" required/>
                
                    <label for="category"><b> Category</b></label>
                    <input type="text" placeholder="Student" name="name" required/>

                    
                  
                    
                    
                    
                    <div class="clearfix">
                        
                        <button type="submit" class="signupbtn">Submit</button>
                    </div>
                    </div>
                </form>
            </div>
        
    </div>
            
        
                
    
            
        
    <Footer />
    

    </>


  )
}

export default Profile