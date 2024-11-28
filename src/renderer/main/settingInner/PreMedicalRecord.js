import React, { useState } from 'react';
import pfp from '../../../../assets/pfp.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DetailObj from '../../../components/DetailObj';
import Logo from '../../../components/Logo';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { baseURL } from '../../utils/baseURL';
import BackButton from '../../../components/BackButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loader from '../../../components/Loader';
import { ColorRing } from 'react-loader-spinner';

function PreMedicalRecord() {
  const [selectedOption, setSelectedOption] = useState('');
  const [InstakeLoader, setIntakeLoader] = useState(false);

  // console.log("resport Details: " ,reportDetails)

  const { itemId } = useParams(); // Fetch itemId from the URL
  const location = useLocation();

  const { item, reports } = location.state || {}; // Retrieve the object passed through stat

  const isreport = useSelector((state) => state.auth.reportDetails);

  const dateFormat = moment(isreport.createdAt).format('MMM Do YY');
  const token = useSelector((state) => state.auth.token);

  const userData = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  console.log('res', isreport);
  const formatedDate = moment().format('MMM Do YY');
  const onButtonPress = (e) => {
    setSelectedButton(e);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  const takeIntake = () => {
    setIntakeLoader(true);
    let data = JSON.stringify({
      isInTake: true,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${baseURL}finalize-lead/${item._id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast(
          'This is now your client please go to my client session and complete the intake session',
        );
        setIntakeLoader(false);
        // navigate('/')
      })
      .catch((error) => {
        console.log(error);
        setIntakeLoader(false);
        // navigate('/')
      });
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
          <Logo />
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
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
            <p style={{ fontSize: 12, marginRight: 20 }}>{userData.name}</p>
            <img
              src={`${baseURL}public/Profiles/${userData.profilePic}`}
              style={{
                objectFit: 'cover',
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
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <BackButton nav={() => navigate('/')} />

          {/* {reports == true ? null : (
            <>
              {InstakeLoader == true ? (
                <ColorRing
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    '#8D1F20',
                    '#8D1F20',
                    '#8D1F20',
                    '#8D1F20',
                    '#8D1F20',
                  ]}
                />
              ) : (
                <button
                  onClick={() => takeIntake()}
                  style={{
                    background: '#8D1F20',
                    borderWidth: 0,
                    borderRadius: 10,
                    paddingRight: 20,
                    paddingLeft: 20,
                  }}
                >
                  <p style={{ color: 'white' }}>Take Intake</p>
                </button>
              )}
            </>
          )} */}
        </div>
        <div>
          <p style={{ fontSize: 30, fontWeight: 'bold' }}>
            PRE MEDICAL RECORDS INTERVIEW COMPLETED.
          </p>
        </div>

        <DetailObj
          num={'0'}
          title={'Meet the medical requirements'}
          value={isreport?.MeetMedicalRequirements}
        />
        <hr />
        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 60 }}>
          <DetailObj num={'1'} title={'Caller'} value={isreport?.fullname} />
          <DetailObj num={'2'} title={'Firm'} value={'Joye Law Firm'} />
          <DetailObj
            num={'3'}
            title={'Evaluated by'}
            value={'Med View Services'}
          />
          <DetailObj num={'4'} title={'Date'} value={dateFormat} />
          <DetailObj
            num={'5'}
            title={'Meet Medical Requirments'}
            value={'Yes'}
          />
        </div>

        <p style={{ fontSize: 26 }}>Caller Info:</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 60 }}>
          <DetailObj
            num={'1'}
            title={'Caller Name'}
            value={isreport.callername}
          />
          <DetailObj num={'2'} title={'Email'} value={isreport.emailAddress} />
          <DetailObj num={'3'} title={'Phone'} value={isreport.primaryPhone} />
          <DetailObj
            num={'4'}
            title={'Alt. Phone'}
            value={isreport.secondaryPhone}
          />
          <DetailObj num={'5'} title={'Address'} value={isreport.address} />

          <DetailObj
            num={'6'}
            title={'Relation to Injured'}
            value={isreport.relation}
          />
          <DetailObj
            num={'7'}
            title={'Date and time of incident'}
            value={isreport.dateandtime}
          />
          <DetailObj
            num={'8'}
            title={'Any Synopsis'}
            value={isreport.anySynopsis}
          />

          <DetailObj
            num={'9'}
            title={'Time to reach'}
            value={isreport.timeToReach}
          />
        </div>

        {isreport.status == 'Completed' ? (
          <>
            <p style={{ fontSize: 26 }}>Injured Info:</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 60 }}>
              <DetailObj
                num={'1'}
                title={'Injured Name'}
                value={isreport.nameOfInjured}
              />
              <DetailObj num={'2'} title={'Injured DOB'} value={isreport.DOB} />
              <DetailObj
                num={'3'}
                title={'Date of Injury'}
                value={'Aug 23, 2024'}
              />
              <DetailObj num={'4'} title={'Height'} value={isreport.Height} />
              <DetailObj num={'5'} title={'Weight'} value={isreport.Weight} />
              <DetailObj
                num={'5'}
                title={'Injury State'}
                value={isreport.InjuryState}
              />
              <DetailObj num={'5'} title={'Married'} value={isreport.Married} />
              <DetailObj
                num={'5'}
                title={'Dependents'}
                value={isreport.Dependants}
              />
            </div>

            <p style={{ fontSize: 26 }}>Evaluation Synopsis:</p>

            <DetailObj
              num={'1'}
              title={'Alleged Negligence'}
              value={isreport.Allegednegligence}
            />
            <DetailObj
              num={'2'}
              title={'Further Treatment'}
              value={isreport.FurtherTreatment}
            />
            <DetailObj
              num={'3'}
              title={'Relevant Medical History'}
              value={isreport.Relevantmedicalhistory}
            />
            <DetailObj
              num={'4'}
              title={'Reviewers Notes'}
              value={isreport.Reviewersnotes}
            />

            <DetailObj num={'10'} title={'Detail'} value={isreport.detail} />

            <p style={{ fontSize: 26 }}>Evaluation Synopsis:</p>
            <DetailObj
              num={'1'}
              title={'Is there a significant or permanent injury or damage?'}
              value={isreport.permanentinjuryordamage}
            />
            <DetailObj
              num={'2'}
              title={
                'Is there an apparent or suggested deviation in the standard of care?'
              }
              value={isreport.standardofcare}
            />
            <DetailObj
              num={'3'}
              title={
                'Is there a direct link between the deviation and the injury or damage?'
              }
              value={isreport.injuryordamage}
            />
            <DetailObj
              num={'4'}
              title={'Further review of medical records recommended?'}
              value={isreport.medicalrecordsrecommended}
            />
          </>
        ) : null}

        <hr />

        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <p style={{ textAlign: 'center', width: '80%' }}>
            Thank you for using MedView Services. For questions about this
            evaluation or feedback on our services, simply reply to this email.
            MedView Services medical-merit recommendations are based solely on
            information as needed to make the final decision whether to accept
            or reject any potential case evaluated by MedView Services. Under no
            circumstances should this evaluation be considered legal or medical
            advice.
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PreMedicalRecord;
