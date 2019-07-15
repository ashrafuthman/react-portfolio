import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Ash from '../assets/ashraf.jpg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}  style={{ position: 'relative', top: '10%'}}>
            <img
              src={Ash}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Junior 
                <br />
                Full Stack Web Developer
              </h1>

            <hr/>

          <p>
            Ruby On Rail | HTML5/CSS3 | Bootstrap | MaterialUI | Ant Design | JavaScript |
            ReactJS | Redux | AWS | NodeJS | PostgreSQL | DynamoDB |
            Serverless | C++ | Git | jQuery | REST API | SFTP | Heroku | Ubuntu |
          </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ashrafuthman/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/ashrafuthman" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github" aria-hidden="true" />
          </a>

          {/* GitLab */}
          <a href="https://gitlab.com/ashrafuthman" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-gitlab"  aria-hidden="true" />
          </a>



        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
