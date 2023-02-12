import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = ({children}) => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {children}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu bg-secondary p-4 w-80 ">
            {/* <!-- Sidebar content here --> */}
            <li className='hover:bg-primary hover:text-white rounded'><Link>Boys shopping</Link></li>
            <li className='hover:bg-primary hover:text-white rounded'><Link>Girls shopping</Link></li>
            <li className='hover:bg-primary hover:text-white rounded'><Link>Household items</Link></li>
            <li className='hover:bg-primary hover:text-white rounded'><Link>Computer Accessories</Link></li>
            <li className='hover:bg-primary hover:text-white rounded'><Link>Gadgets</Link></li>
            <li className='hover:bg-primary hover:text-white rounded'><Link>Jewelry</Link></li>
            <li className='hover:bg-primary hover:text-white rounded'><Link>Home decoration</Link></li>
            <li className='hover:bg-primary hover:text-white rounded'><Link>Cosmetics</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;