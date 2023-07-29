import './index.css'
import Nav from './Components/nav'
import StackIcons from './Components/Stack-Icons'
import Me from '../public/Dylan1-fotor-20230726192736.png'
import Github from '../public/github1.png'
import Linkedin from '../public/linkedin1.png'
import Aboutme from '../public/software-developer-6521720_960_720 1.png'

function App() {
  return (
    <>

    <Nav/>

      <section id='hero-container'>
          <div className='hero-info'>

            <div className='hero-text'>            
              <h1>Full Stack Developer 👋🏼</h1>
              <p>Hi, I'm Dylan Minaya! I am an adaptive MERN full-stack developer in the Dominican Republic, Santo Domingo.</p>
            </div>

            <div className='hero-icons'>
              <a href='https://github.com/Crypt1cMS' target='blank'>
                <img id="git" src={Github} alt='Github logo' className='hero-icons'></img>
              </a>

              <a href='https://www.linkedin.com/in/dylan-minaya-candelario-97884b261/' target='blank'>
                <img id="LinkedIn" src={Linkedin} alt='LinkedIn logo' className='hero-icons'></img>
              </a>
            </div>

          </div>

            <div>
              <img src={Me} alt='Picture of Dylan' id='main-picrue'></img>
            </div>
      </section>

      <StackIcons/>

      <section id='aboutmeContainer'>
        <div className='about-me-card'>
          <div className='about-me-content'>
            <div className='about-me-picture'>

              <img src={Aboutme} alt=''></img>

            </div>

              <div className='about-me-text'>
                <h3><span>About me</span></h3>
                <h2>A dedicated MERN full-stack Developer in Dominican Republic</h2>
                <p>I am young and promising web developer with a remarkable ability to learn quickly. Despite me just starting coding, I dive headfirst into coding, absorbing concepts like a sponge. My passion and tenacity fuel my progress as I fearlessly embrace challenges and seek guidance from experienced developers.</p>

              </div>
            </div>
        </div>

      </section>
    </>
  )
}

export default App
