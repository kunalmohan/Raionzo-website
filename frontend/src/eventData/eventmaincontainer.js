import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import Speaker from './speaker.js';
import  EventComponent1  from './eventcomponent1.js';


class EventMainContainer extends React.Component{
	state={
	 num:1,
    date:'31 August',
    time:'10 AM'
  };

  openLink(){
    window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
  }

  render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" Panel discussion will be held on the topics “International Affairs of India” 
   and “Women in Tech” where the audience will be exposed to various viewpoints and perspectives of the speakers."
   eventcontainerheading="Panel Discussion"
   eventcontainerbutton="Panelists"
   eventcontainericon="one"  />
   <div>
	 <Panelicons  two={this.state.num}/>
	 <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}/>
    </div>

    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators car-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="item active">
         <Speaker speakername="Navniet Sekera" speakercontent="IG Lucknow | Baukhaal Tv Series" speakerimg="https://media.licdn.com/dms/image/C4E03AQG7kLg4Qu8MXQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=p6PWfYk6oPXtlzZWHpeIUHGuCfonLBxZLEQUkp3PK24" />
        </div>
        <div className="item">
         <Speaker speakername="Himanshu Sirohi " speakercontent="Marketing head | Prega News" speakerimg="https://media.licdn.com/dms/image/C5603AQGBgEi7NRqqnQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=p4mpvBFU-raNhy60zEeBLTcMJKpo-XoYqZZ2BzF-QEc" />
        </div>
        <div className="item">
         <Speaker speakername="Nitesh Jain " speakercontent="Business Strategy | Paytm" speakerimg="https://media.licdn.com/dms/image/C5603AQFEhu4P2Xhmkg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=S9VOH6mBskysYb9FKiAfzemVWeGo-VpvDzNep9vfO_s" />
        </div>
        <div className="item">
         <Speaker speakername="Varun Goel " speakercontent="HR Bhel " speakerimg="https://media.licdn.com/dms/image/C4D03AQGeJnUCBcCJhA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=4nXV_5ez4realEXeJLiDr-QEBjUc-AAyM1JpsRdWjhQ" />
        </div>
        <a className="left carousel-control car-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left control-but"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control car-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right control-but"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
              <div className="event-register">
                <div className="event-register-text">
                  To take part in this event
                </div>
                <div onClick={this.openLink} className="event-register-button">
                  Register
                </div>
              </div>
  </div>
  );
}
}

export default EventMainContainer;
