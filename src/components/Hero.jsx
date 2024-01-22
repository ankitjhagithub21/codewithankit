import React from 'react';
import { FaFacebook, FaGithub} from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id='home'>
      <div className="row flex-wrap-reverse">
        <div className="col-md-8 h-full d-flex flex-column justify-content-center" data-aos="fade-right">
          <h1 className='display-5 fw-bold'>Hi, I'm Ankit Jha</h1>
          <div className='d-flex gap-1 fs-4'>
            <p>I am a </p>
            <Typewriter
              options={{
                strings: ["Web Developer", "Youtuber", "Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className='d-flex fs-4 gap-2 align-items-center'>
           <a href="https://www.facebook.com/ankitjha2018" target='_blank'> <FaFacebook /></a>
            <a href="https://www.linkedin.com/in/ankitjha3731/" target='_blank'><FaLinkedin /></a>
           <a href="https://www.instagram.com/its.ankitjha/" className='fs-3' target='_blank'>
           <AiFillInstagram />
           </a>
            <a href="https://github.com/ankitjhagithub21" target='_blank'>
            <FaGithub />
            </a>
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-left">
          <img
            src="/ankitjha.png"
            alt="Ankit Jha"
            className='img-fluid border rounded-circle'
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
