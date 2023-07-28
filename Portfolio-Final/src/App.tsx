import './index.css'
import Nav from './Components/nav'
import StackIcons from './Components/Stack-Icons'
import Me from '../public/Dylan1-fotor-20230726192736.png'
import Github from '../public/github1.png'
import Linkedin from '../public/linkedin1.png'

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
              <img src={Github} alt='Github logo' className='hero-icons'></img>
              <img src={Linkedin} alt='LinkedIn logo' className='hero-icons'></img>
            </div>

          </div>

            <div>
              <img src={Me} alt='Picture of Dylan' id='main-picrue'></img>
            </div>
      </section>

      <StackIcons/>
    </>
  )
}

export default App
