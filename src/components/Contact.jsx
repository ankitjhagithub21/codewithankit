import React from 'react';


const Contact = () => {
  return (
    <section id='contact'>
      <h1 className='fw-bold text-center mb-3 fs-1' data-aos="fade-up">Contact Me</h1>
      <div className="row" >
        <div className="col-md-6 mx-auto">
          <form method="POST" data-aos="fade-up" action='https://formspree.io/f/mzbqbjwk'>
            <div className="mb-3">
            
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
            <button type="submit" className="btn btn-success">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
