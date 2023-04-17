import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

const About = () => {
  return (
    <>
    <Navbar />

        <div>
            <div id="page-header" class="about-header">

                <h2>#KnowUs </h2>

                <p>Hi, we are Mercado Escolar </p>

            </div>

              <div id="about-head" class="section-p1">
                <div>
                    <h2>Who We Are?</h2>
                    <p>Mercado Escolar is a student-market community. It’s a place for college students to interact with local and national businesses in order to sell and buy goods. A chance for students to attain an education without being bled dry, of great sums of money, is long overdue. Against the rising costs of tuition and inflation of product prices, we set out to create an alternate system, a safe haven for students to buy and sell their products at prices that they can afford.</p>  

                    <p>While this is currently a community of college students started by college students, it does not have to stop there. We truly believe in the sharing power that a platform such as ours provides. There are many marketplaces out there on the internet; but not many value the local and communal experience that Mercado strives for. By selling or buying within their respective campus communities, students are empowering not only themselves but each other; trusting each other and coming together in solidarity against an economy primed to prey on the financially inexperienced, such as themselves. </p>

                    <abbr title="">We believe that any online community that can do this will always prevail over and above those that only seek profit. </abbr>

                    

                    
                </div>
              </div>



        </div>

    <Footer />
    </>
  )
}

export default About