import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
          <h2>Dashboard</h2>
          <FontAwesomeIcon icon={faClose} className='sidebar-header__icon'/>
        </div>
        <div className='sidebar-tenant button'>Add New Tenant</div>
        <div className='sidebar-pay button'>Add New Payment</div>
        <div className='sidebar-ba button'>
            Building A
        </div>
        <div className='sidebar-bb button'>
            Building B
        </div>
        <div className='sidebar-spending button'>Spendings</div>
        <div className='sidebar-history button'>History</div>
    </div>
  )
}

export default Sidebar