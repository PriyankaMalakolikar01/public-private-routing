import React from 'react'
import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary" >
            <div  >
                   {/* className='container' */}
                   
                   <Link to="/" className="navbar-brand" style={{ marginLeft: '1rem' }}>
                    Home
                    </Link> &nbsp;

                     <Link to="/aboutus" className="navbar-brand" >
                      About Us
                    </Link> &nbsp;
                    
                    <Link to="/contactus" className="navbar-brand">
                    Contact Us
                    </Link>
            </div>


        </nav>

    )
}
