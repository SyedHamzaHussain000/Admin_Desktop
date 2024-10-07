import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../components/Logo';
import { baseURL } from '../utils/baseURL';
import TxtInput from '../../components/TxtInput';
import profilepic from '../../../assets/profilepic.png';
import axios from 'axios';

function NewUser() {
  const userData = useSelector((state) => state.auth.user);

  // Local states for input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const [CoverSendingImage, setCoverSendingImage] = useState(null);
  const [profileSendingImage, setProfileSendingImage] = useState(null);
  const [role, setRole] = useState('Admin'); // Default role to 'Admin'

  // Handlers for the text inputs
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  // Handler for role selection
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  // Handler for image upload
  const handleCoverUpload = (e) => {
    const file = e.target.files[0];

    setCoverSendingImage(file);
    if (file) {
      setCoverImage(URL.createObjectURL(file)); // Preview cover image
    }
  };

  const handleProfileUpload = (e) => {
    // console.log("............",e.target.file)

    const file = e.target.files[0];
    setProfileSendingImage(file);
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Preview profile image
    }
  };

  // Submit Handler
  const handleSubmit = () => {
    // Basic validation checks
    if (!name.trim()) {
      alert('Name is required');
      return;
    }

    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      alert('Valid email is required');
      return;
    }

    if (!password.trim()) {
      alert('Password is required');
      return;
    }

    // Ensure password is at least 6 characters
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    if (!profileSendingImage) {
      alert('Profile picture is required');
      return;
    }

    if (!CoverSendingImage) {
      alert('Cover picture is required');
      return;
    }

    let data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('phoneNumber', phone);
    data.append('role', role === 'Lawfirm' ? 'SalesOfficer' : role);
    data.append('profilePic', profileSendingImage);
    data.append('coverPic', CoverSendingImage);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseURL}register`,
      headers: {
        'Content-Type': 'Multipart/form-data',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ padding: 20 }}>
          <Logo />
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderStyle: 'solid',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              paddingRight: 40,
              paddingLeft: 10,
              borderRadius: 5,
            }}
          >
            <p style={{ fontSize: 12 }}>{userData.name}</p>
            <img
              src={`${baseURL}public/Profiles/${userData.profilePic}`}
              style={{
                objectFit: 'contain',
                height: '50px',
                width: '50px',
                position: 'absolute',
                right: 0,
                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.3)',
                borderRadius: 200,
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ background: '#F6F6F6' }}>
        <div
          style={{
            background: '#F6F6F6',
            width: '90vw',
            borderRadius: 10,
            marginLeft: 20,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            padding: 20,
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: 50,
          }}
        >
          <div style={{ width: '30vw' }}>
            <TxtInput
              placeHolder="Enter Name"
              value={name}
              onChange={(e) => handleNameChange(e)}
            />
            <TxtInput
              placeHolder="Enter Email"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <TxtInput
              placeHolder="Enter Phone number"
              value={email}
              onChange={(e) => handlePhoneChange(e)}
            />
            <TxtInput
              placeHolder="Enter Password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              type="password"
            />

            <div style={{ marginTop: 20 }}>
              <label htmlFor="role-select" style={{ fontSize: '16px' }}>
                Select Role:
              </label>
              <select
                id="role-select"
                value={role}
                onChange={handleRoleChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  marginTop: '10px',
                }}
              >
                <option value="Admin">Admin</option>
                <option value="Nurse">Nurse</option>
                <option value="Lawfirm">Lawfirm</option>
              </select>
            </div>
          </div>

          <div>
            {/* Cover Image Preview */}
            <div
              style={{
                height: '100px',
                background: 'gray',
                width: '100',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              {coverImage ? (
                <div>
                  <img
                    src={coverImage}
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: 10,
                    }}
                  />
                </div>
              ) : (
                <p style={{ fontSize: '3vh' }}>Add Cover</p>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleCoverUpload}
                style={{
                  marginTop: 10,
                  display: 'block',
                }}
              />
            </div>

            {/* Profile Image Preview */}
            <img
              src={profileImage || profilepic} // Default to profilepic if no profile image is selected
              alt="Profile"
              style={{
                height: '80px',
                width: '80px',
                marginTop: 20,
                background: 'white',
                borderRadius: 200,
                padding: 10,
              }}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileUpload}
              style={{
                marginTop: 10,
                display: 'block',
              }}
            />

            {/* <p style={{ fontSize: 20 }}>Add Profile</p> */}
          </div>
        </div>

        <button
          style={{
            marginTop: 20,
            marginLeft: 20,
            width: '200px',
            borderRadius: 10,
            background: '#8D1F20',
          }}
          onClick={handleSubmit}
        >
          <p style={{ color: 'white', fontSize: 16 }}>Create User</p>
        </button>
      </div>
    </div>
  );
}

export default NewUser;
