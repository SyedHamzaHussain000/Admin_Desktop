import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Logo from '../../../components/Logo';
import photo from '../../../../assets/e.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../../utils/baseURL';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../../components/Loader';
import { ColorRing } from 'react-loader-spinner';

function OtpScreen() {
  const { otpmsg } = useParams();
  const location = useLocation();
  const { item } = location.state || {};
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(''); // State to manage errors
  const navigate = useNavigate();

  const [loader, setLaoder] = useState(false)


  // OTP validation function
  const isOtpValid = () => {
    if (otp.length !== 4 || !/^\d+$/.test(otp)) {
      setError('Please enter a valid 4-digit code');
      return false;
    }
    return true;
  };

  const verifyOtp = () => {
    // Clear previous error
    setError('');

    // Perform validation
    if (!isOtpValid()) {
      return; // Stop execution if validation fails
    }

    setLaoder(true)
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseURL}forget-password-code-verify/${otp}/${item.id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if(response.data.success == true){

          navigate(`/ResetPassword/${item.id}`);
          setLaoder(false)
        }else{
          setLaoder(false)
          toast("Please enter a correct code")
        }
      })
      .catch((error) => {
        setLaoder(false)
        console.log(error);
        setError('Failed to verify OTP. Please try again.');
      });
  };

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
          background: '#8D1F20',
          padding: '10px',
          height: '100vh',
          width: '60vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src={photo}
          style={{
            height: '30vw',
            width: '30vw',
            maxHeight: '450px',
            maxWidth: '450px',
            objectFit: 'contain',
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
        <div style={{ paddingTop: 30 }}>
          <Logo />
        </div>

        <div
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p style={{ fontSize: 20, alignSelf: 'center' }}>Get Your Code</p>
          <p
            style={{
              fontSize: 14,
              alignSelf: 'center',
              color: '#474747',
              width: '50%',
              textAlign: 'center',
            }}
          >
            Please enter the 4-digit code that was sent to your email address
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              inputStyle={{ height: 60, width: 60, alignSelf: 'center' }}
              renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>

          {/* Display error message */}
          {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
        </div>
          {
            loader == true ?
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#8D1F20', '#8D1F20', '#8D1F20', '#8D1F20', '#8D1F20']}
  />
            </div>
            :

        <div style={{ padding: 20 }}>
          <button
            onClick={verifyOtp}
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
          <ToastContainer/>
        </div>
          }
      </div>
    </div>
  );
}

export default OtpScreen;
