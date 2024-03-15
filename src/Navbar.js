import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <div className='container-fluid'>



                <div className='row pt-4 ps-4 pb-4  fw-bolder' id='nav-row'>

                    <div className='col-lg-1'>
                        <h6>LOGO</h6>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/" id='a'><h6 id='b'>HOME</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/business" id='a'><h6 id='b'>BUSINESS</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/entertainment" id='a'><h6 id='b'>ENTERTAIN</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/general" id='a'><h6 id='b'>GENERAL</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/health" id='a'><h6 id='b'>HEALTH</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/science" id='a'><h6 id='b'>SCIENCE</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/sports" id='a'><h6 id='b'>SPORTS</h6></Link>
                    </div>

                    <div className='col-lg-1'>
                        <Link to="/technology" id='a'><h6 id='b'>TECHNOLOGY</h6></Link>
                    </div>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-1' >
                        <Link to="/login" id='a'><h6 id='b'>LOGIN</h6></Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar