import React, { useState } from 'react'
import pfp from '../../../assets/pfp.png'
import cover from '../../../assets/cover.png'
import Profile_icon from '../../../assets/Profile_icon.png'
import client_icon from '../../../assets/client_icon.png'
import setting_icon from '../../../assets/setting_icon.png'
import logout_icon from '../../../assets/logout_icon.png'
import report_icon from '../../../assets/reports.png'
import person from '../../../assets/person.png'
import RN_Profile from './RN_Profile'
import Setting from './Setting'
import Clients from './Clients'
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo'
import Reports from './Reports'
import AddUsers from './AddUsers'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/AuthSlice'
import { baseURL } from '../utils/baseURL'

const MainScreen = () => {


  const navigate = useNavigate()

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedButton, setSelectedButton] = useState('Profile');

  const userData = useSelector(state => state.auth.user)

  console.log("userData",userData)

  const dispatch = useDispatch()
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      console.log(event.target.value);
    };

    // const buttonPress = (e) => {
    //   console.log("press", e)
    //   setSelectedButton(e)
    //   if(e == "Logout"){
    //     navigate('/')
    //   }
    // }

    const buttonPress = (e) => {
      // console.log("press", e)
      setSelectedButton(e)
      if(e == "Logout"){
        dispatch(logout())
      }
    }



  return (
    <div>
      {/* this is header */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>

<Logo/>


    <div style={{display:'flex', alignItems:'center'}}>
        <div>
          {/* <select id="options" value={selectedOption} onChange={handleChange} style={{ padding: '5px', margin: '10px 0', borderRadius:5 }}>
            <option value="">Select Date</option>
            <option value="option1">Aug 21, 2024 - Sep 21 2024</option>
            <option value="option2">Jun 21, 2024 - May 21 2024</option>
            <option value="option3">Apr 21, 2024 - Dec 21 2024</option>
          </select> */}
        </div>

        <div style={{ borderWidth:1, borderColor:'black',  borderStyle: 'solid' , height:'25px', display:'flex', alignItems:'center', justifyContent:'center',marginLeft:10, paddingRight:40, paddingLeft:10,borderRadius:5 }}>
              <p style={{fontSize:12}}>{userData.name}</p>
              <img src={`${baseURL}public/Profiles/${userData.profilePic}`}  style={{objectFit:'contain', height:'40px', width:'40px', position:'absolute', right:0,   boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.3)',  borderRadius:200}}/>
        </div>
    </div>
</div>
        {/* mainn body */}
        <div style={{display:'flex'}}>
          <div  style={{

            background: '#F6F6F6',
            // background: 'red',
            height:'50%',
            width: '25vw', 
            borderRadius: 20, 
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' ,
            padding:20
          }}>
               <div style={{height:'220px', width:'100%', }}>
                  <img src={`${baseURL}public/Profiles/${userData.coverPic}`} style={{objectFit:'cover', height:'150px', background:'green', width:'100%', borderTopRightRadius:30, borderTopLeftRadius:30, borderBottomRightRadius:30, overflow:'hidden' }}/>
                  <div style={{ position:'absolute', zIndex:1, display:'flex', alignItems:'flex-end', top:260 }}>

                    <img src={`${baseURL}public/Profiles/${userData.profilePic}`} style={{objectFit:'contain', height:'80px',  width:'80px',borderRadius:200, overflow:'hidden',}}/>
                    <p style={{fontSize:20, marginLeft:5}}>{userData.name}</p>
                  </div>
              </div>

              <div style={{height:'1px', width:'100%', background:'black'}}/>

              <div >
                {/* law firm buttom */}
                  <button   onClick={() => buttonPress('Profile')}  style={{width:'100%', display:'flex', borderRadius:10, borderWidth:0, alignItems:'center', marginTop:10, background: selectedButton == "Profile" ? "#8D1F20" : null}}> 
                        <img src={Profile_icon} style={{objectFit:'contain', height:'50px', width:'50px',}}/>
                        <p style={{fontSize:14, marginLeft:10, color: selectedButton == "Profile" ? "white": "black"}}>LAW FIRM PROFILE</p>
                  </button>

                  <button onClick={() => buttonPress('AddUsers')} style={{width:'100%', display:'flex', borderRadius:10, borderWidth:0, alignItems:'center', marginTop:10,background: selectedButton == "AddUsers" ? "#8D1F20" : null}}> 
                        <img src={person} style={{objectFit:'contain', height:'50px', width:'50px',}}/>
                        <p style={{fontSize:14, marginLeft:10, color: selectedButton == "AddUsers" ? "white": "black"}}>LF PROFILES</p>
                  </button>

                  <button onClick={() => buttonPress('Client')} style={{width:'100%', display:'flex', borderRadius:10, borderWidth:0, alignItems:'center', marginTop:10,background: selectedButton == "Client" ? "#8D1F20" : null}}> 
                        <img src={client_icon} style={{objectFit:'contain', height:'50px', width:'50px',}}/>
                        <p style={{fontSize:14, marginLeft:10, color: selectedButton == "Client" ? "white": "black"}}>ALL LEADS</p>
                  </button>

                  <button onClick={() => buttonPress('REPORTS')} style={{width:'100%', display:'flex', borderRadius:10, borderWidth:0, alignItems:'center', marginTop:10,background: selectedButton == "REPORTS" ? "#8D1F20" : null}}> 
                        <img src={report_icon} style={{objectFit:'contain', height:'50px', width:'50px',}}/>
                        <p style={{fontSize:14, marginLeft:10, color: selectedButton == "REPORTS" ? "white": "black"}}>REPORTS</p>
                  </button>

                  <button onClick={() => buttonPress('Setting')} style={{width:'100%', display:'flex', borderRadius:10, borderWidth:0, alignItems:'center', marginTop:10,background: selectedButton == "Setting" ? "#8D1F20" : null}}> 
                        <img src={setting_icon} style={{objectFit:'contain', height:'50px', width:'50px',}}/>
                        <p style={{fontSize:14, marginLeft:10, color: selectedButton == "Setting" ? "white": "black"}}>SETTINGS</p>
                  </button>

                  <button onClick={() => buttonPress('Logout')} style={{width:'100%', display:'flex', borderRadius:10, borderWidth:0, alignItems:'center', marginTop:10,background: selectedButton == "Logout" ? "#8D1F20" : null}}> 
                        <img src={logout_icon} style={{objectFit:'contain', height:'50px', width:'50px',}}/>
                        <p style={{fontSize:14, marginLeft:10, color: selectedButton == "Logout" ? "white": "black"}}>LOG OUT</p>
                  </button>
                  
              </div>
          </div>

            {
              selectedButton == "Profile" ?

              <Setting  onlyProfle={true}/>
              :
              selectedButton == "AddUsers" ?
              <AddUsers/>
              :
              selectedButton == "Setting" ?
              <Setting/>
              :
              selectedButton == "Client" ?
              <Clients/>
              :
              selectedButton == "REPORTS" ?
              <Reports/>
              :
              null
            }
        </div>
    </div>
  )
}

export default MainScreen