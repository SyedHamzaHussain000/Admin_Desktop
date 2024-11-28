import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../utils/baseURL';
import axios from 'axios';
import { setReportsDetail } from '../../redux/AuthSlice';
import { Puff } from 'react-loader-spinner';
import Loader from '../../components/Loader';

function Reports() {
  const [selected, setSelected] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isloading, setLoading] = useState(false);

  const [reports, setReports] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const arr = [
    {
      id: 1,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 2,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 3,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 4,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 5,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 6,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 7,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 8,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 9,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 10,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 11,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 12,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
    {
      id: 13,
      name: 'James Dollins',
      phone: '8033879093',
      altphone: '1365448433',
      BestTime: '8:45 PM',
      Email: 'dollinsljames@gmail.com',
    },
  ];
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    getReports();
  }, []);

  const getReports = () => {
    setLoading(true);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${baseURL}get-all-intake-report`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setReports(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: 30, fontWeight: 'bold' }}>Reports</p>
          <p style={{ fontSize: 14, marginLeft: 10 }}>{selectedOption}</p>
        </div>

        <div>
          {/* <select
            id="options"
            value={selectedOption}
            onChange={handleChange}
            style={{ padding: '5px', margin: '10px 0', borderRadius: 5 }}
          >
            <option value="">Select Date</option>
            <option value="Aug 21, 2024 - Sep 21 2024">
              Aug 21, 2024 - Sep 21 2024
            </option>
            <option value="Jun 21, 2024 - Sep 21 2024">
              Jun 21, 2024 - May 21 2024
            </option>
            <option value="Apr 21, 2024 - Sep 21 2024">
              Apr 21, 2024 - Dec 21 2024
            </option>
          </select> */}
        </div>
      </div>

      <div style={{ height: 1, background: 'black' }} />

      <div
        style={{
          overflowX: 'scroll',
          display: 'flex',
          width: '100%',
          float: 'left',
          position: 'relative',
        }}
      >
        {isloading == true ? (
          <Loader />
        ) : (
          <>
            {reports?.map((e, i) => {
              console.log('ee', e);
              return (
                <div
                  key={i} // Unique key for each item
                  onClick={() => navigate('/PreMedicalRecord')} // Handling navigation
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centers content vertically in the div
                    background: 'white',
                    margin: '20px 10px', // Reduced margin between items
                    padding: '20px',
                    borderRadius: '10px', // Rounded corners
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', // Adds subtle shadow
                    cursor: 'pointer', // Changes cursor to indicate clickable
                    width: '200px', // Fixed width for each item (adjust this size)
                    minWidth: '200px', // Ensures a minimum width if needed
                    flexShrink: 0, // Prevents items from shrinking when scrolling
                  }}
                >
                  <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Joye Law Firm Potential Clients
                  </p>
                  <p>
                    {e.callAttempt}/10
                  </p>
                  <p>
                  status ({e.status})
                  </p>
                  <hr style={{ width: '100%', border: '0.5px solid #ccc' }} />

                  <div style={{ textAlign: 'left', width: '100%' }}>
                    <p>
                      <strong>Name:</strong> {e.callername} 
                    </p>
                    <p>
                      <strong>Phone:</strong> {e.primaryPhone}
                    </p>
                    <p>
                      <strong>Alt. Phone:</strong> {e.secondaryPhone}
                    </p>
                    <p>
                      <strong>Best Time to Reach:</strong> {e.timeToReach}
                    </p>
                    <p>
                      <strong>Email:</strong> {e.emailAddress}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      dispatch(setReportsDetail(e)),
                        navigate('/PreMedicalRecord');
                    }}
                    style={{
                      height: 40,
                      width: '50%',
                      alignSelf: 'center',
                      background: '#8D1F20',
                      justifyContent: 'center',
                      borderWidth: 0,
                      borderRadius: 200,
                      marginTop: 15,
                    }}
                  >
                    <p style={{ color: 'white' }}>View Details</p>
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Reports;
