import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './homestyle.css';
import { createurl, log } from '../env';
import maintenance from '../images/maintenance.png';
import Navbar from './Navbar';
import car1 from '../images/car1.jpg';
import car2 from '../images/car2.jpg';
import car3 from '../images/car3.jpg';
import car4 from '../images/car4.jpg';
import car5 from '../images/car5.jpg';
import car6 from '../images/car6.jpg';
import about from '../images/about.png';
import part1 from '../images/part1.png';
import part2 from '../images/part2.png';
import part3 from '../images/part3.png';
import part4 from '../images/part4.png';
import part5 from '../images/part5.png';
import part6 from '../images/part6.png';

function Home() {
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
      if(res.data.error === "invalid token" || res.data.error === "token not found"){
        history.push('/');
        toast.error("Please login again.", {autoClose:2000, theme:'colored'});
      }
    })
    .catch(error => {
        log(error);
        setLive(false);
    });
  }, []);

  const showDisabled = () => {
    toast.warn("this feature is not available right now", {autoClose:1500, theme:'colored'});
  };

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
    </>:<>
    <Navbar/>
    <div className="row home-container">
      <div className="col-xl-2 col-1"></div>
      <div className="col-xl-8 col-10">
    <div className="home-container">
    <section className="home" id="home">
        <div className="home-text">
            <h1>We have everything <br/>Your <span>Car</span> Needs</h1>
            <p>Driven By Quality, Powered By Trust</p>
            <button className="btn-red" onClick={showDisabled}>Discover Now</button>
        </div>
    </section>

    <section className="cars" id="cars">
        <div className="heading">
            <span>All Cars</span>
            <h2>We have all types of cars</h2>
            <p></p>
        </div>

        <div className="cars-container container">
            <div className="box">
                <img src={car1} alt=""/>
                <h2>Porche</h2>
            </div>

            <div className="box">
                <img src={car2} alt=""/>
                <h2>Audi</h2>
            </div>

            <div className="box">
                <img src={car3} alt=""/>
                <h2>Bugatti</h2>
            </div>

            <div className="box">
                <img src={car4} alt=""/>
                <h2>Lamborghini</h2>
            </div>

            <div className="box">
                <img src={car5} alt=""/>
                <h2>Ferrari</h2>
            </div>

            <div className="box">
                <img src={car6} alt=""/>
                <h2>BMW</h2>
            </div>
        </div>
    </section>

    <section className="about container" id="about">
        <div className="about-img">
            <img src={about} alt=""/>
        </div>
        <div className="about-text">
            <span>About Us</span>
            <h2>Cheap prices with <br/>Quality Cars</h2>
            <p>Your premier destination for quality cars – 
                delivering excellence, trust, and unparalleled service.</p>
            <button className="btn-red"  onClick={showDisabled}>Learn More</button>
        </div>
    </section>

    <section className="parts" id="parts">
        <div className="heading">
            <span>What we offer</span>
            <h2>Our car is always excellent</h2>
            <p>New Branded Cars, Used Cars, Spare Parts</p>
        </div>

        <div className="parts-container container">
            <div className="box">
                <img src={part1} alt=""/>
                <h3>V8 Engine</h3>
                <span>₹ 32,999/-</span>
                <i className='bx bxs-star'>(6 Reviews)</i>
                <p className="btn-red" onClick={showDisabled}>Buy Now</p>
                <div className="detail" onClick={showDisabled}>View details</div>
            </div>

            <div className="box">
                <img src={part2} alt=""/>
                <h3>V2 Engine</h3>
                <span>₹ 18,999/-</span>
                <i className='bx bxs-star'>(16 Reviews)</i>
                <p className="btn-red" onClick={showDisabled}>Buy Now</p>
                <div className="detail" onClick={showDisabled}>View details</div>
            </div>

            <div className="box">
                <img src={part3} alt=""/>
                <h3>Caliper and Disc Assembly</h3>
                <span>₹ 6,499/- to ₹ 14,999/-</span>
                <i className='bx bxs-star'>(214 Reviews)</i>
                <p className="btn-red" onClick={showDisabled}>Buy Now</p>
                <div className="detail" onClick={showDisabled}>View details</div>
            </div>

            <div className="box">
                <img src={part4} alt=""/>
                <h3>Filter</h3>
                <span>₹ 1,500/- to ₹ 2,500/-</span>
                <i className='bx bxs-star'>(78 Reviews)</i>
                <p className="btn-red" onClick={showDisabled}>Buy Now</p>
                <div className="detail" onClick={showDisabled}>View details</div>
            </div>

            <div className="box">
                <img src={part5} alt=""/>
                <h3>Shocks</h3>
                <span>₹ 5,999/- to ₹ 17,999/-</span>
                <i className='bx bxs-star'>(185 Reviews)</i>
                <p className="btn-red" onClick={showDisabled}>Buy Now</p>
                <div className="detail" onClick={showDisabled}>View details</div>
            </div>

            <div className="box">
                <img src={part6} alt=""/>
                <h3>Tyres</h3>
                <span>₹ 7,999/- to ₹ 14,999/-</span>
                <i className='bx bxs-star'>(219 Reviews)</i>
                <p className="btn-red" onClick={showDisabled}>Buy Now</p>
                <div className="detail" onClick={showDisabled}>View details</div>
            </div>
        </div>
    </section>

    </div>
    </div>
    <div className="col-xl-1 col-1"></div>

    <section className="footer">
        <div className="footer-container container">
            <div className="footer-box">
                <Link to="/home" className="logo">Auto<span>Pulse</span></Link>
                <div className="social">
                    <p><i className='bx bxl-facebook'></i></p>
                    <p><i className='bx bxl-twitter'></i></p>
                    <p><i className='bx bxl-instagram'></i></p>
                    <p><i className='bx bxl-youtube'></i></p>
                </div>
            </div>

            <div className="footer-box">
                <h2>Page</h2>
                <p>Home</p>
                <p>Cars</p>
                <p>Parts</p>
                <p>Sales</p>
            </div>

            <div className="footer-box">
                <h2>Legal</h2>
                <p>Privacy</p>
                <p>Refund Policy</p>
                <p>Cookie Policy</p>
            </div>

            <div className="footer-box">
                <h2>Contact</h2>
                <p>India</p>
                <p>Germany</p>
                <p>Japan</p>
                <p>United States</p>
            </div>
        </div>
    </section>

    <div className="copyright">
        &copy; copyright @ 2023 by <span>Tejas Bandbe</span> | all rights reserved!
    </div>
    </div>
    </>
  } 
  </>)
}

export default Home