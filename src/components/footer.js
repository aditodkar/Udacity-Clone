import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    return (
       <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l3">
                <h5 class="black-text">Featured Resources</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="#!">Front End Developer</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Backend Developer</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Data Analyst</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Machine Learning</a></li>
                </ul>
              </div>
              <div class="col l3">
                <h5 class="black-text">Only at Udacity</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="#!">Deep Learning</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Self Driving Cars</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Artificial Intelligence</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Bussiness Analytics</a></li>
                </ul>
              </div>
              <div class="col l3">
                <h5 class="black-text">Resources</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="#!">Nanodegree</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Free Courses</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Student Success</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Career Resources</a></li>
                </ul>
              </div>
              <div class="col l3">
                <h5 class="black-text">Support</h5>
                <ul>
                  <li><a class="black-text text-lighten-3" href="#!">Contact Us</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Help and FAQ</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Service Status</a></li>
                  <li><a class="black-text text-lighten-3" href="#!">Legal and Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
