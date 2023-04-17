import React from 'react'

import b1 from '../assets/Advertisement/pic1.jpg'
import b2 from '../assets/Advertisement/pic2.jpg'
import b3 from '../assets/Advertisement/pic3.jpg'

import c1 from '../assets/Chats/boy.jpg'
import c2 from '../assets/Chats/girl.jpg'
import Footer from './footer/Footer'


const Business = () => {
  return (
    <>

    

    <div id="hero">
        <h1>Mercado Escolar</h1>

        <h2>House of Super deals</h2>
        <h4>On all products</h4>
    </div>


    <div id="product1" class="section-p1">
            <h2>New Products</h2>
            <p>Summer Collection New Modern Design</p>
            <div class="side">
                <div class="card">
                    <img src={b1} width="300" height="250" alt="Denim Jeans" />
                    <h2>Tailored Jeans</h2>
                    <p class="price">$19.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <p><button>Add to Cart</button></p>
                    </div>
                
                <div class="card">
                    <img src={b2} width="300" height="250" alt="Denim Jeans" />
                    <h2>Tailored Jeans</h2>
                    <p class="price">$19.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </div>
                
                <div class="card">
                    <img src={b3} width="300" height="250" alt="Denim Jeans" />
                    <h2>Tailored Jeans</h2>
                    <p class="price">$19.99</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <p><button>Add to Cart</button></p>
                </div>
            </div>
    </div>

    <div class="product-page">
            <div class="product-form">
                <form action="/action_page.php">
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
                </form>
            </div>
        </div>
                

        <div id="ad1" class="section-p1">
            <p>Your Collection</p>
            <div class="pro-container">
                <div class="pro" onclick="window.location.href='sproduct.html';">
                    <img src={b1} alt=""/>
                    <div class="des">
                
                        <h5>iPADs</h5>
                        
                    </div>
                </div>
                <div class="pro">
                    <img src={b2} alt=""/>
                    <div class="des">
                        <h5>Clubbing</h5>
                    </div>
                </div>
                <div class="pro">
                    <img src={b3} alt=""/>
                    <div class="des">
                        
                        <h5>Garage</h5>
                    
                    </div>
                </div>
            </div>
        </div>


        <div class="chat">
            <h2>Chat Messages</h2>
            
            <div class="container">
                <img src={c2} alt="Avatar"/>
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </div>
            
            <div class="container darker">
                <img src={c1} alt="Avatar" class="right" />
                <p>Hey! I'm fine. Thanks for asking!</p>
                <span class="time-left">11:01</span>
            </div>
            
            <div class="container">
                <img src={c2} alt="Avatar"/>
                <p>Sweet! So, what do you wanna do today?</p>
                <span class="time-right">11:02</span>
            </div>
            
            <div class="container darker">
                <img src={c1} alt="Avatar" class="right" />
                <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                <span class="time-left">11:05</span>
            </div>
        </div>
   
    
    <Footer />
    </>
    
  )
}

export default Business