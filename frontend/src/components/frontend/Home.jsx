import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";


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
                  <button className="btn btn-primary">Contcat Now</button>
                  <button className="btn btn-secondary ms-2">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about us section  */}
        <section className="section-2 py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img src={AboutImg} alt="About US image" className="w-100" />
              </div>
              <div className="col-md-6">
                <span>About Us</span>
                <h2>There are many variations of passages of Lorem</h2>
                <p>If you are going to use a passage of Lorem Ipsum, 
                  you need to be sure there isn't anything embarrassing hidden in 
                  the middle of text. All the Lorem Ipsum generators</p>

                <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</p>
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
