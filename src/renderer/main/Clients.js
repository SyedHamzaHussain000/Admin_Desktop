import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../utils/baseURL';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../../components/Loader';
import { CirclesWithBar, ThreeDots } from 'react-loader-spinner';
import { setReportsDetail } from '../../redux/AuthSlice';

function Clients() {
  const [selected, setSelected] = useState('MyClients');
  const [isloading, setLoader] = useState(false);

  const [myLead, setMyLead] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    getMyLeads();
  }, []);

  const selectType = (val) => {
    setSelected(val);

    if (val == 'MyClients') {
      getMyLeads();
    } else {
      getCompletedLeads();
    }
  };

  const getMyLeads = () => {
    setLoader(true);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseURL}all-pending-lead`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setMyLead(response.data.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  const getCompletedLeads = () => {
    setLoader(true);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseURL}all-completed-lead`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setMyLead(response.data.data);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        console.log(error);
      });
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  const handleScroll = (event) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div
      style={{
        background: '#F6F6F6',
        //   background:'blue',
        width: '73vw',
        borderRadius: 10,
        marginLeft: 20,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex' }}>
          <p style={{ fontSize: 30, fontWeight: 'bold' }}>MVS</p>
          <p style={{ fontSize: 30, marginLeft: 10 }}>Law Firms Potential Clients.</p>
        </div>
        <button
          onClick={() => navigate('/ClientsCallLaws')}
          style={{
            background: '#8D1F20',
            borderRadius: 200,
            paddingRight: 30,
            paddingLeft: 30,
            borderWidth: 0,
            marginLeft: 20,
            height: 50,
            width: 150,
          }}
        >
          <p style={{ color: 'white' }}>Add New</p>
        </button>
      </div>
      <div style={{ height: 1, background: 'black' }} />

      <div style={{ marginTop: 20 }}>
        {/* RNPROFLE my client tab will not be able to view */}
        {/* <button
          onClick={()=> setSelected("NewClients")}
          style={{
            padding: 10,
            background: selected == "NewClients" ? "#8D1F20" : 'white',
            borderRadius: 200,
            paddingRight: 30,
            paddingLeft: 30,
            borderWidth: 0,
            marginLeft: 20,
          }}
        >
          <p style={{color:selected == "NewClients" ? "white" : "black"}}>New Clients</p>
        </button> */}

        <button
          onClick={() => selectType('MyClients')}
          style={{
            padding: 10,
            background: selected == 'MyClients' ? '#8D1F20' : 'white',
            borderRadius: 200,
            paddingRight: 30,
            paddingLeft: 30,
            borderWidth: 0,
            marginLeft: 20,
          }}
        >
          <p style={{ color: selected == 'MyClients' ? 'white' : 'black' }}>
              All Potential Clients
          </p>
        </button>

        <button
          onClick={() => selectType('Completed')}
          style={{
            padding: 10,
            background: selected == 'Completed' ? '#8D1F20' : 'white',
            borderRadius: 200,
            paddingRight: 30,
            paddingLeft: 30,
            borderWidth: 0,
            marginLeft: 20,
          }}
        >
          <p style={{ color: selected == 'Completed' ? 'white' : 'black' }}>
            Completed
          </p>
        </button>
      </div>

      <div
        style={{
          overflowX: 'scroll',
          display: 'flex',
          width: '100%',
          float: 'left',
          position: 'relative',
          whiteSpace: 'nowrap', // Ensures buttons stay in a horizontal line
          padding: '10px 0', // Optional padding for better scroll appearance
        }}
      >
        {isloading == true ? (
            <Loader/>
        ) : (
          // myLead.map((e, i) => (
          //   <button
          //     key={i} // Add a unique key to each item in the list
          //     onClick={() => navigate('/PreMedicalRecord')}
          //     style={{
          //       display: 'inline-block', // Ensures buttons stay in a line
          //       marginLeft: 30,
          //       padding: 20,
          //       background: 'white',
          //       marginTop: 20,
          //       borderRadius: 10,
          //       borderWidth: 0,
          //       textAlign: 'left', // Aligns text to the left within the button
          //       width: 'auto', // Adjust width based on content
          //       // minWidth: '200px', // Ensures a minimum width for each button
          //     }}
          //   >
          //     <p style={{ fontSize: 20, margin: 20, alignSelf: 'center' }}>
          //       Joye Law Firm Lead
          //     </p>
          //     <p style={{ alignSelf: 'center', textAlign: 'center' }}>
          //       {e.firstName}
          //     </p>

          //     <hr />

          //     <div
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'space-between',
          //         marginTop: 20,
          //       }}
          //     >
          //       <p style={{ fontWeight: 'bold', margin: 0 }}>Name </p>
          //       <p style={{ margin: 0 }}>{e.firstName}</p>
          //     </div>

          //     <div
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'space-between',
          //         marginTop: 20,
          //       }}
          //     >
          //       <p style={{ fontWeight: 'bold', margin: 0 }}>Phone</p>
          //       <p style={{ margin: 0 }}>{e.primaryPhone}</p>
          //     </div>

          //     <div
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'space-between',
          //         marginTop: 20,
          //       }}
          //     >
          //       <p style={{ fontWeight: 'bold', margin: 0 }}>Alt. Phone</p>
          //       <p style={{ margin: 0 }}>{e.secondaryPhone}</p>
          //     </div>

          //     <div
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'space-between',
          //         marginTop: 20,
          //       }}
          //     >
          //       <p style={{ fontWeight: 'bold', margin: 0 }}>
          //         Best Time to Reach
          //       </p>
          //       <p style={{ margin: 0 }}>{e.timeToReach}</p>
          //     </div>

          //     <div
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'space-between',
          //         marginTop: 20,
          //       }}
          //     >
          //       <p style={{ fontWeight: 'bold', margin: 0 }}>Email</p>
          //       <p style={{ margin: 0 }}>{e.emailAddress}</p>
          //     </div>
          //   </button>
          // ))
          <>
          {
           
           myLead?.length > 0 ?

           
           
          myLead?.map((e, i) => (

            <div 
              key={i} // Unique key for each item
              onClick={() => { 
                dispatch(setReportsDetail(e)),
                navigate('/PreMedicalRecord')
              }} // Handling navigation
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Centers content vertically in the div
                background: 'white',
                margin: '20px 30px', // Adds space around each item
                padding: '20px',
                borderRadius: '10px', // Rounded corners
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Adds subtle shadow
                cursor: 'pointer', // Changes cursor to indicate clickable
                width: 'calc(100% - 60px)', // Adjusts width and accounts for margin
                maxWidth: '200px'
              }}
            >
              {
                console.log("first.....", e)
              }
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Potential Clients</p>

              <p>{e.callAttempt}/10</p>
          
              <hr style={{ width: '100%', border: '0.5px solid #ccc' }} />
          
              <div style={{ textAlign: 'left', width: '100%' }}>
                <p><strong>Name:</strong> {e.callername}</p>
          
                <p><strong>Phone:</strong> {e.primaryPhone}</p>
                <p><strong>Alt. Phone:</strong> {e.secondaryPhone}</p>
                <p><strong>Best Time to Reach:</strong> {e.timeToReach}</p>
                <p><strong>Email:</strong> {e.emailAddress}</p>
              </div>
            </div>
          ))
          :
          <div style={{display:'flex',  }}>

          <p>No Potential Clients Found</p>
          </div>
        }
          </>
        )}
      </div>
    </div>
  );
}

export default Clients;
