import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import Typewriter from "typewriter-effect";
const Hero = () => {
    return (
        <section id='home'>
            <div className="row flex-wrap-reverse">
                <div className="col-md-8 h-full d-flex flex-column  justify-content-center">
                    <h2 className='display-5 fw-bold'> <span>Hi, I'm</span> Ankit Jha</h2>
                    <div className='d-flex gap-1  fs-4'>
                        <p> I am a </p>

                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Youtuber", "Student"],
                                autoStart: true,
                                loop: true,

                            }}
                        />

                    </div>
                    <div className='d-flex fs-4 gap-2 align-items-center'>
                        <FaFacebook/>
                        <FaLinkedinIn/>
                        <FaInstagram/>
                        <FaGithub/>
                       
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <img src="/android-chrome-512x512.png" alt="ankit-jha"  className='img-fluid border rounded-circle' />
                </div>
            </div>
        </section>
    )
}

export default Hero