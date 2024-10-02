import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mpfp from '../../../assets/mpfp.png';
import { baseURL } from '../utils/baseURL';
import axios from 'axios';
import { useSelector } from 'react-redux';
function AddUsers() {
  const [selected, setSelected] = useState('');
  const [AllUsers, setAllUser] = useState([])
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const arr = [
    {
      id: 1,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 2,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 3,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 4,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 5,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 6,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 7,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 8,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 9,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 10,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 11,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 12,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 13,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
  ];
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(()=>{
    getAllUsers()
  },[])

  const getAllUsers = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseURL}get-all-user`,
      headers: { 
        'Authorization': `Bearer ${token}`, 
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log("...................",JSON.stringify(response.data));
      setAllUser(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    });
    
    
  }

  return (
    <div
      style={{
        background: '#F6F6F6',
        //   background:'blue',
        width: '73vw',
        borderRadius: 10,
        marginLeft: 20,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: 20,
      }}
    >
      <div style={{ display: 'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ display: 'flex' }}>
          <p style={{ fontSize: 30, fontWeight: 'bold' }}>MVS</p>
          <p style={{ fontSize: 30, marginLeft: 10 }}>Law Firms Profiles</p>
        </div>

        <button onClick={()=> navigate('/NewUser')} style={{height:40, background:'#8D1F20', width:100, borderRadius:100, borderWidth:0}}>
            <p style={{color:'white'}}>Add New</p>  
        </button>


      </div>

      <div style={{ height: 1, background: 'black' }} />

      <div style={{ marginTop: 20 }}>
        {/* RNPROFLE my client tab will not be able to view */}
      </div>

      <div
        style={{
          overflowX: 'scroll',
          display: 'flex',
          width: '100%',
          float: 'left',

          position: 'relative',
        }}
      >
        {AllUsers.map((e, i) => {
          return (
            <div
              style={{
                marginLeft: 30,
                padding: 20,
                background: 'white',
                marginTop: 20,
                borderRadius: 10,
                borderWidth: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={`${baseURL}public/Profiles/${e.profilePic}`}
                  style={{
                    height: '50px',
                    width: '50px',
                    objectFit: 'contain',
                    borderRadius:200
                  }}
                />
                <div style={{ height: 100, marginLeft: 10 }}>
                  <p
                    style={{
                      fontSize: 20,
                      height: 5,
                      width: 200,
                      marginTop: 30,
                    }}
                  >
                    {e.role}
                  </p>
                  <p style={{ fontWeight: 'lighter' }}>{e.name}</p>
                </div>
              </div>

              <hr />
              <div style={{ display: 'flex' }}>
                <p style={{ fontWeight: 'bold' }}>Name</p>
                <p>: {e.name}</p>
              </div>

              <div style={{ display: 'flex' }}>
                <p style={{ fontWeight: 'bold' }}>Phone</p>
                <p>: {e.phone}</p>
              </div>

              


              <div style={{ display: 'flex' }}>
                <p style={{ fontWeight: 'bold' }}>Email</p>
                <p>:{e.email}</p>
              </div>
              <hr />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <button
                  onClick={() => navigate('/PreMedicalRecord')}
                  style={{
                    height: 40,
                    width: '50%',
                    alignSelf: 'center',
                    background: '#8D1F20',
                    justifyContent: 'center',
                    borderWidth: 0,
                    borderRadius: 200,
                    marginTop: 15,
                  }}
                >
                  <p style={{ color: 'white' }}>View Details</p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddUsers;
