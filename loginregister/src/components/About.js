import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './aboutstyle.css';
import { createurl, log } from '../env';
import maintenance from '../images/maintenance.png';
import Navbar from './Navbar';
import pic1 from '../images/pic-1.png';
import pic2 from '../images/pic-2.png';
import pic3 from '../images/pic-3.png';
import pic4 from '../images/pic-4.png';
import pic5 from '../images/pic-5.png';
import pic6 from '../images/pic-6.png';
import about1 from '../images/about-1.png';
import about2 from '../images/about-2.png';
import about3 from '../images/about-3.png';

function About() {
  const [live, setLive] = useState(true);

  const id = sessionStorage.getItem('userid');
  const token = sessionStorage.getItem('token');

  const history = useHistory();

  useEffect(() => {
    debugger;
    const url = createurl('/home');
    axios.post(url, {
      "id": id,
    },
    {
      headers: {"token": token},
    })
    .then(res => {
      debugger;
      if(res.data.error === "invalid token"  || res.data.error === "token not found"){
        history.push('/');
        toast.error("Please login again.", {autoClose:2000, theme:'colored'});
      }
    })
    .catch(error => {
      log(error);
      setLive(false);
    });
  }, []);

  return (<>
  {
    live === false ?
    <>
    <Navbar/>
      <div className="row">
      <div className="col-xl-4 col-md-3 col-1"></div>
      <div className="col-xl-4 col-md-6 col-10">
        <div className="outer-box">
    <div className="maintenance-container">
    <img src={maintenance} alt="" />
    <h3>Server is under maintenance
    <br/>Please try again later</h3>
    </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-3 col-1"></div>
      </div>
    </>:
    <>
    <Navbar/>
<div className="row">
<div className="col-xl-1 col-md-1 col-sm-1 col-0"></div>
<div className="col-xl-10 col-md-10 col-sm-10 col-12">
    <div className="head"><h1>ABOUT US</h1></div>

    <div className="row">
      <div className="col-xl-3 col-md-2 col-sm-1 col-0"></div>
      <div className="col-xl-6 col-md-8 col-sm-10 col-12">

      <div className="details">
      <h3>why choose us?</h3>
      <p>Choose us for an unparalleled automotive experience. Our commitment to 
        excellence is reflected in every aspect of our service. From a curated selection 
        of top-tier vehicles to a customer-centric approach, we prioritize your satisfaction</p>
      <Link className='abt-btn' to="/contact">contact us</Link>
    </div>

    </div>
      <div className="col-xl-3 col-md-2 col-sm-1 col-0"></div>
    </div>

    <div className="features">
    <div className="grid">
      <div className="bx">
        <h3>Virtual Test Drives</h3>
        <img src={about1} alt=""/>
        <p>Explore your dream car virtually – a firsthand experience from the comfort 
          of your home.</p>
      </div>
      <div className="bx">
        <h3>Car Comparison Tool</h3>
        <img src={about2} alt=""/>
        <p>Effortlessly compare features and prices of different car models, ensuring a 
          tailored choice.</p>
      </div>
      <div className="bx">
        <h3>Loan Calculator</h3>
        <img src={about3} alt=""/>
        <p>Plan your budget with ease using our intuitive loan calculator for stress-free 
          financing insights.</p>
      </div>
    </div>
    </div>

    <div className="reviews">
    <div className="head"><h1>Client's Reviews</h1></div>
    <div className="grid">
      <div className="bx">
        <img src={pic1} alt="" />
        <h3>Mayank</h3>
        <p>Navigating the car market for the first time was made easy with this website. 
          The diverse range of traditional and electric cars, coupled with their detailed 
          guides, helped me find the perfect fit. The purchase process was transparent, and 
          the maintenance service has kept my new car in top condition.</p>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fa-regular fa-star"></i>
        </div>
      </div>

      <div className="bx">
        <img src={pic2} alt="" />
        <h3>Neha</h3>
        <p>After contemplating a shift to electric, this website became my go-to guide. 
          The information provided on electric cars is comprehensive and up-to-date. 
          The sales team was knowledgeable, guiding me to the perfect electric vehicle. 
          Maintenance service has been prompt and efficient.</p>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fa-regular fa-star"></i>
        </div>
      </div>

      <div className="bx">
        <img src={pic3} alt="" />
        <h3>Swapnil</h3>
        <p>Incredible resource for both traditional and electric car enthusiasts! 
          The detailed information on various models helped me make an informed decision 
          when switching to an electric vehicle. The seamless sale and maintenance 
          services are a testament to their commitment to customer satisfaction.</p>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fa-regular fa-star"></i>
        </div>
      </div>

      <div className="bx">
        <img src={pic4} alt="" />
        <h3>Shreya</h3>
        <p>I recently purchased a traditional car through this website, and the experience 
          was smooth and hassle-free. The wealth of information on different models made 
          my decision-making process so much easier. The maintenance service is top-notch, 
          ensuring my car runs smoothly for years to come.</p>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fa-regular fa-star"></i>
        </div>
      </div>

      <div className="bx">
        <img src={pic5} alt="" />
        <h3>Kunal</h3>
        <p>As a lover of classic cars, this website's coverage of traditional models, 
          including detailed histories and restoration tips, is a treasure trove. 
          The sales process for vintage vehicles was seamless, and the maintenance service 
          has preserved the charm of my classics. An enthusiast's dream come true!</p>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fa-regular fa-star"></i>
        </div>
      </div>

      <div className="bx">
        <img src={pic6} alt="" />
        <h3>Rutija</h3>
        <p>This car website is a one-stop-shop for car enthusiasts. Whether you're into 
          traditional or electric cars, the wealth of information is unparalleled. The 
          sales process was straightforward, and the maintenance service has proven to be 
          reliable. Kudos to the team for creating this wonderful platform.</p>
        <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fa-regular fa-star"></i>
        </div>
      </div>
    </div>
    </div>
    
    <div className="credit">
          &copy; copyright @ 2023 by <span>Tejas Bandbe</span> | all rights reserved!
    </div>
</div>
<div className="col-xl-1 col-md-1 col-sm-1 col-0"></div>
</div>
    </>
  } 
  </>)
}

export default About