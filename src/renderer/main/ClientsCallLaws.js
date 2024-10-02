import React, { useState } from 'react';
import pfp from '../../../assets/pfp.png';
import { useNavigate } from 'react-router-dom';
import TxtInput from '../../components/TxtInput';
import arrow from '../../../assets/arrow.png'


function ClientsCallLaws() {
    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState('');

    const onButtonPress = (e) => {
      setSelectedButton(e);
    };
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      console.log(event.target.value);
    };

  return (
    <div>
          {/* this is header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ padding: 20 }}>
          <h1 style={{ margin: 0 }}>Logo</h1>
          <h1 style={{ margin: 0 }}>H E R E</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <select
              id="options"
              value={selectedOption}
              onChange={handleChange}
              style={{ padding: '5px', margin: '10px 0', borderRadius: 5 }}
            >
              <option value="">Select Date</option>
              <option value="option1">Aug 21, 2024 - Sep 21 2024</option>
              <option value="option2">Jun 21, 2024 - May 21 2024</option>
              <option value="option3">Apr 21, 2024 - Dec 21 2024</option>
            </select>
          </div>

          <div
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderStyle: 'solid',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              paddingRight: 40,
              paddingLeft: 10,
              borderRadius: 5,
            }}
          >
            <p style={{ fontSize: 12 }}>Kimberly Welch</p>
            <img
              src={pfp}
              style={{
                objectFit: 'contain',
                height: '50px',
                width: '50px',
                position: 'absolute',
                right: 0,
                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.3)',
                borderRadius: 200,
              }}
            />
          </div>
        </div>
      </div>


      <div
        style={{
        //   height: '80vh',
          background: '#F6F6F6',
          borderRadius: 20,
          padding: 20,
        }}
      >
        <div>
          <p style={{ fontSize: 30, fontWeight: 'bold' }}>MVS Call Center.</p>
          <p style={{ fontSize: 16, color: 'gray' }}>
            Push Edit to fill in boxes as indicated.
          </p>
        </div>

        <hr />

        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 60 }}>
          <TxtInput
            title={'Relation to injured:'}
            placeHolder={'Enter Here...'}
          />
          <TxtInput title={'First Name:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Last Name:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Email Address:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Caller ID:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Primary Phone:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Secondary Phone:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Address:'} placeHolder={'Enter Here...'} />
          <TxtInput
            title={'Synopsis if given:'}
            placeHolder={'Enter Here...'}
          />
         
        </div>

        <button onClick={()=> navigate('/MSVCallCenter')} style={{height:50, width:'10%', borderRadius:200, display:'flex', background:'green', marginTop:40, justifyContent:"center" ,alignItems:'center' ,borderWidth:0, }}>
            <p style={{color:'white',}}>Submit</p>

            {/* <div style={{height:50, width:50, borderRadius:200, background:'#A0B692', alignItems:'center', justifyContent:'center', display:'flex',}}>
                <img src={arrow} />
            </div> */}

        </button>
      </div>
    </div>
  )
}

export default ClientsCallLaws