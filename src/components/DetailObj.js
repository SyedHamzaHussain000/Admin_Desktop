import React from 'react'

function DetailObj({num, title, value}) {
  return (
<div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <div
    style={{
      background: 'white',
      height: '30px',
      width: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      flexShrink: 0, // Prevents shrinking
      flexGrow: 0,   // Prevents growing
      marginTop:10
    }}
  >
    {num}
  </div>
  <div style={{ display: 'flex', marginLeft: 10, flexDirection: 'row', alignItems: 'flex-start' }}>
    <p style={{ fontWeight: 'bold', whiteSpace: 'nowrap', marginRight: '5px' }}>{title}</p>
    <p style={{ fontWeight: 'normal', flex: 1 }}>{value}</p>
  </div>
</div>

  )
}

export default DetailObj