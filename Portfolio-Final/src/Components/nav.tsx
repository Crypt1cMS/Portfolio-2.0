import '../index.css'
import { Link } from 'react-scroll'

function Nav() {
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
                        <Link to="aboutmeContainer" spy={true} smooth={true} offset={-50} duration={0}><a>About</a></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="portfolio-cards" spy={true} smooth={true} offset={-100} duration={0}><a>Portfolio</a></Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="footer" spy={true} smooth={true} offset={-50} duration={0}><a>Contact</a></Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    )
}

export default Nav
