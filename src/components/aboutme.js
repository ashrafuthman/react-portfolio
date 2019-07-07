import React, { Component } from 'react';
import Typed from 'typed.js';
import ReactDOM from 'react-dom';




class AboutMe extends React.Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: [
        'Let me tell you about my journey and how I became a Web Developer',
        'I started Programming during my first semester in carinthia university of applied scienes',
        "I started with C++ and I tried to learn from my professor's courses",
        "I couldn't manage to learn and understand correctly :(",
        "So I have decided to learn by myself",
        "Yes! It worked with me",
        "and I am having fun",
        "Managed to build 2D software",
        "Ended up dropping university and join the Le Wagon Coding Bootcamp",
        "I was trained in Ruby on Rails, HTML, CSS, JavaScript, jQuery, SQL, API, Git, PostgreSQL, Data Structures and UX.",
        "It gave me a great background of Web Development and similar experience to what you get from actual work",
        "I have graduated from there with 3 Web-apps that I was in 2 of them a member of a team :D",
        "I started to look for a job and to teach myself new skills",
        "React.js and Redux",
        "After 3 months of Job haunting I have managed to find a job at EcoG in Munich",
        "Working as Fullstack Web Developer",
        "Frontend: Working with React.js using (Ant design and MaterialUI)",
        "Backend: Working with Node.js, DynamoDB and AWS (Lambda, Serverless. S3, etc.. )",
        "I am managing to deal with tasks as I am learning.",
        "I am ready to learn more!",
        "I am a fast learner, hight motivated, dedicated and hard-working Web Developer",
        "Are you interested?",
        "Go to Contact Page and let us manage a call ^-^"
      ],
      typeSpeed: 35,
      backSpeed: 1
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }


  render() {
    return (
      <div className="wrap">
        <div class="home-banner">
    <h1>Hey there, <br/> my name is Ashraf</h1>
      <div className="type-wrap">
        <h5 style={{color: '#ddd'}}>
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </h5>
      </div>
  </div>
    
   

      </div>
    );
  }
}

export default AboutMe;