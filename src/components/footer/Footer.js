import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {

    state = { clicked: false }
    render() {
        return (
          <>
            <footer className="section-p1">
                <div class="col">
                <h4>Contact</h4>
                <p><strong>Address: </strong> 231 East Randol Road Rd, Arlington, Texas</p>
                <p><strong>Phone:</strong> (+1) 469 964 3351</p>
                <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                <div class="follow">
                    <h4>Follow Us</h4>
                    <div class="icon">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-pinterest-p"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
                </div>

            <div class="col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>


            <div class="copyright">
                <p>© Mercado Escolar </p>
            </div>
        </footer>
          </>
        )
    }
}
    
export default Footer
    