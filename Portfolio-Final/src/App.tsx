import './index.css'
import Nav from './Components/nav'
import StackIcons from './Components/Stack-Icons'
import Cards from './Components/Cards-right'
import Me from '../public/Dylan1-fotor-20230726192736.png'
import Github from '../public/github1.png'
import Linkedin from '../public/linkedin1.png'
import Aboutme from '../public/software-developer-6521720_960_720 1.png'
import Map from '.././public/map.png'
import Gmail from '../public/gmail.png'

function App() {
  return (
    <main>

      <Nav/>

        <section id='hero-container'>
            <div className='hero-info'>

              <div className='hero-text'>            
                <h1>FullStack Developer 👋🏼</h1>
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
                <img src={Me} alt='Picture of Dylan' id='main-picture'></img>
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

        <section id='portfolio-cards'>
          <header className='card-header'>
            <h3>Portfolio</h3>
            <h2>Every endeavor stands as an individual masterpiece of progress.✨</h2>
          </header>

          <Cards/>

        </section>

        <div id='footer'>

          <div className='contact-info'>
            <h3>Contact</h3>
            <h2>Let me know what's up!</h2>

            <div className='contact-content'>

              <div className='firts-contact'>

                <a href='https://www.google.com/maps/place/Santo+Domingo+Este/@18.5108023,-69.8422345,13z/data=!3m1!4b1!4m6!3m5!1s0x8eaf86f1f07bf257:0x79a94f00155fb584!8m2!3d18.4893469!4d-69.8255369!16s%2Fm%2F027wvfj?entry=ttu' target='blank'>
                  <div className='circle'>
                    <img src={Map} alt='Google map'></img>
                  </div>
                </a>

                <div className='contact-text'> 
                  <h4>Location</h4>
                  <p>Dominincan Republic</p>
                </div>

              </div>


              <div className='second-contact'>

                <a id='acircle2' href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTtRrtbjlRrQhVhjhdQJrcknVQnKNGcsCkQpLqQvVslQNvzPfBBVDnxMBcVSDxnPFffqzm' target='blank'>
                  <div className='circle2'>
                    <img src={Gmail} alt='Gmail'></img>
                  </div>
                </a>

                <div className='contact-text'> 
                  <h4>Mail</h4>
                  <p>dylan.minaya12@gmail.com</p>
                </div>

              </div>
            </div>
          </div>

          <div className='rights'>
            <h3>Copyright © 2023. All rights are reserved</h3>
          </div>

        </div>
    </main>
  )
}

export default App
