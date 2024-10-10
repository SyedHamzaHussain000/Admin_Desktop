import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import photo from '../../assets/e.png';
import google_Icon from '../../assets/google_iconn.png';
import MainScreen from './main/MainScreen';
import Signup from './auth/Signup';
import Logo from '../components/Logo';
import EnterEmail from './auth/ForgetPassword/EnterEmail';
import ResetPassword from './auth/ForgetPassword/ResetPassword';
import MSVCallCenter from './main/MSVCallCenter';
import ClientsCallLaws from './main/ClientsCallLaws';
import PreMedicalRecord from './main/settingInner/PreMedicalRecord';

import OtpScreen from './auth/ForgetPassword/OtpScreen';
import axios from 'axios';
import store from '../redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { loginUser, setErrorMessage } from '../redux/AuthSlice';
import { useEffect, useState } from 'react';
import { baseURL } from './utils/baseURL';
import NewUser from './main/NewUser';
import ProfileDetail from './main/ProfileDetail';
import Loader from '../components/Loader';
import { ColorRing } from 'react-loader-spinner';
// require('dotenv').config()
// import 'dotenv/config'
// const dotenv = require('dotenv')
function Login () {

  //  dotenv.config()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);
  const isError = useSelector(state => state.auth.error)

  console.log("first", isError)
  // console.log("................................", process.env)

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    dispatch(setErrorMessage(""))
    
    let data = JSON.stringify({
      email: email,
      password: password,
      role: 'Admin',
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseURL}login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    const resultAction = await dispatch(loginUser(config));
    // const resultAction = await dispatch(loginUser({ email: email, password: password, role : "SalesOfficer" }));

    console.log('resultAction', resultAction);
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
        {/* Logo here */}
        <div style={{ paddingTop: 30 }}>
          <Logo />
        </div>
        {/* textinput div */}
        <div style={{ padding: 20 }}>
          <p style={{ fontSize: 20 }}>Welcome Back!</p>
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            placeholder="Enter your password"
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '90%',
              borderRadius: 5,
              marginTop: 10,
            }}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {
            isError &&

          <p style={{color:'red'}}>{isError}</p>
          }
        </div>

        <div style={{ padding: 20 }}>
          {
            loading == true ?
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

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              height: '40px',
              background: '#8D1F20',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#a13e39')
            } // Darken background on hover
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = '#8D1F20')
            } // Revert background on mouse out
            onMouseDown={(e) =>
              (e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.2)')
            } // Reduce shadow on click
            onMouseUp={(e) =>
              (e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)')
            } // Restore shadow on release
          >
            LOGIN
          </button>
          }

          <button
            onClick={() => navigate('/EnterEmail')}
            style={{ background: 'white', borderWidth: 0 }}
          >
            <p style={{ fontSize: 14 }}>Forgot Password</p>
          </button>

          {/* <button
            style={{
              width: '100%',
              height: '40px',
              background: 'white',
              borderRadius: 5,
              borderWidth: 0.2,
              marginTop: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={google_Icon} style={{ height: '30px', width: '30px' }} />
            <p style={{ color: 'black', marginLeft: 5 }}>
              Continue With Google
            </p>
          </button> */}
        </div>

        <div
          style={{
            display: 'flex',
            padding: 20,
            justifyContent: 'space-evenly',
          }}
        ></div>
      </div>
    </div>
  );
}

const ProtectedRoutes = () => {
  const token = useSelector((state) => state.auth.token);

  const Saved_token = localStorage.getItem('token');

  if (!token) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/EnterEmail" element={<EnterEmail />} />
        <Route path="/OtpScreen/:otpmsg" element={<OtpScreen />} />
        <Route path="/ResetPassword/:id" element={<ResetPassword />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainScreen />} />
      <Route path="/MSVCallCenter" element={<MSVCallCenter />} />
      <Route path="/ClientsCallLaws" element={<ClientsCallLaws />} />
      <Route path="/PreMedicalRecord" element={<PreMedicalRecord />} />
      <Route path="/NewUser" element={<NewUser />} />
      <Route path="/ProfileDetail/:items" element={<ProfileDetail />} />
    </Routes>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <ProtectedRoutes />
      </Router>
    </Provider>
  );
}
