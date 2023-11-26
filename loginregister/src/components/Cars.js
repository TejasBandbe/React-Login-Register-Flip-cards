import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './styles.css';
import { createurl, log } from '../env';
import maintenance from '../images/maintenance.png';
import Navbar from './Navbar';

function Cars() {
  const [live, setLive] = useState(true);
  const [car, setCar] = useState('Model S');

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
        toast.error("Please login again.", {autoClose: 2000, theme:'colored'});
      }
    })
    .catch(error => {
      log(error);
      setLive(false);
    });
  }, []);

  useEffect(() => {

  }, [car, live]);

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
{
car === 'Model S' ?
<>
<div className="car-container row">
  <div className="col-xl-2 col-1"></div>
  <div className="col-xl-8 col-10 car1" id="bg">
    <div className="carnav">
      <ul className='navbar-nav'>
        <li className='nav-item' onClick={()=>{setCar('Model S')}}><span>Model S</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model 3')}}><span>Model 3</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model X')}}><span>Model X</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model Y')}}><span>Model Y</span></li>
      </ul>
    </div>
    
  </div>
  <div className="col-xl-2 col-1"></div>
</div>
</> : <>{
car === 'Model 3' ?
<>
<div className="car-container row">
  <div className="col-xl-2 col-1"></div>
  <div className="col-xl-8 col-10 car2" id="bg">
    <div className="carnav">
      <ul className='navbar-nav'>
        <li className='nav-item' onClick={()=>{setCar('Model S')}}><span>Model S</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model 3')}}><span>Model 3</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model X')}}><span>Model X</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model Y')}}><span>Model Y</span></li>
      </ul>
    </div>
  </div>
  <div className="col-xl-2 col-1"></div>
</div>
</>: <>{
car === 'Model X' ?
<>
<div className="car-container row">
  <div className="col-xl-2 col-1"></div>
  <div className="col-xl-8 col-10 car3" id="bg">
    <div className="carnav">
      <ul className='navbar-nav'>
        <li className='nav-item' onClick={()=>{setCar('Model S')}}><span>Model S</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model 3')}}><span>Model 3</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model X')}}><span>Model X</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model Y')}}><span>Model Y</span></li>
      </ul>
    </div>
    
  </div>
  <div className="col-xl-2 col-1"></div>
</div>
</> : <>{
car === 'Model Y' ?
<>
<div className="car-container row">
  <div className="col-xl-2 col-1"></div>
  <div className="col-xl-8 col-10 car4" id="bg">
    <div className="carnav">
      <ul className='navbar-nav'>
        <li className='nav-item' onClick={()=>{setCar('Model S')}}><span>Model S</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model 3')}}><span>Model 3</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model X')}}><span>Model X</span></li>
        <li className='nav-item' onClick={()=>{setCar('Model Y')}}><span>Model Y</span></li>
      </ul>
    </div>
  </div>
  <div className="col-xl-2 col-1"></div>
</div>
</> : <>
      <div className="row">
      <div className="col-xl-4 col-md-3 col-1"></div>
      <div className="col-xl-4 col-md-6 col-10">
        <div className="outer-box">
    <div className="maintenance-container">
    <img src={maintenance} alt="" />
    <h3>Car is not selected
    <br/>Please try again later</h3>
    </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-3 col-1"></div>
      </div>
</>
}</>
}</>
}</>
}
    <div className="credit">
        &copy; copyright @ 2023 by <span>Tejas Bandbe</span> | all rights reserved!
    </div>
    </>
    
  }
  </>)
}

export default Cars