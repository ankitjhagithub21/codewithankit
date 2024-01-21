import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <section id='about'>
      <Helmet>
        <title>Ankit Jha - About Me</title>
        <meta name="description" content="Ankit Jha - BCA student passionate about technology, programming, and software development. Explore my skills in Java, C++, database management, web development, and computer networks. Connect with me on social media." />
        <meta property="og:title" content="Ankit Jha - About Me" />
        <meta property="og:description" content="Ankit Jha - BCA student passionate about technology, programming, and software development. Explore my skills in Java, C++, database management, web development, and computer networks. Connect with me on social media." />
        {/* Add more meta tags as needed for your specific requirements */}
      </Helmet>

      <div className="row">
        <div>
          <h1 className='display-5 fw-bold' data-aos='fade-up'>About Me</h1>
          <p className='fs-5' data-aos='fade-up'>
            I am currently a BCA (Bachelor of Computer Applications) student at TMBU University. I have always been passionate about technology and have a strong interest in programming and software development. In my BCA program, I have learned a wide range of subjects, including programming languages such as Java and C++, database management, web development, and computer networks. Thank you for visiting my website. Feel free to contact me or connect with me on social media.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
