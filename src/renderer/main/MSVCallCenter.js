import React, { useState } from 'react';
import pfp from '../../../assets/pfp.png';
import { useNavigate } from 'react-router-dom';
import TxtInput from '../../components/TxtInput';
import saveicon from '../../../assets/save.png';

function MSVCallCenter() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

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
          <TxtInput title={'Name of injured:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'DOB:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Ht:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Wt:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Date of injury:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'State:'} placeHolder={'Enter Here...'} />
          <TxtInput title={'Nature of injury:'} placeHolder={'Enter Here...'} />
          <TxtInput
            title={'Fill out Eval synopsis:'}
            placeHolder={'Enter Here...'}
          />
          <TxtInput title={'Resulting damage:'} placeHolder={'Enter Here...'} />
          <TxtInput
            title={'Alleged negligence:'}
            placeHolder={'Enter Here...'}
          />
          <TxtInput
            title={'Further Treatment:'}
            placeHolder={'Enter Here...'}
          />
          <TxtInput
            title={'Relevant medical hx:'}
            placeHolder={'Enter Here...'}
          />
          <TxtInput
            title={'Relevant medical hx:'}
            placeHolder={'Enter Here...'}
          />
        </div>

        <div
          role="button"
          onClick={() => navigate('/MainScreen')}
          style={{
            height: 50,
            width: '10%',
            borderRadius: 200,
            display: 'flex',
            background: 'green',
            marginTop: 40,
            justifyContent: 'space-between',
            borderWidth: 0,
          }}
        >
          <p style={{ color: 'white', marginLeft: 20 }}>Save</p>

          <div
            style={{
              height: 50,
              width: 50,
              borderRadius: 200,
              background: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <img src={saveicon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MSVCallCenter;
