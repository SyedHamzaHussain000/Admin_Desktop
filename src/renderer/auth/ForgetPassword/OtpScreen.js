import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Logo from '../../../components/Logo';
import photo from '../../../../assets/e.png';
import { useNavigate } from 'react-router-dom';

function OtpScreen() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();


  return (

    <div
    style={{
      display: 'flex',
      background: '#F2F2F2',
      height: '100vh',
      width: '100vw',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        background: "#8D1F20",
        padding: '10px',
        height: '100vh',
        width: '60vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center', // This centers the text within the div
      }}
    >
      <img
        src={photo}
        style={{
          height: '30vw', // Responsive height
          width: '30vw', // Responsive width
          maxHeight: '450px',
          maxWidth: '450px',
          objectFit: 'contain', // Make sure the image scales well
        }}
      />



      <h5 style={{ color: 'white', fontSize: 20 }}>
        Lorem Ipsum Simply Dummy Text
      </h5>
      <p style={{ color: 'white', fontSize: 14, width: '45vw' }}>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book.
      </p>
    </div>

    <div
      style={{
        height: '80vh',
        width: '30vw',
        background: '#FFFFFF',
        marginLeft: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Logo here */}
      <div style={{paddingTop:30}}>

      <Logo />
      </div>
      {/* textinput div */}
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  }}>

        <p style={{ fontSize: 20, alignSelf:'center',  }}>Get Your Code</p>
        <p style={{ fontSize: 14, alignSelf:'center',  color:'#474747', width:'50%', textAlign:'center' }}>Please enter 4 digit code that
        send to your email address</p>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputStyle={{ height: 60, width: 60,  alignSelf:'center' }}
            renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </div>
        

      <div style={{ padding: 20 }}>
        <button
          onClick={()=> navigate('/ResetPassword')}
          style={{
            width: '100%',
            height: '40px',
            background: '#8D1F20',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <p style={{ color: 'white' }}>Verify and Proceed</p>
        </button>


      </div>

      <div
        style={{
          display: 'flex',
          padding: 20,
          justifyContent: 'space-evenly',
        }}
      >
  
      </div>
    </div>
  </div>



  );
}

export default OtpScreen;
