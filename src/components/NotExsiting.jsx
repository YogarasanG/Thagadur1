import React from 'react'
import { Link } from 'react-router-dom';

function NotExsiting() {
  const smile= "😄";
  const back= `>>>back to home ${smile}>>>`;
  
  return (
    <div>
      <span>
        <h3 className='question'>Error 404</h3> <span><p className='answer'>Page not Found 😐</p></span>
        <h5><Link to="/" >{back}</Link></h5>
      </span>
    </div>
  )
}

export default NotExsiting
