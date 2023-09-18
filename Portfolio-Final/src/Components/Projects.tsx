import '../index.css'

type ProjectsProps = {
    projectName: string;
    description: string;
    primaryTool: string;
    secondaryTool: string;
    source: string;
    demo: string;
    image: string
  };

function Projects({ projectName, description, primaryTool, secondaryTool, source, demo, image }: ProjectsProps) {
      
    return (
        <>
                    <section id='cards'>
                <div className='portfolio-card-shape'>
                    <div className='portfolio-content'>

                    <div className='porfolioTcontainer'>
                        <div className='portfolio-text'>
                            <h2>{projectName}</h2>
                            <p>{description}</p> 
                        </div>

                        <div className='tools-used'>
                            <span>{primaryTool}</span>
                            <span>{secondaryTool}</span>
                        </div>

                        <div className='source'>
                            <a href='#'><p>{source}</p></a>
                            <a href='#'><p>{demo}</p></a>
                        </div>
                    </div>

                        <div className='portfolio-picture'>
                            <img src={image} alt='project 1'></img>
                        </div>

                    </div>
                </div>
                
            </section>
        </>
    )
}



export default Projects