import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'



const Contact = () => {
  return (
    <>
    <Navbar />
    <div id="page-header" class="about-header">

        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>

    </div>
    <div id="contact-details" class="section-p1">
        <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>

                <ul>
                    <li>
                        <i class="fal fa-map"></i>
                        <p>701 S Nedderman Dr, Arlington, TX 76019</p>
                    </li>
                    <li>
                        <i class="far fa-envelope"></i>
                        <p>contact_team@gmail.com </p>
                    </li>
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <p>(+1)564-738-2910  </p>
                    </li>
                    <li>
                        <i class="far fa-clock"></i>
                        <p>Monday to Saturday: 9.00am to 18.pm </p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.0782269383935!2d-97.11158402122065!3d32.7318053016143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d7211465b57%3A0x94b2302359ea02ee!2sStarbucks!5e0!3m2!1sen!2sus!4v1664320729884!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    <div id="form-details">
        <form action="#">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you </h2>
            <input type="text" name="name" id="msg" placeholder="Your Name"/>
            <input type="text" name="name" id="mail" placeholder="E-mail"/>
            <input type="text" name="name" id="subj" placeholder="Subject"/>
            <textarea name="name" id="your" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button class="normal">Submit</button>
        </form>
    </div>
    
   

    <Footer />
    </>
    )
}

export default Contact