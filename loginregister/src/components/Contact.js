import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './contactstyle.css';
import { createurl, log, constants } from '../env';
import maintenance from '../images/maintenance.png';
import Navbar from './Navbar';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mob, setMob] = useState('');
  const [msg, setMsg] = useState('');
  const [live, setLive] = useState(true);

  const id = sessionStorage.getItem('userid');
  const token = sessionStorage.getItem('token');

  const history = useHistory();
  const form = useRef();

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
      }else{
        setName(res.data.name);
        setEmail(res.data.email);
      }
    })
    .catch(error => {
      log(error);
      setLive(false);
    });
  }, []);

  useEffect(() => {

  },[live, name, email, mob, msg]);

  const sendEmail = (e) => {
    debugger;
    if(name==='' || email==='' || mob==='' || msg===''){
      toast.info("please fill mobile number and message", {autoClose: 2500, theme:'colored'});
    }
    else{
    e.preventDefault();

    emailjs.sendForm(constants.MAILJS_SERVICE_ID, constants.MAILJS_TEMPLATE_ID, 
      form.current, constants.MAILJS_PUBLIC_KEY)
      .then((result) => {
        debugger;
          log(result.text);
          toast.success("Message sent. We will get back to you!", {autoClose: 2000, theme:'colored'});
          setMob('');
          setMsg('');
      }, (error) => {
          log(error.text);
      });
    }
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
    </>:
    <>
    <Navbar/>
<div className="row">
<div className="col-xl-1 col-md-1 col-sm-1 col-0"></div>
<div className="col-xl-10 col-md-10 col-sm-10 col-12">
  <div className="head"><h1>CONTACT US</h1></div>

  <div className="crow">

  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15067.
  711893128595!2d73.33551170155444!3d16.994602254320057!3m2!1i1024!2i768!4f13.
  1!3m3!1m2!1s0x3bea0d1839a6bb7f%3A0x63ab969b79bf6561!2sRatnagiri%2C%20Maharashtra!
  5e0!3m2!1sen!2sin!4v1698073579975!5m2!1sen!2sin" 
  allowFullScreen="" loading="lazy" className="map" 
  referrerPolicy="no-referrer-when-downgrade"></iframe>

<form ref={form}>
  <h3>Get in Touch</h3>
  <input type="text" name="from_name" required maxLength="50" placeholder="enter your name" 
  className="box" value={name} onChange={(e) => {setName(e.target.value)}}/>
  <input type="email" name="from_email" required maxLength="50" placeholder="enter your email" 
  className="box" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
  <input type="number" name="from_mob" required maxLength="10" min="0" max="9999999999"
  placeholder="enter your phone number" value={mob} className="box" onChange={(e) => {setMob(e.target.value)}}/>
  <textarea name="message" className="box" required maxLength="1000" 
  cols="30" rows="10" placeholder="write a message" value={msg} onChange={(e) => {setMsg(e.target.value)}}></textarea>
  <input type="submit" value="Send Message" name="send" className="send-btn" onClick={sendEmail}/>
</form>

</div>
<div className="grid">
  <div className="bx">
    <i className='fas fa-phone'></i>
    <h3>Phone Number</h3>
    <a href="tel:9823629901">+91 9999999999</a>
    <a href="tel:9823629901">+91 9879879870</a>
  </div>

  <div className="bx">
    <i className="fas fa-envelope"></i>
    <h3>Email Address</h3>
    <a href="mailto:tejasbandbe65@gmail.com">tejasbandbe65@gmail.com</a>
    <a href="mailto:bandbetejas65@gmail.com">bandbetejas65@gmail.com</a>
  </div>

  <div className="bx">
    <i className="fas fa-map-marker-alt"></i>
    <h3>Office Address</h3>
    <a>Flat no. 01, a-1, Jogeshwari,</a> 
    <a>Mumai, India - 400104</a>
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

export default Contact