import React from 'react'
import backIcon from '../../assets/back.png'
function BackButton(props) {
  return (
    <button onClick={props.nav} style={{backgroundColor:"white", borderWidth:0, borderRadius:200}}>
        <img src={backIcon} style={{height:'30px', width:'30px'}}/>
    </button>
  )
}

export default BackButton