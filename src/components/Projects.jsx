import React from 'react'

const Projects = () => {
  const projects = [
    {id:1,src:"https://codewithankit.netlify.app/img/tcccupkasba.png",path:"https://tcccupkasba.netlify.app/"},
    {id:2,src:"https://codewithankit.netlify.app/img/codingbytes.png",path:"https://the-coding-bytes.vercel.app/"},
    {id:3,src:"https://codewithankit.netlify.app/img/codingwithankit.png",path:"https://codingwithankit.vercel.app/"},
  
  ]
  return (
    <section id='projects'>
      
      <h1 className='text-center mb-5 fw-bold fs-1' data-aos="fade-up">My Projects</h1>
      <div className="row">
        {
          projects.map((project) => (
            <div className="col-md-4" key={project.id} data-aos="fade-up">
              <article>
                <a className="card" href={project.path} target='_blank'>
                  <img src={project.src} alt={`Project ${project.id}`} className='card-img-top rounded' />
                </a>
              </article>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects