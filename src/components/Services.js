import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import p1 from '../assets/Products/1.jpg'
import p2 from '../assets/Products/2.jpg'
import p3 from '../assets/Products/3.jpg'

import c1 from '../assets/Clubs/1.jpg'
import c2 from '../assets/Clubs/2.jpg'
import c3 from '../assets/Clubs/3.jpg'



const Services = () => {
  return (
    <>
    
    <Navbar />
      
      <h2> Products</h2>
      <p>Summer Collection</p>

      <div id="product1" class="section-p1">
          <div class="side">
              <div class="card">
                  <img src={p1} width="300" height="150" alt="Denim Jeans" />
                  <h2>BodyWorks</h2>
                  <p class="price">$19.99</p>
                  <p>Some text about the Body Works comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                  <p><button>Add to Cart</button></p>
                  </div>
              
              <div class="card">
                  <img src={p2} width="300" height="150" alt="Denim Jeans" />
                  <h2>Electronics</h2>
                  <p class="price">$19.99</p>
                  <p>Some text about the Electronics. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                  <p><button>Add to Cart</button></p>
              </div>
              
              <div class="card">
                  <img src={p3} width="300" height="150" alt="Denim Jeans" />
                  <h2>Clothing</h2>
                  <p class="price">$19.99</p>
                  <p>Some text about the Clothing. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                  <p><button>Add to Cart</button></p>
              </div>
          </div>
      </div>

      <h2> Clubs </h2>
      <p>Most Trending</p>

      <div id="club1" class="section-p1">
            <div class="side">
                <div class="card">
                    <img src={c1} width="300" height="150" alt="Denim Jeans" />
                    <h2>Swimming</h2>
                    <p>lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <p><button>Join</button></p>
                    </div>
                
                <div class="card">
                    <img src={c2} width="300" height="150" alt="Denim Jeans" />
                    <h2>Football</h2>
                    <p>lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <p><button>Join</button></p>
                </div>
                
                <div class="card">
                    <img src={c3} width="300" height="150" alt="Denim Jeans" />
                    <h2>Basketball</h2>
                    <p>lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
                    <p><button>Join</button></p>
                </div>
            </div>
      </div>

      


    

    <Footer />
    </>
  )
}

export default Services