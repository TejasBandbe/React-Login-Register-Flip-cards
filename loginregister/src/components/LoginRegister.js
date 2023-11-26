import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import './style.css';
import axios from 'axios';
import ReactCardFlip from 'react-card-flip';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import maintenance from '../images/maintenance.png';
import { createurl, log, constants } from '../env';

function LoginRegister() {
  const [lemail, setLEmail] = useState('');
  const [lpassword, setLPassword] = useState('');
  const [rname, setRName] = useState('');
  const [remail, setREmail] = useState('');
  const [rpassword, setRPassword] = useState('');
  const [fmail, setFmail] = useState('');
  const [live, setLive] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [pass, setPass] = useState('');

  const history = useHistory();

  useEffect(()=>{
  }, [live]);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  const showPassword1 = () => {
    var pass1 = document.getElementById('pass1');
    var y = document.getElementById('hide1');
    var z = document.getElementById('hide2');

    if(pass1.type === 'password'){
      pass1.type = 'text';
      y.style.display = 'block';
      y.style.color = '#fff';
      z.style.display = 'none';
    }
    else{
      pass1.type = 'password';
      y.style.display = 'none';
      z.style.display = 'block';
    }
  };

  const showPassword2 = () => {
    var pass2 = document.getElementById('pass2');
    var a = document.getElementById('hide3');
    var b = document.getElementById('hide4');

    if(pass2.type === 'password'){
      pass2.type = 'text';
      a.style.display = 'block';
      a.style.color = '#fff';
      b.style.display = 'none';
    }
    else{
      pass2.type = 'password';
      a.style.display = 'none';
      b.style.display = 'block';
    }
  };

  const login = async() => {
    debugger;
    if(lemail === '' || lpassword === ''){
      toast.error("Please fill all the required fields", {autoClose:1500, theme:'colored'});
    }
    else{
      const url = createurl('/login');
      axios.post(url,
        {
          "email": lemail,
          "password": lpassword,
        })
        .then(res => {
          debugger;
          if(res.data.error === 'incorrect email or password'){
            toast.error("incorrect email or password", {autoClose: 1500, theme:'colored'});
          }
          else{
            var id = res.data.data[0].id;
            var token = res.data.auth;
            sessionStorage.setItem("userid", id);
            sessionStorage.setItem("token", token);
            history.push('/home');
          }
        })
        .catch(error => {
          debugger;
          log(error);
          toast.error("server is under maintenance", {autoClose: 1500, theme:'colored'});
          setLive(false);
        });
    }
  };

  const register = async() => {
    debugger;
    if(rname === '' || remail === '' || rpassword === ''){
      toast.error("Please fill all the required fields", {autoClose:1500, theme:'colored'});
    }
    else{
      const url = createurl('/register');
      axios.post(url,
        {
          "name": rname,
          "email": remail,
          "password": rpassword,
        })
        .then(res => {
          debugger;
          if(res.data.error === "duplicate email id"){
            toast.error("email id already registered", {autoClose: 1500, theme:'colored'});
          }
          else if(res.data.error === "something went wrong. please try again later."){
            toast.error("something went wrong. please try again later.", {autoClose:1500, theme:'colored'});
          }
          else{
            toast.success("User registered successfully", {autoClose: 1500, theme:'colored'});
            setIsFlipped(!isFlipped);
          }
        })
        .catch(error => {
          debugger;
          log(error);
          toast.error("server is under maintenance", {autoClose: 1500, theme:'colored'});
          setLive(false);
        });
    }
  };

  const sendMail = () => {
    debugger;
    const url = createurl('/forgetPass');
    axios.post(url,{
      "email": fmail
    })
    .then(res => {
      debugger;
      log(res.data);
      if(res.data.message === "email id not present"){
        toast.error("this email id is not registered", {autoClose:1500, theme:'colored'});
      }
      else if(res.data.message === "password sent via email"){
        toast.success("Password sent via email. Please check your inbox.", {autoClose: 3000, theme:'colored'});
      }
    })
    .catch(error => {
      log(error);
      toast.error("server is under maintenance", {autoClose: 1500, theme:'colored'});
      setLive(false);
    })
  };

  const adminLogin = () => {
    if(pass === constants.ADMIN_PASSWORD){
      history.push("/admin");
    }else{
      toast.error("wrong password",{autoClose:1500, theme:'colored'});
    }
  };

  return (<>

  {/* ================================================== */}
<div className="modal fade" id="forgetPassModal" tabIndex="-1" aria-labelledby="forgetPassModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="forgetPassModalLabel">Forgot Password?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
        <input type="text" id="" placeholder="enter your email id"
              required onChange={(e) => {setFmail(e.target.value)}}/>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-warning" 
        data-bs-toggle="modal" data-bs-target="#forgetPassModal" onClick={sendMail}>Sumbit</button>
    </div>
</div>
</div>
</div>
  {/* ================================================== */}
<div className="modal fade" id="adminModal" tabIndex="-1" aria-labelledby="adminModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="adminModalLabel">Enter admin password</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
        <input type="password" id="" placeholder="admin password"
             required onChange={(e) => {setPass(e.target.value)}}/>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-success" 
        data-bs-toggle="modal" data-bs-target="#adminModal" onClick={adminLogin}>Login</button>
    </div>
</div>
</div>
</div>
  {/* ================================================== */}

<div className="row">
<div className="col-xl-4 col-md-3 col-sm-3 col-0"></div>
<div className="col-xl-4 col-md-6 col-sm-6 col-12 main-box">
  <div className="card">
    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
    <div className="card-front">
      {
        live === false ?
        <div>
          <img className='maintenance' src={maintenance} alt="" />
        <h3>Server is under maintenance<br/>Please try again later</h3>
        </div>
        : <><h1>LOGIN</h1>
      <div>
        <center>
        <div className="box">
          <i className='fa fa-envelope icon'></i>
        <input type="email" className='input-box' placeholder='your email id' required
        onChange={(e) => {setLEmail(e.target.value)}}/>
        </div>
        <div className="box">
          <i className='fa fa-key icon'></i>
        <input type="password" className='input-box' placeholder='your password' id='pass1' required
        onChange={(e) => {setLPassword(e.target.value)}}/>
        <div className="icon-eye" onClick={showPassword1}>
          <i id='hide1' className='fa fa-eye icon'></i>
          <i id='hide2' className='fa fa-eye-slash icon'></i>
          </div>
        </div>
        <div className="check">
        <input type="checkbox"/><span>Remember me</span>
        </div>
        <button className='btns btn-login' onClick={login}>Login</button>
        <div>
        <Link to="" data-bs-toggle="modal" data-bs-target="#forgetPassModal">Forgot password?</Link>
        </div>
        <div style={{marginTop:'1rem'}}>
        <Link to="" data-bs-toggle="modal" data-bs-target="#adminModal">Admin Login</Link>
        </div>
        </center>
      </div>
      <div className="flip">
      <button className='btns' onClick={flip}>I'm new here <i className='fa fa-arrow-right'></i></button>
      </div>
      </>}
    </div>

    <div className="card-rear">
    <h1>Register</h1>
      <div>
        <center>
        <div className="box">
          <i className='fa fa-user icon'></i>
        <input type="text" className='input-box' placeholder='your name' required
        onChange={(e) => {setRName(e.target.value)}}/>
        </div>
        <div className="box">
          <i className='fa fa-envelope icon'></i>
        <input type="email" className='input-box' placeholder='your email id' required
        onChange={(e) => {setREmail(e.target.value)}}/>
        </div>
        <div className="box">
          <i className='fa fa-key icon'></i>
        <input type="password" className='input-box' placeholder='your password' id='pass2' required
        onChange={(e) => {setRPassword(e.target.value)}}/>
        <div className="icon-eye" onClick={showPassword2}>
          <i id='hide3' className='fa fa-eye icon'></i>
          <i id='hide4' className='fa fa-eye-slash icon'></i>
          </div>
        </div>
        <button className='btns btn-login' onClick={register}>Register</button>
        </center>
      </div>

      <div className='flip'>
      <button className='btns' onClick={flip}>I have an account <i className='fa fa-arrow-right'></i></button>
      </div>
    </div>
    </ReactCardFlip>
  </div>
</div>
<div className="col-xl-4 col-md-3 col-sm-3 col-0"></div>
</div>

  </>)
}

export default LoginRegister