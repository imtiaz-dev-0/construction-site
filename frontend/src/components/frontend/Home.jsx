import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import serviceImg from "../../assets/images/construction1.jpg"
import projectImg from "../../assets/images/construction6.jpg"
import blogtImg from "../../assets/images/construction3.jpg"
import Icon1 from "../../assets/images/icon-1.svg"
import Icon2 from "../../assets/images/icon-2.svg"
import Icon3 from "../../assets/images/icon-3.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AvaterImg from "../../assets/images/author-2.jpg";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import About from "../common/About";

const Home = () => {
  return (
    <>
     <Header/>

      <main>
        {/* hero section  */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome EV Construction</span>
                <h1>Shaping dreams with precision and mastery</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  of a page when looking at its layout. The point of using Lorem
                  Ipsum
                </p>
                <div className="mt-4">
                  <button className="btn btn-primary large">Contcat Now</button>
                  <button className="btn btn-secondary ms-2 large">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about us section  */}
        <About/>
        {/* our services  */}

        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h2>Our Constructions Services</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia. Maiores, doloribus repellendus reiciendis voluptatem quas aliquam. Doloribus, corrupti illum.</p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={serviceImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Specilty Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={serviceImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Specilty Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={serviceImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Specilty Construction</h3>
                    </div>
                    <div className="service-content">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quae doloribus tempore sapiente, vitae, alias officia necessitatibus, aut minima ratione laborum quasi. Optio qui eius ullam. Repellat porro rem enim.</p>
                    </div>
                    <a href="#" className="btn btn-primary small">Read More</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={serviceImg} alt="" className="w-100"/>
                  </div>
                  <div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Specilty Construction</h3>
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

        {/* why choose us  */}

        <section className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover Our Wide verity Project</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia. Maiores, doloribus repellendus reiciendis voluptatem quas aliquam. Doloribus, corrupti illum.</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4" >
                  <div className="card-icon">
                    <img src={Icon1} alt=""  />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting edge Solution</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ullam, doloribus minima exercitationem laboriosam aspernatur, obcaecati iure placeat distinctio officia, repellendus expedita fuga unde labore ducimus a. Temporibus, officiis dolorum.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4" >
                  <div className="card-icon">
                    <img src={Icon2} alt=""  />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting edge Solution</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ullam, doloribus minima exercitationem laboriosam aspernatur, obcaecati iure placeat distinctio officia, repellendus expedita fuga unde labore ducimus a. Temporibus, officiis dolorum.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4" >
                  <div className="card-icon">
                    <img src={Icon3} alt=""  />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting edge Solution</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ullam, doloribus minima exercitationem laboriosam aspernatur, obcaecati iure placeat distinctio officia, repellendus expedita fuga unde labore ducimus a. Temporibus, officiis dolorum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* our projects  */}
      <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Discover Our Latest Project</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia. Maiores, doloribus repellendus reiciendis voluptatem quas aliquam. Doloribus, corrupti illum.</p>
            </div>
            <div className="row pt-4">
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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
              <div className="col-md-3 col-lg-3">
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

        <section className="section-5 py-5">
          <div className="container py-5">
              <div className="section-header text-center">
                <span>Testimonialis</span>
                <h2>What People are saying about us</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia. Maiores, doloribus repellendus </p>
              </div>
              <Swiper
               modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    </div>
                    <div className="content pt-4 pb-2">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut debitis ipsum, dicta incidunt doloribus autem adipisci, at expedita nemo rerum accusantium laudantium saepe, odio repudiandae explicabo quas ab numquam.</p>
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvaterImg} alt="" width={50} />
                      </div>
                      <div className="ps-3">

                      <div className="name">John Doe</div>
                      <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    </div>
                    <div className="content pt-4 pb-2">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut debitis ipsum, dicta incidunt doloribus autem adipisci, at expedita nemo rerum accusantium laudantium saepe, odio repudiandae explicabo quas ab numquam.</p>
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvaterImg} alt="" width={50} />
                      </div>
                      <div className="ps-3">

                      <div className="name">John Doe</div>
                      <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    </div>
                    <div className="content pt-4 pb-2">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut debitis ipsum, dicta incidunt doloribus autem adipisci, at expedita nemo rerum accusantium laudantium saepe, odio repudiandae explicabo quas ab numquam.</p>
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvaterImg} alt="" width={50} />
                      </div>
                      <div className="ps-3">

                      <div className="name">John Doe</div>
                      <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card shadow border-0">
                  <div className="card-body p-5">
                    <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    </div>
                    <div className="content pt-4 pb-2">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ut debitis ipsum, dicta incidunt doloribus autem adipisci, at expedita nemo rerum accusantium laudantium saepe, odio repudiandae explicabo quas ab numquam.</p>
                    </div>
                    <hr />
                    <div className="d-flex meta">
                      <div>
                        <img src={AvaterImg} alt="" width={50} />
                      </div>
                      <div className="ps-3">

                      <div className="name">John Doe</div>
                      <div>CEO</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>


      {/* blogs  */}
        <section className="section-6 bg-light py-5">
          <div className="container">
          <   div className="section-header text-center">
                <span>Blog & News</span>
                <h2>Article and blog posts</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia. Maiores, doloribus repellendus </p>
              </div>
              <div className="row pt-3">
                <div className="col-md-4">
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img src={blogtImg} alt="" className="w-100" />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <a href="#" className="title">Dummy Blog Title</a>
                      </div>
                      <a href="#" className="btn btn-primary small"> Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img src={blogtImg} alt="" className="w-100" />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <a href="#" className="title">Dummy Blog Title</a>
                      </div>
                      <a href="#" className="btn btn-primary small"> Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow border-0">
                    <div className="card-img-top">
                      <img src={blogtImg} alt="" className="w-100" />
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-3">
                        <a href="#" className="title">Dummy Blog Title</a>
                      </div>
                      <a href="#" className="btn btn-primary small"> Read More</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

      </main>
      <Footer/>
    </>
  );
};

export default Home;
