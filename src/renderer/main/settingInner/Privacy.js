import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseURL } from '../../utils/baseURL';
import { setErrorMessage } from '../../../redux/AuthSlice';
import axios from 'axios';
import { Puff } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Privacy() {

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [retypePassword, setRetypePassword] = useState("")
  const [loader, setLoader] = useState(false)
  const token = useSelector((state) => state.auth.token);
  const errorMessage = useSelector(state => state.auth.errorMessage)

  const dispatch = useDispatch()
  const changePassword = () => {
    if (!currentPassword) {
      dispatch(setErrorMessage("Please enter your current password."));
      return;
  } 
  
  if (!newPassword) {
      dispatch(setErrorMessage("Please enter your new password."));
      return;
  }
  
  if (!retypePassword) {
      dispatch(setErrorMessage("Please re-enter your new password."));
      return;
  }
  
  if (retypePassword !== newPassword) {
      dispatch(setErrorMessage("The re-entered password does not match the new password. Please try again."));
      return;
  }
  
  setLoader(true)
    let data = JSON.stringify({
      "oldPassword": currentPassword,
      "newPassword": newPassword
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseURL}change-pasword`,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${token}`, 
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setLoader(false)
      if(response.data.success == false){

        dispatch(setErrorMessage(response.data.message));
      }else{
        toast("Password successfully changed")
      }

    })
    .catch((error) => {
      console.log(error);
      dispatch(setErrorMessage());
      setLoader(false)
    });
    
  }
  


  return (
    <div
      style={{
        background: 'white',
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
      }}
    >
      <p style={{ fontSize: 30, height: '10px' }}>Change Password</p>
      <p style={{ fontSize: 14 }}>Change Your Password</p>
      {
        errorMessage ?

        <p style={{color:'red'}}>*{errorMessage}</p>
        :
        null
      }

      <div style={{ height: '1px', background: 'black' }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <p style={{ fontSize: 18, height: '10px' }}>Your Current Password</p>

        <input
          placeholder="Enter Password"
          style={{
            height: 50,
            width: '70%',
            borderRadius: 10,
            borderColor: 'lightgray',
            borderWidth: 0.5,
            paddingLeft: 20,
          }}
          onChange={(e)=>{
            setCurrentPassword(e.target.value)
          }}
          value={currentPassword}
        />
      </div>

      <div style={{ height: '1px', background: 'black', marginTop: 20 }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <p style={{ fontSize: 18, height: '10px' }}>Your New Password</p>

        <input
          placeholder="Enter Password"
          style={{
            height: 50,
            width: '70%',
            borderRadius: 10,
            borderColor: 'lightgray',
            borderWidth: 0.5,
            paddingLeft: 20,
          }}
          onChange={(e)=>{
            setNewPassword(e.target.value)
          }}
          value={newPassword}
        />
      </div>

      <div style={{ height: '1px', background: 'black', marginTop: 20 }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
          width: '70%',
        }}
      >
        <p style={{ fontSize: 18, height: '10px', width: '50%' }}>
          Confirm Your New Password
        </p>
        <input
          placeholder="Enter Password"
          style={{
            height: 50,
            width: '70%',
            borderRadius: 10,
            borderColor: 'lightgray',
            borderWidth: 0.5,
            paddingLeft: 20,
          }}
          onChange={(e)=>{
            setRetypePassword(e.target.value)
          }}
          value={retypePassword}
        />
      </div>

      <div style={{ height: '1px', background: 'black', marginTop: 20 }} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          marginTop: 20,
        }}
      >

        {
          loader == true ?
          <Puff/>
          :

        <button
          style={{
            height: 50,
            background: '#8D1F20',
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            borderRadius: 10,
          }}
          onClick={()=> changePassword()}
        >
          <p style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Update
          </p>
        </button>
        }
      </div>
      <ToastContainer />

    </div>
  );
}

export default Privacy;
