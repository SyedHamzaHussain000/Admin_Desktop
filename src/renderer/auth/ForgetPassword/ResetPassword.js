import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported
import Logo from '../../../components/Logo';
import photo from '../../../../assets/e.png';
import { baseURL } from '../../utils/baseURL';
import Loader from '../../../components/Loader';
import { ColorRing } from 'react-loader-spinner';

function ResetPassword() {
  const navigate = useNavigate();
  const { id } = useParams(); // This gets the user id from the URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loader, setLaoder] = useState(false)

  console.log('id', id); // Check if the id is being received correctly

  const handlePasswordReset = async (e) => {
    // Validate password and confirm password

    console.log('password', password, confirmPassword);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear any previous errors
    setError(null);
    setLaoder(true)
    let data = JSON.stringify({
      id: id,
      password: password,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseURL}forget-change-password`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLaoder(false)
        navigate("/")
      })
      .catch((error) => {
        setLaoder(false)
        console.log(error);
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
          <p style={{ fontSize: 20, alignSelf: 'center' }}>
            Enter New Password
          </p>
          <p
            style={{
              fontSize: 14,
              alignSelf: 'center',
              color: '#474747',
              width: '80%',
              textAlign: 'center',
            }}
          >
            Your new password must be different from your previous password.
          </p>
          <input
            placeholder="Password"
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '90%',
              borderRadius: 5,
            }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update the password state
          />

          <input
            placeholder="Confirm Password"
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '90%',
              borderRadius: 5,
              marginTop: 10,
            }}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} // Update the confirm password state
          />

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
            onClick={handlePasswordReset} // Trigger the API call on click
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
            <p style={{ color: 'white' }}>Continue</p>
          </button>
        </div>
          }
      </div>
    </div>
  );
}

export default ResetPassword;
