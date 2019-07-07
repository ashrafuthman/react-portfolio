import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Ash from '../assets/ashraf.jpg';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ashraf Uthman</h2>
            <img
              src={Ash}
              alt="avatar"
              style={{height: '250px', borderRadius: 10}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
              I am willing to relocate to any country 
              <br/>
              including my home country 
              <br/>
              Israel
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +49 17665401446
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ashrafuth@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/ashrafuthman/"
                     rel="noopener noreferrer" 
                     target="_blank"
                     style={{textDecoration: 'none', color: '#0d76b3'}}
                     >
                     linkedin.com/in/ashrafuthman/
                    </a>
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
