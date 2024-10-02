import React, { useState } from 'react';
import pfp from '../../../../assets/pfp.png';
import { useNavigate } from 'react-router-dom';
import DetailObj from '../../../components/DetailObj';
import Logo from '../../../components/Logo';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { baseURL } from '../../utils/baseURL';
import BackButton from '../../../components/BackButton';
function PreMedicalRecord() {
  
  const [selectedOption, setSelectedOption] = useState('');

  const reportDetails = useSelector(state => state.auth.reportDetails)

  const userData = useSelector(state => state.auth.user)
  const navigate = useNavigate();

  console.log("userData",userData)

  console.log("res", reportDetails)
  const formatedDate = moment().format("MMM Do YY");       
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
          <Logo/>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            {/* <select
              id="options"
              value={selectedOption}
              onChange={handleChange}
              style={{ padding: '5px', margin: '10px 0', borderRadius: 5 }}
            >
              <option value="">Select Date</option>
              <option value="option1">Aug 21, 2024 - Sep 21 2024</option>
              <option value="option2">Jun 21, 2024 - May 21 2024</option>
              <option value="option3">Apr 21, 2024 - Dec 21 2024</option>
            </select> */}
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
            <p style={{ fontSize: 12 }}>{userData.name}</p>
            <img
              src={`${baseURL}public/Profiles/${userData.profilePic}`}
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
        <BackButton nav={()=> navigate('/')}/>
        <div>
          <p style={{ fontSize: 30, fontWeight: 'bold' }}>
            PRE MEDICAL RECORDS INTERVIEW COMPLETED.
          </p>
        </div>

        <hr />

        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 60 }}>
          <DetailObj num={'1'} title={'Caller'} value={reportDetails?.firstName} />
          <DetailObj num={'2'} title={'Firm'} value={'Joye Law Firm'} />
          <DetailObj
            num={'3'}
            title={'Evaluated by'}
            value={'Med View Services'}
          />
          <DetailObj num={'4'} title={'Date'} value={'Aug 21, 2024'} />
          <DetailObj
            num={'5'}
            title={'Meet Medical Requirments'}
            value={'Yes'}
          />
        </div>

        <p style={{ fontSize: 26 }}>Evaluation Synopsis:</p>
        <DetailObj
          num={'1'}
          title={'Resulting Damage'}
          value={
            ": is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <DetailObj
          num={'2'}
          title={'Alleged Negligence'}
          value={
            ": is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <DetailObj
          num={'3'}
          title={'Further Treatment'}
          value={
            " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <DetailObj
          num={'4'}
          title={'Relevant Medical History'}
          value={
            " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <DetailObj
          num={'5'}
          title={'Reviewers Notes'}
          value={
            " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />

        <p style={{ fontSize: 26 }}>Injured Info:</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 60 }}>
          <DetailObj num={'1'} title={'Injured Name'} value={'James Dollins'} />
          <DetailObj num={'2'} title={'Injured DOB'} value={'Aug 21, 2024'} />
          <DetailObj
            num={'3'}
            title={'Date of Injury'}
            value={'Aug 23, 2024'}
          />
          <DetailObj num={'4'} title={'Height'} value={'175 Cm'} />
          <DetailObj num={'5'} title={'Weight'} value={'77kg'} />
          <DetailObj num={'5'} title={'Injury State'} value={'Lorem Ipsum'} />
          <DetailObj num={'5'} title={'Married'} value={'Yes'} />
          <DetailObj num={'5'} title={'Dependents'} value={'N/A'} />
        </div>

        <p style={{ fontSize: 26 }}>Caller Info:</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 60 }}>
          <DetailObj num={'1'} title={'Caller Name'} value={'Kimberly Welch'} />
          <DetailObj num={'2'} title={'Phone'} value={'1234556456'} />
          <DetailObj
            num={'3'}
            title={'Address'}
            value={'69 Crossvine Ct. Saint Matthews, SC 29135'}
          />
          <DetailObj
            num={'4'}
            title={'Email'}
            value={'Kimberlywelch@gmailcom'}
          />
          <DetailObj
            num={'5'}
            title={'Relation to Injured Party'}
            value={'NO'}
          />
        </div>

        <p style={{ fontSize: 26 }}>Evaluation Synopsis:</p>
        <DetailObj
          num={'1'}
          title={'Is there a significant or permanent injury or damage?'}
          value={
            ": is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <DetailObj
          num={'2'}
          title={
            'Is there an apparent or suggested deviation in the standard of care?'
          }
          value={
            ": is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <DetailObj
          num={'3'}
          title={
            'Is there a direct link between the deviation and the injury or damage?'
          }
          value={
            " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <DetailObj
          num={'4'}
          title={'Further review of medical records recommended?'}
          value={
            " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />

        <hr/>
        
        <div style={{alignItems:'center', justifyContent:'center', display:'flex'}}>

        <p style={{textAlign:'center', width:'80%',}}>Thank you for using MedView Services. For questions about this evaluation or feedback on our services, simply reply to this email. MedView Services medical-merit recommendations are based solely on information as needed to make the final decision whether to accept or reject any potential case evaluated by MedView Services. Under no circumstances should this evaluation be considered legal or medical advice.</p>
        </div>
      </div>
    </div>
  );
}

export default PreMedicalRecord;
