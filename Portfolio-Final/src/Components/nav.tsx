import '../index.css'
import { Link } from 'react-scroll'
import Menu1 from '../../public/menu.png'
import { useState } from 'react';

function Nav() {

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
};


    return(

    <nav>
        <div id='nav-container'>
            <div id='nav-items-left'>
                <h1>Dylan.dev</h1>
            </div>

            <div id='nav-items-right'>
                <ul>

                    <li className='nav-item'>
                        <Link to="hero-container" spy={true} smooth={true} offset={-50} duration={0}><a>Home</a></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="aboutmeContainer" spy={true} smooth={true} offset={-240} duration={0}><a>About</a></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="portfolio-cards" spy={true} smooth={true} offset={-150} duration={0}><a>Portfolio</a></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="footer" spy={true} smooth={true} offset={-50} duration={0}><a>Contact</a></Link>
                    </li>

                </ul>

                <div className='toggle-btn'>
                    <img src={Menu1} alt="Toggle menu" onClick={toggleDropdown} />
                </div>

            </div>
        </div>

        {dropdownVisible && (
            
            <div id='dropdown-menu'>

            <ul> 
                
                <Link to="hero-container" spy={true} smooth={true} offset={-50} duration={0}>
                    <li>
                        <a>Home</a>
                    </li>
                </Link>

                <Link to="aboutmeContainer" spy={true} smooth={true} offset={-100} duration={0}>
                    <li>
                        <a>About</a>
                    </li>
                </Link>

                <Link to="portfolio-cards" spy={true} smooth={true} offset={-75} duration={0}>
                    <li>
                        <a>Portfolio</a>
                    </li>
                </Link>

                <Link to="footer" spy={true} smooth={true} offset={-50} duration={0}>
                    <li>
                        <a>Contact</a>
                    </li>
                </Link>

            </ul>
        </div>

        )}
    </nav>

    )
}

export default Nav
