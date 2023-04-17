import React from 'react'

const Admin = () => {
  return (
    <>

    <div id="hero">
        <h1>Super deals</h1>
        <h2>On all products</h2>
    </div>


    <div id="product1" class="section-p1">
        <h2>Admin Dashboard</h2>
        <p>How y'all doin?</p>
    </div>

    <div class="adminstyle">

               
            <h2>Manage Students</h2>

            <button class="cancelbtn">Add Student</button> 
            <br></br>
            <button class="cancelbtn">Generate Report</button>

    
          
                <table class="center">
                    
                    <tr>
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Category</th>
                    <th>Details</th>
                    <th>Operations</th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>William </td>
                        <td>Beski</td>
                        <td>wilbesski@mavs.uta.edu</td>
                        <td>Student</td>
                        <td><button>Details</button></td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Wanda </td>
                        <td>Beski</td>
                        <td>wanbesski@mavs.uta.edu</td>
                        <td>Student</td>
                        <td><button>Details</button></td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>John </td>
                        <td>Doe</td>
                        <td>JohnDoe@mavs.uta.edu</td>
                        <td>Student</td>
                        <td><button>Details</button></td>
                        <td><button>Edit</button> <button>Delete</button></td>
                    </tr>
                        
                </table>
            

            <h2>Manage Business Owners</h2>
            <div>
                <button class="cancelbtn">Add Business Owners</button>
                <br></br>
                <button class="cancelbtn">Generate Report</button>
            </div>

            
            
                    <table class="center">
                      
                                    
                                    <tr>
                                        <th>No</th>
                                        <th>Business Name</th>
                                        <th>Phone Number</th>
                                        <th> Timings</th>
                                        <th>Category</th>
                                        <th>Details</th>
                                        <th>Operations</th>
                                    </tr>
            
                                    <tr>
                                        <td>1</td>
                                        <td>Chick-fil-a</td>
                                        <td>468-982-6554</td>
                                        <td>10:00 Am - 9:00 Pm</td>
                                        <td>Food Court</td>
                                        <td><button>Details</button></td>
                                        <td><button>Edit</button> <button>Delete</button></td>
                                    </tr>
            
                                    <tr>
                                        <td>2</td>
                                        <td>Denim Studio </td>
                                        <td> 654-745-9880</td>
                                        <td>10:00 Am - 9:00 Pm </td>
                                        <td>Men's Apparel</td>
                                        
                                        <td><button>Details</button></td>
                                        <td><button>Edit</button> <button>Delete</button></td>
                                    </tr>
            
                                    <tr>
                                        <td>3</td>
                                        <td>JD Sports</td>
                                        <td>988-987-8778</td>
                                        <td>10:00 Am - 9:00 Pm</td>
                                        <td>Athletic</td>
                                        <td><button>Details</button></td>
                                        <td><button>Edit</button> <button>Delete</button></td>
                                    </tr>
                                
                           
                    </table>
               

            <h2>Manage School Admins</h2>

            <button class="cancelbtn">Add School Admins</button>
            <br></br>
            <button class="cancelbtn">Generate Report</button>


            
              
                    <table class="center">
                        
                                <tr>
                                <th>No</th>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Category</th>
                                <th>Details</th>
                                <th>Operations</th>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>joe </td>
                                    <td>wilbesski@mavs.uta.edu</td>
                                    <td>+ 17655667824</td>
                                    <td>School Admin</td>
                                    <td><button>Details</button></td>
                                    <td><button>Edit</button> <button>Delete</button></td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>ojro </td>
                                    <td>ojro@mavs.uta.edu</td>
                                    <td>+ 14555456678</td>
                                    <td>School Admin</td>
                                    <td><button>Details</button></td>
                                    <td><button>Edit</button> <button>Delete</button></td>
                                </tr>

                                <tr>
                                    <td>3</td>
                                    <td>kia </td>
                                    <td>kia@mavs.uta.edu</td>
                                    <td>+ 19845456678</td>
                                    <td>School Admin</td>
                                    <td><button>Details</button></td>
                                    <td><button>Edit</button> <button>Delete</button></td>
                                </tr>
                           
                    </table>
                
    
    </div>


    </>

  )
}

export default Admin