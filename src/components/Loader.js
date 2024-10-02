// Loader.js
import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = () => (
  <div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:1,  height:'500px'}}>
    {/* You can use CSS animations or libraries like FontAwesome or Material-UI for the spinner */}
    <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#8D1F20', '#8D1F20', '#8D1F20', '#8D1F20', '#8D1F20']}
  />
  </div>
);

const styles = {
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  spinner: {
    border: '8px solid #f3f3f3', /* Light grey */
    borderTop: '8px solid #3498db', /* Blue */
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 2s linear infinite',
  },
};

export default Loader;

  