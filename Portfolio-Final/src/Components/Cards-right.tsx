import '../index.css'
import Car from '../../public/car.webp'

function CardsRight() {
    return(
        
        <>
            <section id='cards'>
                <div className='portfolio-card-shape'>
                    <div className='portfolio-content'>

                    <div className='porfolioTcontainer'>
                        <div className='portfolio-text'>
                            <h2>Project 1</h2>
                            <p>In the heart of the bustling city, amidst the cacophony of car horns and chatter of passersby, there stood an ancient bookstore. Its weathered sign swung gently in the breeze, bearing the weight of countless stories within its creaky walls.</p> 
                        </div>

                        <div className='tools-used'>
                            <span>React</span>
                            <span>CSS</span>
                        </div>

                        <div className='source'>
                            <a href='#'><p>Source code</p></a>
                            <a href='#'><p>Live Demo</p></a>
                        </div>
                    </div>

                        <div className='portfolio-picture'>
                            <img src={Car} alt='project 1'></img>
                        </div>

                    </div>
                </div>
                
            </section>
        </>

    )
}

export default CardsRight