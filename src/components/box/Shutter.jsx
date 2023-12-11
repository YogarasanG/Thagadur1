import React from 'react'
import{Link} from 'react-router-dom';
import '../style.css'

function Shutter() {
  return (
    <div className='home'>
      <h2 className='question'>Rolling Shutter</h2>
      <p className='answer'>At Thagadur Welding Works, we offer a variety of rolling shutters to meet your specific needs. Our rolling shutters combine functionality, security, and innovative design. Explore our range below:
</p>
<h2 className='question'>Normal Manual Shutter</h2>
<p className='answer'>The Normal Manual Shutter is a practical choice for spaces with limited height and width requirements. Easy to operate manually, it provides a cost-effective solution without compromising on security.
</p>
<img src="./images/img82.jpg" alt="Thagadur" className="pho" />
<h4 className='SubHeading'>Key Features:
</h4>
<ul >
  <li className="list-group-item list">Compact design for limited spaces
</li>
<li className="list-group-item list">Manual operation for simplicity
</li>
<li className="list-group-item list">Ideal for smaller openings
</li>

</ul>
<h2 className='question'>Gear Shutter
</h2>
<p className='answer'>The Gear Shutter is designed for larger openings where height and width are a concern. Operated with a gear mechanism, this shutter is suitable for spaces that require manual control by a designated person.
</p>
<div className="gateImage">
        <img src="./images/img81.jpg" alt="Thagadur" className="photo" />
        <img src="./images/img83.jpg" alt="Thagadur" className="photo" />
        <img src="./images/img5.jpeg" alt="Thagadur" className="photo" />
      </div>
<h4 className='SubHeading'>Key Features:
</h4>
<ul >
  <li className="list-group-item list">Gear-operated for ease of use
</li>
<li className="list-group-item list">Ideal for taller and wider openings
</li>
<li className="list-group-item list">Customizable based on specific requirements
</li>
<li className="list-group-item list">Explore Gear Shutter Options
</li>
</ul>
<h2 className='question'>Automatic Remote Shutter
</h2>
<p className='answer'>For ultimate convenience and enhanced security, our Automatic Remote Shutter is the ideal choice. Operated remotely, this shutter offers seamless automation, making it a perfect fit for various applications.
</p>
<img src="./images/img80.PNG" alt="Thagadur" className="pho" />
<h4 className='SubHeading'>Key Features:
</h4>
<ul>
  <li className="list-group-item list">Remote-controlled for ease of operation
</li>
<li className="list-group-item list">Automated for added convenience
</li>
<li className="list-group-item list">Ideal for taller and wider openings
</li>
<li className="list-group-item list">Customizable based on specific requirements
</li>
</ul>
<div>
        <Link to="/Pipe" className="anger btn">
          Previous
        </Link>
        <Link to="/Playground" className="anger btn">
          Next
        </Link>
        <Link to="/Product" className="anger btn">
          Back to Product
        </Link>
      </div><br />
      <p className='answer'><b>For inquiries, customization, or to place an order, please contact us. Our team is ready to assist you in finding the perfect rolling shutter solution for your space.</b></p>

</div>
  )
}

export default Shutter
