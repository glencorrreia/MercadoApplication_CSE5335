import React from 'react'
import ad1 from '../assets/Advertisement/pic1.jpg'
import ad2 from '../assets/Advertisement/pic2.jpg'
import ad3 from '../assets/Advertisement/pic3.jpg'

import Footer from './footer/Footer'

const User = () => {
  return (
    <>

    <div id="hero">
        <h1>Super deals</h1>
        <h2>On all products</h2>
    </div>
    
    <div class="product-page">
        <div class="product-form">
            <form action="#" >
                <div class="container">
                <h2> Products</h2>
                
                <label ><b>Product Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required/>

                <label ><b>Product Description</b></label>
                <input type="text" placeholder="Enter Description" name="name" required/>

                <label ><b>Product Cost</b></label>
                <input type="text" placeholder="Enter Cost" name="name" required/>

                <label class="p_quantity" ><b>Product Quantity</b></label>
                <input type="number" placeholder="&nbsp;Enter Quantity" name="number" required/>

                <button class="button_style" type="submit">Add Product</button>

                </div>
            </form>

                <table class="center">
                    
                            <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Cost</th>
                            <th>Quantity</th>
                            <th>Operations</th>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>TV</td>
                                <td>Electronics</td>
                                <td>$1</td>
                                <td>10</td>
                                <td><button>Edit</button> <button>Delete</button></td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>TABLE</td>
                                <td>Electronics</td>
                                <td>$110</td>
                                <td>20</td>
                                <td><button>Edit</button> <button>Delete</button></td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>FAN</td>
                                <td>Electronics</td>
                                <td>$15</td>
                                <td>30</td>
                                <td><button>Edit</button> <button>Delete</button></td>
                            </tr>
                       
                  </table>
        </div>

    </div>

    <div class="product-page">
        <div class="product-form">
            <form action="#" >
                <div class="container">
                <h2> Clubs</h2>
                
                <label ><b> Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required/>

                <label ><b>Description</b></label>
                <input type="text" placeholder="Enter Description" name="name" required/>

                <label ><b>Contact</b></label>
                <input type="text" placeholder="Enter Contact" name="name" required/>

                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <button class="button_style" type="submit">Join </button>

                </div>
            </form>                
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
                
           
        </div>
    </div>


    <div class="product-page">
        <div class="product-form">
            <form action="#" >
                <div class="container">
                <h2> Advertisements</h2>
                
                <label ><b> Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required/>

                <label ><b>Description</b></label>
                <input type="text" placeholder="Enter Description" name="name" required/>

                <label >Select image:</label>
                <input type="file" id="img" name="img" accept="image/*"/>


                <button class="button_style" type="submit">Place Advertisements </button>

                </div>

                <div id="product1" class="section-p1">
                    <p>Your Collection</p>
                    <div class="pro-container">
                        <div class="pro" onclick="#">
                            <img src={ad1} alt=""/>
                            <div class="des">
                       
                                <h5>iPADs</h5>
                              
                            </div>
                        </div>
                        <div class="pro">
                            <img src={ad2} alt=""/>
                            <div class="des">
                                <h5>Clubbing</h5>
                            </div>
                        </div>
                        <div class="pro">
                            <img src={ad3} alt=""/>
                            <div class="des">
                             
                                <h5>Garage</h5>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>



    </div>

    
    
    <Footer />
    
    </>


    

  )
}

export default User