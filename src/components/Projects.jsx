import React from 'react'
import { Helmet } from 'react-helmet';

const Projects = () => {
  const projects = [
    {id:1,src:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:2,src:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:3,src:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:4,src:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:5,src:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id:6,src:"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  ]
  return (
    <section id='projects'>
      <Helmet>
        <title>Ankit Jha - My Projects</title>
        <meta name="description" content="Explore Ankit Jha's portfolio of projects. View images and details of web development projects."/>
       
      </Helmet>

      <h1 className='text-center mb-5 fw-bold display-5' data-aos="fade-up">My Projects</h1>
      <div className="row">
        {
          projects.map((project) => (
            <div className="col-md-4" key={project.id} data-aos="fade-up">
              <article>
                <div className="card">
                  <img src={project.src} alt={`Project ${project.id}`} className='card-img-top' />
                </div>
              </article>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects