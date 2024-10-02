import React from 'react'
import AppIcon from '../../assets/appicon.png'
function Logo() {
  return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <img src={AppIcon} style={{ height:100, width:200, objectFit:'contain',}} />
  </div>
  )
}

export default Logo