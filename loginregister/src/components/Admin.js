import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { createurl, log } from '../env';

function Admin() {

    const [pass, setPass] = useState('');
    const [id, setId] = useState('');

useEffect(() => {

},[pass,id]);

const getData = () => {
    debugger;
    const url = createurl('/fetchData');
    axios.get(url)
    .then(res => {
        debugger;
        log(res.data);
        if(res.data.message === "table is empty"){
            toast.warn("table is empty", {autoClose:1500, theme:'colored'});
        }
        else if(res.data.message === "data sent via email"){
            toast.success("Data sent to your email", {autoClose:1500, theme:'colored'});
        }
        else if(res.data.error === "users table is empty"){
            toast.info("Table is empty", {autoClose:1500, theme:'colored'});
        }else{
            toast.error("Somthing went wrong", {autoClose:1500, theme:'colored'});
        }
        setPass('');
    })
    .catch(error => {
        log(error);
    });
};

const deleteAll = () => {
    debugger;
    const url = createurl('/deleteAll');
    axios.delete(url)
    .then(res => {
        debugger;
        log(res.data);
        if(res.data.message === "table is empty"){
            toast.warn("table is empty", {autoClose:1500, theme:'colored'});
        }
        else if(res.data.message === "data deleted"){
            toast.success("Data Deleted", {autoClose:1500, theme:'colored'});
        }
        else if(res.data.error === "something went wrong"){
            toast.error("something went wrong", {autoClose:1500, theme:'colored'});
        }else{
            toast.error("Somthing went wrong", {autoClose:1500, theme:'colored'});
        }
        setPass('');
    })
    .catch(error => {
        log(error);
    });
};

const deleteUser = () => {
    debugger;
    const url = createurl('/deleteUser');
    axios.post(url, {
        "id": id,
    })
    .then(res => {
        debugger;
        log(res.data);
        if(res.data.message === "id not present"){
            toast.warn("id not present", {autoClose:1500, theme:'colored'});
        }
        else if(res.data.message === "user deleted"){
            toast.success("User Deleted", {autoClose:1500, theme:'colored'});
        }
        else if(res.data.error === "something went wrong"){
            toast.error("something went wrong", {autoClose:1500, theme:'colored'});
        }else{
            toast.error("somthing went wrong", {autoClose:1500, theme:'colored'});
        }
        setPass('');
    })
    .catch(error => {
        log(error);
    });
};

  return (<>
{/* ===================================== */}
<div className="modal fade" id="deleteUserModal" tabIndex="-1" aria-labelledby="deleteUserModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="deleteUserModalLabel">Delete User</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
    <input type="text" id="" placeholder="user id"
            required onChange={(e) => {setId(e.target.value)}}/>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-warning" 
        data-bs-toggle="modal" data-bs-target="#deleteUserModal" onClick={deleteUser}>Delete User</button>
    </div>
</div>
</div>
</div>
{/* ===================================== */}
<div className="modal fade" id="deleteAllModal" tabIndex="-1" aria-labelledby="deleteAllModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
    <div className="modal-header">
        <h1 className="modal-title fs-5" id="deleteAllModalLabel">Are you sure?</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-success" 
        data-bs-toggle="modal" data-bs-target="#deleteAllModal" onClick={deleteAll}>Yes</button>
        <button type="button" className="btn btn-danger" 
        data-bs-toggle="modal" data-bs-target="#deleteAllModal">No</button>
    </div>
</div>
</div>
</div>
{/* ===================================== */}
<div className="row" style={{marginTop:'5rem'}}>
    <div className="col-xl-5"></div>
    <div className="col-xl-2" style={{textAlign:'center'}}>
    <div className='my-3'>
    <button className='btn btn-warning' onClick={getData}
    style={{fontWeight:'700'}}>Get Data</button>
    </div>

    <div className='my-3'>
    <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#deleteUserModal"
     style={{fontWeight:'700'}}>Delete User</button>
    </div>

    <div className='my-3'>
    <button className='btn btn-warning' data-bs-toggle="modal" data-bs-target="#deleteAllModal"
    style={{fontWeight:'700'}}>Delete All Data</button>
    </div>

    </div>
    <div className="col-xl-5"></div>
</div>
  </>)
}

export default Admin