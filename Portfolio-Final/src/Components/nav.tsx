import '../index.css'

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
                        <a href='#'>Home</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#'>About</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#'>Portfolio</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#'>Contact</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    )
}

export default Nav
