import React, { useState } from 'react';
import { Link } from 'react';

function navBar() {
    const [click, setClick] = useState;
    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    return (
        <>
            <nav className="navBar"> 
                <div className="navBar-container">
                    <Link to="/" className="nav-logo">
                        Antonio Mendoza <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu.icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default navBar;
