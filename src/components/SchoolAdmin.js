import React from 'react'
import Footer from './footer/Footer'

const SchoolAdmin = () => {
  return (
    <>
    <div id="hero">
        <h1>Super deals</h1>
        <h2>On all products</h2>
    </div>


    <div id="product1" class="section-p1">
        <h2>School Admin Dashboard</h2>
        
    </div>

    <h2>Manage Students</h2>
    
        
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
        

        <h2>Manage Clubs</h2>
    
        
            <table class="center">
                

                        <tr>
                            <th>No</th>
                            <th>Club</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>University</th>
                            <th>Details</th>
                            <th>Operations</th>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td>Swimming </td>
                            <td>swimming@mavs.uta.edu</td>
                            <td>+ 135679007923</td>
                            <td>UTA</td>
                            <td><button>Details</button></td>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Volleyball </td>
                            <td>volley@mavs.uta.edu</td>
                            <td>+ 157867900792</td>
                            <td>UTA</td>
                            <td><button>Details</button></td>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Basketball </td>
                            <td>basketball@mavs.uta.edu</td>
                            <td>+ 167867900792</td>
                            <td>UTA</td>
                            <td><button>Details</button></td>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>
                    
            </table>
        

        <h2>Manage Business Owners</h2>
    
        
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
        

    <Footer />

    </>
  )
}

export default SchoolAdmin