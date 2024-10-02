import React, { useState } from 'react'
import Profile from './settingInner/Profile'
import Privacy from './settingInner/Privacy'

function Setting({onlyProfle}) {
    const [selectedButton, setSelectedButton] = useState("Profile")
    const onButtonPress = (e) => {
        setSelectedButton(e)
    }
  return (
    <div style={{
        background:'#F6F6F6',
       //   background:'blue',
         width:'100%',
         borderRadius:10,
         marginLeft:20,
         boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' ,
         padding:20
         }}>
            <p style={{fontSize:30, color:'black'}}>{onlyProfle == true ? "Profile":"Settings"} </p>
         
         {
            !onlyProfle &&
            <div style={{display:'flex', alignItems:'center'}}>
                {/* <button onClick={()=> setSelectedButton("details")} style={{borderWidth:0 ,background: selectedButton == "details" ? "#8D1F20" : "#F6F6F6", borderRadius:20, height:'40px', display:'flex', alignItems:'center', justifyContent:'center', paddingRight:10 , paddingLeft:10}}>
                        <p style={{fontSize:20, color: selectedButton == "details" ? 'white' : 'black'}}>My Details</p>
                </button> */}

                <button onClick={()=> setSelectedButton("Profile")} style={{borderWidth:0 ,background: selectedButton == "Profile" ? "#8D1F20" : "#F6F6F6", borderRadius:20, height:'40px', display:'flex', alignItems:'center', justifyContent:'center', paddingRight:10 , paddingLeft:10}}>
                    <p style={{fontSize:20, color: selectedButton == "Profile" ? 'white' : 'black'}}>Profile</p>
                </button>

                <button onClick={()=> setSelectedButton("Privacy")} style={{borderWidth:0 ,background: selectedButton == "Privacy" ? "#8D1F20" : "#F6F6F6", borderRadius:20, height:'40px', display:'flex', alignItems:'center', justifyContent:'center', paddingRight:10 , paddingLeft:10}}>
                    <p style={{fontSize:20, color: selectedButton == "Privacy" ? 'white' : 'black'}}>Privacy</p>
                </button>

                {/* <button onClick={()=> setSelectedButton("Notifications")} style={{borderWidth:0 ,background: selectedButton == "Notifications" ? "#8D1F20" : "#F6F6F6", borderRadius:20, height:'40px', display:'flex', alignItems:'center', justifyContent:'center', paddingRight:10 , paddingLeft:10}}>
                    <p style={{fontSize:20, color: selectedButton == "Notifications" ? 'white' : 'black'}}>Notifications</p>
                </button> */}

            </div>
         }

            {
                selectedButton == "Profile" ?
                <Profile onlyProfle={onlyProfle}/>
                :
                selectedButton == "Privacy" ?
                 <Privacy/>
                 :
                null
            }

        

         </div>
  )
}

export default Setting