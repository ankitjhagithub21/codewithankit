import React from 'react'

const Contact = () => {
    return (
        <section id='contact'>
            <h2 className='fw-bold text-center display-5 mb-5'>Contact Me</h2>
            <div className="row">
                
                <div className="col-md-8 mx-auto">
                    <form>
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
                            <label htmlFor="exampleInputEmail1" className="form-label fs-5">
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
                                placeholder="Send me message"
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
    )
}

export default Contact