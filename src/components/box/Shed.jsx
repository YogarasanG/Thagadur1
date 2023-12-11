import React from 'react'
import { Link } from 'react-router-dom';
import '../style.css'
function Shed() {
  return (
    <div className='home'>
    <h2 className='question'>Outdoor Sheds
</h2>
<p className='answer'>Welcome to Thagadur Welding Works, where we bring functionality and aesthetics together in our custom-designed outdoor sheds. Explore our range of sturdy and weather-resistant sheds that stand the test of time, enhancing your outdoor spaces.
</p>
<img src="./images/img65.jpg" alt="Thagadur" className="pho" />
        
<h2 className='question'>Why Choose Our Outdoor Sheds?
</h2>

<p className='answer'>At Thagadur Welding Works, we take pride in crafting outdoor sheds that not only meet but exceed your expectations. Here's what sets our sheds apart:
</p>
<h4 className='SubHeading'>Durability
</h4>
<p className='answer'>Our sheds are built to withstand the elements, ensuring longevity and durability even in harsh weather conditions.
</p>
<h4 className='SubHeading'>Custom Design
</h4>
<img src="./images/img98.jpg" alt="Thagadur" className="pho" />
<p className='answer'>Every outdoor shed is a unique creation, tailored to complement your specific requirements and style preferences.
</p>
<h4 className='SubHeading'>Quality Craftsmanship
</h4>
<p className='answer'>Backed by years of experience, our skilled craftsmen ensure each shed is a testament to quality and precision.
</p>
<h2 className='question'>Customization Options
</h2>
<p className='answer'>Looking for something specific? We offer customization options to ensure your outdoor shed fits seamlessly into your outdoor space. Contact us to discuss your ideas and requirements.
</p>
<h2 className='question'>How to Order
</h2>
<div className="gateImage">
        <img src="./images/img62.jpg" alt="Thagadur" className="photo" />
        <img src="./images/img33.jpg" alt="Thagadur" className="photo" />
        <img src="./images/img64.jpg" alt="Thagadur" className="photo" />
      </div>
<p className='answer'>Ready to enhance your outdoor space with our custom-designed sheds? Follow these simple steps to place an order:
</p>
<h4 className='SubHeading'> <Link to='/Gallery'>Browse Collection:</Link></h4>
<p className='answer'>  Explore our outdoor shed collection and choose the design that suits your needs.
</p>
<h4 className='SubHeading'><Link to='/contact'>Contact Us:</Link></h4>
<p className='answer'> Reach out to us via phone or email to discuss your selected shed and any customization requirements.
</p>
<div>
        <Link to="/Playground" className="anger btn">
          Previous
        </Link>
        <Link to="/Stove" className="anger btn">
          Next
        </Link>
        <Link to="/Product" className="anger btn">
          Back to Product
        </Link>
      </div>
      <br />
      <p className='answer'><b>We look forward to helping you find the perfect outdoor shed for your space!
</b></p>
    </div>
  )
}

export default Shed
