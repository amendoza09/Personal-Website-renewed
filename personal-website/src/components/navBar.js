import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const {click, setClick} = useSate(false);
    return (
        <React.Fragment>
            <nav className='navbar'>
                <div className='navbar-conatiner'>
                    <Link to='/' className='navbar-logo'>
                        Toni <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon'>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar