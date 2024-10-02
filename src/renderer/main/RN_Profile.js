import React from 'react'
import phone from '../../../assets/phone.png'
import phone_down from '../../../assets/phone_down.png'
import DetailObj from '../../components/DetailObj'
import { useNavigate } from 'react-router-dom';


function RN_Profile() {
    const navigate = useNavigate();

  return (
    <div style={{
         background:'#F6F6F6',
        //   background:'blue',
          width:'100%',
          borderRadius:10,
          marginLeft:20,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' ,
          padding:20
          }}>
            
            <div style={{display:'flex', alignItems:'center'}}>
                <p style={{fontWeight:'bold', fontSize:40}}>Joye</p>
                <p style={{fontSize:40, marginLeft:10, fontWeight:'normal'}}>Law Firm Lead (James Dollins)</p>
            </div>

            <div style={{width:'100%', height:1, background:'black'}}/>

            <div style={{background:'white', marginTop:20, padding:20, borderRadius:20}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <p style={{fontSize:24, color:'black'}}>Client Details</p>

                     <div style={{display:'flex'}}>

                        <div role='button' onClick={()=> navigate("/MSVCallCenter")} style={{height:'50px', display:'flex', alignItems:'center', justifyContent:'center', background:'#8D1F20', paddingRight:20, paddingLeft:20, borderRadius:200}}>
                            <div style={{height:'30px', width:'30px', background:'white', borderRadius:200, marginRight:10, alignItems:'center', justifyContent:'center', display:'flex'}}>
                                <img src={phone} style={{height:'15px', width:'15px', objectFit:'contain'}}/>
                            </div>
                            <p style={{color:'white'}}>Take Intake</p>
                        </div>

                        <div style={{height:'50px', display:'flex', alignItems:'center', justifyContent:'center', background:'white', paddingRight:20, paddingLeft:20, borderRadius:200,     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', marginLeft:10}}>
                            <div style={{height:'30px', width:'30px', background:'#8D1F20', borderRadius:200, marginRight:10, alignItems:'center', justifyContent:'center', display:'flex'}}>
                                <img src={phone_down} style={{height:'15px', width:'15px', objectFit:'contain'}}/>
                            </div>
                            <p style={{color:'black'}}>Call Attempts: 6/10</p>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '30px',
                    marginTop:20}}>

                        <DetailObj num={"1"} title={"Name"} value={"James Dollins"}/>
                        <DetailObj num={"2"} title={"Phone"} value={"8033879093"}/>
                        <DetailObj num={"3"} title={"Alt. Phone"} value={"1365448433"}/>
                        <DetailObj num={"4"} title={"Best Time to Reach"} value={"8:45 PM"}/>
                        <DetailObj num={"5"} title={"Email"} value={"dollinsljames@gmail.com"}/>
                        <DetailObj num={"6"} title={"Address"} value={"69 Crossvine Ct. Saint Matthews, SC 29135"}/>
                </div>

                <p style={{fontSize:24, color:'black'}}>Intake Administration</p>


                <div style={{ display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '20px',
                    }}>

                        <DetailObj num={"1"} title={"Intake Date"} value={"6/2/2024 10:00 PM"}/>
                        <DetailObj num={"2"} title={"Contact Source"} value={"Lead"}/>
                        <DetailObj num={"3"} title={"Marketing Source"} value={"Ref - LAE"}/>
                        <DetailObj num={"4"} title={"Case Type"} value={"PI - MEDMAL (REF)"}/>
                        <DetailObj num={"5"} title={"Do you currently have another attorney for this case?"} value={"No"}/>
                        <DetailObj num={"6"} title={"Lead Details"} value={"Please tell me briefly how the malpractice occurred? His mother was in the hospital for 56 days with a variety of health issues he feels that his mother's condition worsened (infection at wound site eventually requiring IV antibiotics) due to the facilities negligence (sent her home with motrin that she can't ingest because of another health issue). "}/>
                        <DetailObj num={"7"} title={"Thank you. And may I ask how you heard about our law firm?"} value={"TV"}/>
                        <DetailObj num={"8"} title={"Date of Incident"} value={"5/26/2024"}/>
                        <DetailObj num={"9"} title={"Synopsis"} value={"Mom has multiple fractures of the spine and they are doing nothing. He feels like they are saying might be this or might be this, etc. Having difficulty breathing (COPD), needs help getting up due to fractures, hip is hurting, anemic."}/>

                </div>

            </div>

      </div>
  )
}

export default RN_Profile