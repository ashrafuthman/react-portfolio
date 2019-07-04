import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ashraf Uthman</h2>
            <h4 style={{color: 'grey'}}>Junior Fullstack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Dedicated, fast learner and hard-working web developer trained
              in Ruby on Rails, HTML, CSS, JavaScript, jQuery, SQL, API, Git,
              PostgreSQL, Data Structures and UX.
              Worked on 3 webapp projects and successfully launched them by
              the end of the Le Wagon FullStack Web Development Bootcamp.
              Working currently at EcoG in Munich as a Fullstack developer.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Schroefelhofstrasse 14, 81375</p>
            <h5>Phone</h5>
            <p>+49 17665401446</p>
            <h5>Email</h5>
            <p>ashrafuth@gmail.com</p>
            <h5>My Website</h5>
            <a 
              href="https://ash-forgetmenot.herokuapp.com"
              style={{ textDecoration: 'none'}}
            >
              ash-forgetmenot.herokuapp.com
            </a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={"APR " + 2018}
              endYear={"JUL " + 2018}
              schoolName="Le Wagon Coding Bootcamp"
              schoolDescription="
              Learned Ruby on Rails, HTML, CSS, JavaScript, JQuery, SQL, API,
              Git, PostgreSQL, Data Structures and UX in 11 weeks, via an
              intense full-stack web development program amounting
              to 720 hours of coding in total.
              Worked as part of a 3-man team to design and develop a
              functioning prototype of an AirBnB marketplace model
              Modeled, designed and launched a working prototype of an
              intelligent CRM web application in two weeks. I was responsible
              for Database architecture and user experience.
              "
               />

            <Education
              startYear={"OCT " + 2017}
              endYear={"APR " + 2018}
              schoolName="Netweork Engineering
              Carinthia University Of Applied Science"
              schoolDescription="
              I had C++ course which I really managed to study by myself and build 2D project
              on my free time.
              "
              />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={"NOV " + 2018}
              endYear={"AUG " + 2019}
              jobName="Full Stack Developer at EcoG"
              jobDescription="
              Frontend: Working with React.js using (Ant design and
              MaterialUI)
              Backend: Working with Node.js, DynamoDB and other AWS
              (Lambda,
              Serverless. S3, etc.. )
              I am managing to deal with tasks as I learn.
              "
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Ruby On Rails"
                progress={100}
                />
              <Skills
                skill="HTML/CSS"
                progress={100}
                />
              <Skills
                skill="JavaScript"
                progress={100}
                />
              <Skills
                skill="ReactJS"
                progress={100}
                />
              <Skills
                skill="REST API"
                progress={80}
                />
              <Skills
                skill="PostgreSQL"
                progress={75}
                />
              <Skills
                skill="AWS"
                progress={60}
                />
              <Skills
                skill="NodeJS"
                progress={55}
                />
              <Skills
                skill="C++"
                progress={40}
                />
              <Skills
                skill="Redux"
                progress={30}
                />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
