import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
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
            <FaFacebook />
            <FaLinkedinIn />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>
        <div className="col-md-4 text-center" data-aos="fade-left">
          <img
            src="/android-chrome-512x512.png"
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
