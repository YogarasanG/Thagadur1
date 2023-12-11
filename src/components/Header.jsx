import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

function Header({name1,name2}) {
  return (
    <div>
       <div className="head">
        <div className="head1 text-xl-left">
          <h1><Link to='/'>{name1}</Link></h1>
        </div>
        <div className="head2">
          <h5>{name2}</h5>
        </div>
      </div>
    </div>
  )
}

export default Header
