import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import projectImg from "../../assets/images/construction6.jpg"

const Projects = () => {
  return (
   <>
   <Header/>
    <main>
    <Hero preHeading='Quality , Integrity , value'
          heading='Our Projects'
          text=' It is a long established fact that a reader will <br> be distracted
                  by the readable content of'
        />

<section className="section-3 bg-light py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Discover Our Latest Project</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia. Maiores, doloribus repellendus reiciendis voluptatem quas aliquam. Doloribus, corrupti illum.</p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Delhi Project</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Kolkata Project</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Mumbai Project</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Jaipur Project</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Jaipur Project</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="item">
                  <div className="service-image">
                    <img src={projectImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Jaipur Project</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
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

export default Projects
