import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../utils/baseURL';
import BackButton from '../../components/BackButton';

function ProfileDetail() {
    const { items } = useParams(); // This should match with the route definition

    const location = useLocation();
  
    const { item } = location.state || {}; 
    const navigate = useNavigate();

    console.log("item......", item)
  return (
    <div
      style={{
        background: '#F6F6F6',
        //   background:'blue',

        borderRadius: 10,
        marginLeft: 20,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: 20,
        alignSelf:'center',

      }}
    >
      <div
        style={{

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ alignItems:'center', justifyContent:'center' }}>
            <BackButton nav={()=> navigate('/')}/>
          <p style={{ fontSize: 30, marginLeft: 10, }}>User Details</p>
            <img src={`${baseURL}public/Profiles/${item.profilePic}`}   style={{height:100, width:100, borderRadius:200}}  />
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Bio: {item.bio}</p>
        </div>  
      </div>
    </div>
  );
}

export default ProfileDetail;
