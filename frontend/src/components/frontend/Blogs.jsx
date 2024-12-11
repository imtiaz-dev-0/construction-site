import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from "../common/Hero";
import blogtImg from "../../assets/images/construction3.jpg";
const Blogs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality , Integrity , value"
          heading="Blogs"
          text=" It is a long established fact that a reader will <br> be distracted
                  by the readable content of"
        />

        <section className="section-6 bg-light py-5">
          <div className="container">
            <div className="section-header text-center">
              <span>Blog & News</span>
              <h2>Article and blog posts</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                mollitia. Maiores, doloribus repellendus{" "}
              </p>
            </div>
            <div className="row pt-3">
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={blogtImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <a href="#" className="title">
                        Dummy Blog Title
                      </a>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      {" "}
                      Read More
                    </a>
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
                      <a href="#" className="title">
                        Dummy Blog Title
                      </a>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      {" "}
                      Read More
                    </a>
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
                      <a href="#" className="title">
                        Dummy Blog Title
                      </a>
                    </div>
                    <a href="#" className="btn btn-primary small">
                      {" "}
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
