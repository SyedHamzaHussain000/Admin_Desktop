import React, { useRef, useState } from 'react';
import pfp from '../../../../assets/pfp.png';
import { useDispatch, useSelector } from 'react-redux';
import { baseURL } from '../../utils/baseURL';
import { loginUser } from '../../../redux/AuthSlice';
import { ColorRing, Puff } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profile({ onlyProfle }) {
  const userData = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const dispatch = useDispatch();
  const [editedName, setEditedName] = useState('');
  const [editedBio, setEditedBio] = useState('');
  const [editedProfilePicture, setEditedProfilePicture] = useState('');
  const [editedIamge, setEditedIamge] = useState();
  const [selectedImage, setSelectedImage] = useState();

  const handleUpdateClick = () => {
    // Trigger the file input click
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    console.log('file', file.name);

    setSelectedImage(file);

    if (file) {
      const reader = new FileReader(); // Create a FileReader instance

      // Set up the onload event to update the state
      reader.onloadend = () => {
        setEditedIamge(reader.result); // Set the result as the image source
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const EditProfile = async () => {
    let data = new FormData();
    data.append('name', editedName);
    data.append('bio', editedBio);
    data.append('profile', selectedImage);
    // data.append('profile', {
    //     name: selectedImage?.name,
    //     type: selectedImage?.type,
    //     uri: selectedImage?.path,
    // })

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseURL}edit-profile`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    };

    const resultAction = await dispatch(loginUser(config));

    if(resultAction.type == "user/fulfilled"){
        toast("Profile has been successfully updated")
    }

  };
  return (
    <div
      style={{
        background: 'white',
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
      }}
    >
      <p style={{ fontSize: 30, height: '10px', marginBottom: 30 }}>Profile</p>
      {!onlyProfle && (
        <div>
          <p style={{ fontSize: 14 }}>
            Update your photo and personal details here
          </p>
          <div style={{ height: '1px', background: 'black' }} />
        </div>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <p style={{ fontSize: 18, height: '10px' }}>Username</p>

        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              borderWidth: 0.5,
              borderColor: 'black',
              marginLeft: 20,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              borderStyle: 'solid',
              paddingRight: 10,
              paddingLeft: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <p>username</p>
          </div>
          <div
            style={{
              display: 'flex',
              borderWidth: 0.5,
              borderColor: 'black',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              borderStyle: 'solid',
              paddingRight: 10,
              paddingLeft: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              width: '30vw',
            }}
          >
            {!onlyProfle ? (
              <input
                placeholder={userData.name}
                style={{ borderWidth: 0, userSelect: 'none' }}
                onChange={(e) => setEditedName(e.target.value)}
                value={editedName}
              />
            ) : (
              <p>{userData.name}</p>
            )}
          </div>
        </div>

        <div />
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
        <p style={{ fontSize: 18, height: '10px' }}>Your Email</p>

        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              borderWidth: 0.5,
              borderColor: 'black',
              marginLeft: 20,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              borderStyle: 'solid',
              paddingRight: 10,
              paddingLeft: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <p>Email.</p>
          </div>
          <div
            style={{
              display: 'flex',
              borderWidth: 0.5,
              borderColor: 'black',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              borderStyle: 'solid',
              paddingRight: 10,
              paddingLeft: 10,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              width: '30vw',
            }}
          >
            <p>{userData.email}</p>
          </div>
        </div>

        <div />
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
        <div>
          <p style={{ fontSize: 18, height: '10px' }}>Your Photo</p>
          <p style={{ fontSize: 14, height: '10px' }}>
            This will be displayed on your profile
          </p>
        </div>

        <div style={{ display: 'flex' }}>
          <img
            src={
              editedIamge
                ? editedIamge
                : `${baseURL}public/Profiles/${userData.profilePic}`
            }
            style={{ height: '80px', width: '80px', borderRadius: 200 }}
          />
        </div>

        <div style={{ display: 'flex' }}>
          {!onlyProfle && (
            <>
              <p onClick={() => console.log('delte')}>Delete</p>
              <p
                onClick={handleUpdateClick}
                style={{ marginLeft: 20, color: '#8D1F20', cursor: 'pointer' }}
              >
                Update
              </p>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }} // Hide the file input
              />
            </>
          )}
        </div>
      </div>

      <div style={{ height: '1px', background: 'black', marginTop: 20 }} />

      {/* <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        {/* <div>
          <p style={{ fontSize: 18, height: '10px' }}>Your Bio</p>
          <p style={{ fontSize: 14, height: '10px' }}>
            Write a short introduction
          </p>
        </div> */}

        {/* <div style={{ display: 'flex' }}>
          <div>
            <div
              style={{
                display: 'flex',
                borderWidth: 0.5,
                borderColor: 'black',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                borderStyle: 'solid',
                paddingRight: 10,
                paddingLeft: 10,
                borderRadius: 10,
                width: '30vw',
                padding: 20,
              }}
            >
              {!onlyProfle ? (
                <textarea
                  placeholder={
                    userData?.bio ? userData?.bio : 'Add your bio here'
                  }
                  onChange={(e) => setEditedBio(e.target.value)}
                  value={editedBio}
                  style={{
                    height: 100,
                    width: '100%',
                    userSelect: 'none',
                    borderWidth: 0,
                    resize: 'none', // Prevents resizing the textarea
                    padding: 10, // Adds some padding for better UX
                    outline: 'none', // Removes the outline when focused
                  }}
                />
              ) : (
                <>
                  {userData?.bio ? (
                    <p style={{ height: 100 }}>{userData?.bio}</p>
                  ) : (
                    <p>Go to edit profile to add bio</p>
                  )}
                </>
              )}
            </div>
            <p style={{ color: '#8A8A8A', fontSize: 12 }}>
              243 characters left
            </p>
          </div>
        </div> */}

        {/* <div /> */}
      {/* </div> */} 

      <div
        style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
      >
        {loading == true ? (
         <ColorRing
         visible={true}
         height="80"
         width="80"
         ariaLabel="color-ring-loading"
         wrapperStyle={{}}
         wrapperClass="color-ring-wrapper"
         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
         />
        ) : (
          <>
            {!onlyProfle && (
              <button
                onClick={() => EditProfile()}
                style={{
                  height: 50,
                  background: '#8D1F20',
                  alignSelf: 'flex-end',
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  borderRadius: 10,
                  right: 0,
                }}
              >
                <p style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                  Update
                </p>
              </button>
            )}
          </>
        )}
      </div>

      <ToastContainer />

    </div>
  );
}

export default Profile;
