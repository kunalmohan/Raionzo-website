import React from 'react';
import './panel.css';
import date from '../components/images/date.png'
import time from '../components/images/time.png'
import map from '../components/images/venue.png'
import contact from '../components/images/contact.png'
import MediaQuery from 'react-responsive';
import finance from '../components/docs/Finance.pdf';
import design from '../components/docs/Design.pdf';
import ml from '../components/docs/ML.pdf';
import intaff from '../components/docs/Int Affairs.pdf';
import womenintech from '../components/docs/Women in Tech.pdf';

function timing(props) {
	if(props.page===1)
		return(
			 <div className='timing'>
			     <a href={intaff} className ='IA' target="_blank">
			         <p className='nam'>International Affairs of India</p>
			         <div className='nam2'>
			             <p className='dat dd'>31st August</p>
			             <p className='dat dd'>2 PM</p>
			             <p className='dat dd1'>MAC Audi</p>
			         </div>
			     </a>
			     <a href={womenintech} className ='IA' target="_blank">
			         <p className='nam'>Women in Tech</p>
			         <div className='nam2'>
			             <p className='dat dd'>1st September</p>
			             <p className='dat dd'>11:30 AM</p>
			             <p className='dat dd1'>MAC Audi</p>
			         </div>
			     </a>
			 </div>
		);
	if(props.page===4)
		return(<div className='timing'>
	             <a href={finance} className='date' target="_blank">
                     <p className='namm'>Finance</p>
	                 <p className='dat'>1st September<br/>3 PM</p>
	             </a>
	             <a href={design} className='date' target="_blank">
	                 <p className='namm'>Design</p>
	                 <p className='dat'>31st August<br/>3 PM</p>
	             </a>
	             <a href={ml} className='date' target="_blank">
	                 <p className='namm'>ML/AI</p>
	                 <p className='dat'>31st August<br/>3 PM</p>
	             </a>
	             <a href="" className='date' target="_blank">
	                 <p className='namm'>Web-D</p>
	                 <p className='dat'>1st September<br/>3 PM</p>
	             </a>   
	         </div>
	         );

	return ( <div className='timing'>
	             <div className='date'>
	                 <img className='timing-icons' src={date} alt=''></img>
	                 <MediaQuery query="(min-device-width: 414px)">
	                 <p className='nam'>Date</p>
	                 </MediaQuery>
	                 <p className='dat'>{props.date}</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons' src={time} alt=''></img>
	                 <MediaQuery query="(min-device-width: 414px)">
	                 <p className='nam'>Time</p>
	                  </MediaQuery>
	                 <p className='dat'>{props.time}</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons spec' src={map} alt=''></img>
	                 <MediaQuery query="(min-device-width: 414px)">
	                 <p className='nam'>Venue</p>
	                  </MediaQuery>
	                 <p className='dat'>{props.venue}</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons' src={contact} alt=''></img>
	                 <MediaQuery query="(min-device-width: 414px)">
	                 <p className='nam'>Contact</p>
	                  </MediaQuery>
	                 <p className='dat'>8889379722,<br/>8333008000</p>
	             </div>    
	         </div>
	         
		    );

}

export default timing;
