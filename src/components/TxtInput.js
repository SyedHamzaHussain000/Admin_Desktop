import React from 'react'

function TxtInput({title,placeHolder,onChange}) {
  return (
    <div>
        <p style={{color:'black', fontSize:16, height:10}}>{title}</p>
        <input
            placeholder={placeHolder}
            style={{
              borderWidth: 1,
              borderColor: '#70707082',
              padding: 15,
              width: '100%',
              borderRadius: 5,
            }}
            type="email"
            onChange={onChange}
          />
    </div>
  )
}

export default TxtInput