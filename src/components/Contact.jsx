import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <section id='contact'>
      <Helmet>
        <title>Ankit Jha - Contact Me</title>
        <meta name="description" content="Contact Ankit Jha. Fill out the form to get in touch. Send a message, and I'll get back to you." />
       
      </Helmet>

      <h1 className='fw-bold text-center display-5 mb-5' data-aos="fade-up">Contact Me</h1>
      <div className="row" >
        <div className="col-md-8 mx-auto">
          <form name="contact-form" data-aos="fade-up">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fs-5">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fs-5">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fs-5">
                Message
              </label>
              <textarea
                className="form-control"
                rows={5}
                name="message"
                id="message"
                placeholder="Send me a message"
                autoComplete="off"
                required
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
