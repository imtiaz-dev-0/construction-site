import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const Contact = () => {
  return (
    <>
    <Header/>
        <main>
        <Hero preHeading='Quality , Integrity , value'
                heading='Contact Us'
                text=' It is a long established fact that a reader will <br> be distracted
                        by the readable content of'
              />

        <section className='section-9 py-5'>
          <div className="container">
          <div className="section-header text-center">
              <span></span>
              <h2>Contact Us</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, <br/> mollitia. Maiores, doloribus repellendus </p>
            </div>
            <div className="row py-5">
              <div className="col-md-3">
                <div className="card shadow border-0 mb-3">
                  <div className="card-body p-4">
                    <h3>Call Us</h3>
                    <a href="#">(888-26-66-6656)</a> <br/>
                    <a href="#">(125-52-85-8445)</a>

                    <h3 className='mt-4'>Email Us</h3>
                    <a href="#">admin@example.com</a><br/>
                    <a href="#">info@example.com</a>

                    <h3 className='mt-4'>Address</h3>
                    <div>Kolkata , West Bengal , India</div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                  <form action="">
                    <div className='row'>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className='form-label'>Name</label>
                        <input type="text" className='form-control' placeholder="Enter Name" />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className='form-label'>Email</label>
                        <input type="text" className='form-control' placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className='row'>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className='form-label'>Phone No</label>
                        <input type="text" className='form-control' placeholder="Enter Phone" />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className='form-label'>Subject</label>
                        <input type="text" className='form-control' placeholder="Enter Subject" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="" className='form-label'>Message</label>
                      <textarea name="" id="" className='form-control form-control-lg' rows={5} placeholder="Enter Message" ></textarea>
                    </div>

                    <button className='btn btn-primary large mt-3'> Send</button>
                  </form>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </section>
        </main>
      <Footer/>
    </>


   
  )
}

export default Contact
