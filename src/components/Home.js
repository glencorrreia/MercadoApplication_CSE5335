import React from 'react'
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

const Home = () => {
  return (
    <>  
        <Navbar />
        <div>
            <section id="hero">
                <h1>Super deals</h1>
                <h2>On all products</h2>
            </section>


            <section id="product1" class="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>

            </section>
        </div>

        <Footer />

    </>
  )
}

export default Home