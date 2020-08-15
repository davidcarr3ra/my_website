import React, { Component } from 'react';
import "./About.css";

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row_about container1">
         {/*<div className="three columns" style={{bottom: "-50px", left: "-100px"}}>*/}
         <div className="abouttitle">
            <h2>About Me</h2>
         </div>
         <div id="profilepic">
            <img 
              className="br4 shadow-5" 
              width="350px" height="auto" 
              src={profilepic} 
              alt="My Profile Pic" 
            />
         </div>
         {/* <div className="nine columns main-col"> */ }
         <div className="abouttext">
          {/* about me was here */}
            <p>{bio}</p>
            <p>Having sought out exploratory experience in finance in recent years, I now seek to gain practical experience in technology. I cherish all opportunities to dabble in this field, whether that is through personal projects, academic research, or work experiences. I'm actively on the lookout for promising positions in software development, data science, and quantitative finance.</p>
            <p> The relevant coursework I have taken so far includes: Introduction to Computer Science, Data Structures and Algorithms, Multivariable Calculus, and Discrete Mathematics. My current coursework for this term includes Advanced Programming, Linear Algebra, Ordinary Differential Equations, and Probability Theory.</p>
            <p>On a more personal note, I am Colombian and grew up in Baku, Azerbaijan. In my free time, I deeply enjoy playing guitar, reading books that pique my curiosity, and meeting interesting people.</p>
            {/*<div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
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
            </div> */} 
         </div>
      </div>

   </section>
    );
  }
}

export default About;
