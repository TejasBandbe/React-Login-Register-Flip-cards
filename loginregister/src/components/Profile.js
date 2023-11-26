import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import maintenance from '../images/maintenance.png';
import user from '../images/user.png';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import './profilestyle.css';
import { createurl, log } from '../env';
import Navbar from './Navbar';

function Profile() {
    const [name, setName] = useState('null');
    const [email, setEmail] = useState('null');
    const [oldpass, setOldPass] = useState('');
    const [newpass, setNewPass] = useState('');
    const [currpass, setCurrPass] = useState('');
    const [live, setLive] = useState(true);

    const id = sessionStorage.getItem('userid');
    const token = sessionStorage.getItem('token');

    const history = useHistory();

useEffect(() => {
    getdata();
}, []);
    
useEffect(() => {
}, [name, email, live, oldpass, newpass, currpass]);

    const getdata = () => {
      debugger;
      const url = createurl('/profile');
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
          toast.error("Please login again.", {autoClose:1500, theme:'colored'});
        }
        else{
          setName(res.data.name);
          setEmail(res.data.email);
          setOldPass(res.data.password);
        }
      })
      .catch(error => {
        log(error);
        setLive(false);
      });
    }

    const changeName = () => {
      debugger;
      const url = createurl('/updateName');
      axios.post(url,{
        "id": id,
        "name": name
      },
      {
        headers: {"token": token}
      })
      .then(res => {
        debugger;
        if(res.data.message === "name updated"){
          toast.success("Name updated successfully", {autoClose:1500, theme:'colord'});
        }
        else if(res.data.error === "invalid token" || res.data.error === "token not found"){
          history.push('/');
          toast.error("Please login again.", {autoClose:1500, theme:'colored'})
        }
        else{
          toast.error("something went wrong", {autoClose:1500, theme:'colored'});
        }
      })
      .catch(error => {
        log(error);
        setLive(false);
      });
    };

    const changeEmail = () => {
      debugger;
      const url = createurl('/updateEmail');
      axios.post(url,{
        "id": id,
        "email": email,
      },
      {
        headers: {"token": token}
      })
      .then(res => {
        debugger;
        if(res.data.message === "email id updated"){
          toast.success("Email id updated successfully", {autoClose:1500, theme:'colored'});
        }
        else if(res.data.error === "invalid token" || res.data.error === "token not found"){
          history.push('/');
          toast.error("Please login again.", {autoClose:1500, theme:'colored'})
        }
        else{
          toast.error("something went wrong", {autoClose:1500, theme:'colored'});
        }
      })
      .catch(error => {
        log(error);
        setLive(false);
      });
    };

    const changePass = () => {
      debugger;
      const url = createurl('/updatePass');
      if(oldpass === currpass){
        if(currpass === newpass){
          toast.error("current password and new password should be different", {autoClose:1500, theme:'colored'});
        }else{
          axios.post(url,{
            "id": id,
            "password": newpass,
          },
          {
            headers: {"token": token}
          })
          .then(res => {
            debugger;
            if(res.data.message === "password updated"){
              toast.success("Password updated successfully", {autoClose:1500, theme:'colored'});
            }
            else if(res.data.error === "invalid token" || res.data.error === "token not found"){
              history.push('/');
              toast.error("Please login again.", {autoClose:1500, theme:'colored'})
            }
            else{
              toast.error("something went wrong", {autoClose:1500, theme:'colored'});
            }
            getdata();
          })
          .catch(error => {
            log(error);
            setLive(false);
          });
        }
      }else{
        toast.error("current password is wrong", {autoClose: 2500, theme:'colored'});
      }
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

  return (<>
  {/* =============================================== */}
  <div className="modal fade" id="updateNameModal" tabIndex="-1" aria-labelledby="updateNameModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="updateNameModalLabel">Update your name</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
        <input type="text" id="" placeholder="enter your name"
                value={name} required onChange={(e) => {setName(e.target.value)}}/>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-warning" 
        data-bs-toggle="modal" data-bs-target="#updateNameModal" onClick={changeName}>Sumbit</button>
    </div>
</div>
</div>
</div>
  {/* =============================================== */}
<div className="modal fade" id="updateEmailModal" tabIndex="-1" aria-labelledby="updateEmailModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="updateEmailModalLabel">Update your email id</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
        <input type="text" id="" placeholder="enter your email id"
                value={email} required onChange={(e) => {setEmail(e.target.value)}}/>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-warning" 
        data-bs-toggle="modal" data-bs-target="#updateEmailModal" onClick={changeEmail}>Sumbit</button>
    </div>
</div>
</div>
</div>
{/* ================================================== */}
<div className="modal fade" id="updatePasswordModal" tabIndex="-1" aria-labelledby="updatePasswordModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="updatePasswordModalLabel">Update your password</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
    <label>Current Password</label>
      <div className="password-modal">
        <input type="password" id="pass1" placeholder="enter current password"
                required onChange={(e) => {setCurrPass(e.target.value)}}/>
        <div className="icon-eye" onClick={showPassword1}>
        <i id='hide1' className='fa fa-eye icon'></i>
        <i id='hide2' className='fa fa-eye-slash icon'></i>
        </div>
        </div>
        <label>New Password</label>
        <div className="password-modal">
        <input type="password" id="pass2" placeholder="enter new password"
                required onChange={(e) => {setNewPass(e.target.value)}}/>
        <div className="icon-eye" onClick={showPassword2}>
        <i id='hide3' className='fa fa-eye icon'></i>
        <i id='hide4' className='fa fa-eye-slash icon'></i>
        </div>
        </div>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-warning" 
        data-bs-toggle="modal" data-bs-target="#updatePasswordModal" onClick={changePass}>Sumbit</button>
    </div>
</div>
</div>
</div>
{/* ================================================== */}
    
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
    <div className="profile-page row">
    <div className="col-xl-3 col-md-2 col-0"></div>
    <div className="col-xl-6 col-md-8 col-12">

<div className="profile-box">
  <div className="heading">
    <div className="row">
      <div className="col-xl-3 col-3">
        <img src={user} className='profile-pic' alt=""/>
      </div>
      <div className="col-xl-9 col-9 profile-info">
        <span>{name}</span>
        <p>{email}</p>
      </div>
    </div>
    <hr/>
  </div>

  <div className="options">
    <button className="option name" data-bs-toggle="modal" data-bs-target="#updateNameModal">
      Update Name</button>
    <button className="option email" data-bs-toggle="modal" data-bs-target="#updateEmailModal">
      Update Email id</button>
    <button className="option password" data-bs-toggle="modal" data-bs-target="#updatePasswordModal">
      Update Password</button>
  </div>
  </div>

<div className="col-xl-3 col-md-2 col-0"></div>
</div>
</div>

    <div className="credit">
          &copy; copyright @ 2023 by <span>Tejas Bandbe</span> | all rights reserved!
    </div>
    </>
  } 

  </>)
}

export default Profile