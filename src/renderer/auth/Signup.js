import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();


  return (
    <div
      style={{
        background: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div
        style={{
          height: '80vh',
          width: '40vw',
          background: 'white',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          alignSelf: 'center',
          borderRadius: 10,
          padding: 20,
        }}
      >
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ textAlign: 'center', fontSize: 30, height: '10px' }}>
            LOGO
          </p>
          <p style={{ textAlign: 'center', fontSize: 24 }}>H E R E</p>
        </div>

        {/* textinput div */}
        <div style={{ padding: 20 }}>
          <p style={{ fontSize: 20 }}>Welcome Back!</p>
          <input
            placeholder="Enter your Name"
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '90%',
              borderRadius: 5,
            }}
            type="email"
          />

          <input
            placeholder="Enter Your Email"
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '90%',
              borderRadius: 5,
              marginTop: 10,
            }}
            type="password"
          />

          <input
            placeholder="Enter Your password"
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '90%',
              borderRadius: 5,
              marginTop: 10,
            }}
            type="password"
          />

          <input
            placeholder="Enter Confirm Password"
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '90%',
              borderRadius: 5,
              marginTop: 10,
            }}
            type="password"
          />

          <button
            // onClick={handleSubmit} // Change this to onClick
            style={{
              width: '97%',
              height: '40px',
              background: '#8D1F20',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              marginTop: 20,
            }}
          >
            <p style={{ color: 'white' }}>Create Account</p>
          </button>

          <div style={{display:'flex'}}>
            <p>Already have an account ?</p>

            <button onClick={()=> navigate('/')} style={{background:'white', borderWidth:0}}>
            <p style={{marginLeft:5, textDecorationLine:'underline', color:'blue'}}>Login</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
