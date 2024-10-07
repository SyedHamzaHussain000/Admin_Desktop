import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../../components/Logo';
import photo from '../../../../assets/e.png';
import { baseURL } from '../../utils/baseURL';

function EnterEmail() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    return regex.test(email);
  };


  const enterEmail = async (e) => {
    e.preventDefault();
    

    console.log('err', email);

        // Validate email
        if (!email) {
          setError('Email is required');
          return;
        }
        if (!validateEmail(email)) {
          setError('Please enter a valid email address');
          return;
        }
        setError(''); // Clear any previous error
        setLoading(true); // Start loading

    try {
      let data = JSON.stringify({
        email: 'nurse@gmail.com',
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseURL}forget-password`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setLoading(false); // Stop loading
          navigate(`/OtpScreen/${response.data.OTP}`, { state: { item: response.data } });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false); // Stop loading
        });
    } catch (error) {
      console.log('error is ', error.message);
    }

    // try {

    //   return;
    //   const response = await axios.post(
    //     'https://appsdemo.pro/DesktopApp/forget-password',
    //     {
    //       email: email,
    //     },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   );

    //   console.log(response.data);
    //   // Navigate to the OTP screen if successful
    //   navigate('/OtpScreen');
    // } catch (error) {
    //   console.error(error);
    //   setError('Failed to send email. Please try again.'); // Handle error
    // } finally {
    //   setLoading(false); // Stop loading
    // }
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
          <p style={{ fontSize: 20, alignSelf: 'center' }}>Enter your email</p>
          <input
            placeholder="Enter your email"
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '90%',
              borderRadius: 5,
            }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
          {/* Display error message */}
        </div>

        <div style={{ padding: 20 }}>
          <button
            onClick={enterEmail} // Call enterEmail on click
            style={{
              width: '100%',
              height: '40px',
              background: '#8D1F20',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
            disabled={loading} // Disable button while loading
          >
            <p style={{ color: 'white' }}>
              {loading ? 'Sending...' : 'Verify Your Email'}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnterEmail;
