import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var interests = this.props.data.interests.map(function(interest){
         return <div className="row">
            <div className="two column">
               <i className="fa fa-gamepad interest-icon"></i>
            </div>
            <div className="ten columns">
               <h4>Game Development</h4>
               <p>Game development is certainly my favorite. You can create a lot of different experiences that touches the heart of the people. I enjoy every step of the process so much that it's not a job for me. Even when my main job is not about game development, I find rejoice from gathering game development knowledge or by putting myself in front of a computer and creating some games</p>
            </div>
         </div>
      })
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Me" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <h2>My Interests</h2>
            <div className="row">
               <div className="two column">
                  <i className="fa fa-gamepad interest-icon"></i>
               </div>
               <div className="ten columns">
                  <h4>Game Development</h4>
                  <p>Game development is certainly my favorite. You can create a lot of different experiences that touches the heart of the people. I enjoy every step of the process so much that it's not a job for me. Even when my main job is not about game development, I find rejoice from gathering game development knowledge or by putting myself in front of a computer and creating some games</p>
               </div>
            </div>

            <div className="row">
               <div className="two column">
                  <i className="fa fa-mobile-phone interest-icon"></i>
               </div>
               <div className="ten columns">
                  <h4>Mobile and Web</h4>
                  <p>Using the mobile and web technologies is really interesting to me, especially when we can find new and interesting ways to use them and create cool and well designed solutions to all kind of problems</p>
               </div>
            </div>
            
            {/*<div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>
                        {city} {state}
                     </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>*/}
         </div>
      </div>

   </section>
    );
  }
}

export default About;
