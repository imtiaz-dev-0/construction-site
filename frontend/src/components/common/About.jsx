import React from 'react';
import AboutImg from "../../assets/images/about-us.jpg";

const About = () => {
  return (
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
  )
}

export default About
