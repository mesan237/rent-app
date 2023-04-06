import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleUser, faBell  } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
        <FontAwesomeIcon icon={faBars} />
        
        <div className='navbar-icon'>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faCircleUser} />
        </div>
    </div>
  )
}

export default Navbar

