import React, { Component } from 'react';
import { java, neural, future, neuralnet, dsa, dl, ml, python, ai } from './images';
import './content.css';

class Content extends Component {

  render() {
    return (
      <div> 

          <div className="row">

                <div className="col l12">
                    <div className="intro">
                     <h4>Join Udacity and upskill with a Nanodegree Program</h4>
                     <p>Get ready for the jobs of today and tomorrow</p>
                    </div>
                </div>

              <div className="row">
                <div class="col l8">
                    <div className="enroll">
                          <img className="futuregif" src={future} alt="gif" height="240" width="320"></img>
                          <h5>Prepare yourself for the Future with Udacity</h5>
                          <h6>Avail 30% off on below Nanodegree Programs*</h6>
                          <a className="waves-effect waves-light btn enrollbtn1">Enroll Now</a>
                    </div>
                </div>

                      <div className="col l4">
                          <div className="card1">
                            	<img className="javacardimg" src={java} alt="Java" height="65" width="65"></img>
                            <div class="item">
                              <h6 className="cardtitle1">New Launch</h6>
                     			    <p className="cardcontent1">JAVA</p><p></p>
                          		<p className="cardcontent1">Foundations</p>
                            </div>
                          </div>

                          <div className="card2">
                              <img className="neuralcardimg" src={neural} alt="neural" height="65" width="65"></img>
                            <div class="item">
                              <h6 className="cardtitle2">Enroll Now</h6>
                              <p className="cardcontent2">Neural Newtwork</p><p></p>
                              <p className="cardcontent2">Foundations</p>
                            </div>
                          </div>

                          <div className="card3">
                              <img className="advjava" src={java} alt="java" height="65" width="65"></img>
                            <div class="item">
                              <h6 className="cardtitle3">Enroll Now</h6>
                              <p className="cardcontent3">Java</p><p></p>
                              <p className="cardcontent3">Advance</p>
                            </div>
                          </div>

                      </div>
                  </div>

                <div className="col l12">
	                <div className="categories">
	                	<h5>Choose from our category of courses</h5>
	                	<a class="waves-effect waves-light btn categorybtn">Popular</a>
	                	<a class="waves-effect waves-light btn categorybtn">Data Science</a>
	                	<a class="waves-effect waves-light btn categorybtn">Machine Learning</a>
	                	<a class="waves-effect waves-light btn categorybtn">Web Development</a>
	                	<a class="waves-effect waves-light btn categorybtn">Mobile Development</a>
	                	<a class="waves-effect waves-light btn categorybtn">Virtual Reality</a>
	                	<a class="waves-effect waves-light btn categorybtn">Digital Marketing</a>
	                	<a class="waves-effect waves-light btn categorybtn">Autonomous Systems</a>
	                </div>
                </div>

                {/*Nanodegree cards*/}

                <div className="col l12">
                	 	<div className="col l4">
                	 		<div className="nanodegree">
                       <img className="neuralnet" src={neuralnet} alt="neural" height="150" width="392"></img>
                	 			<div className="nanotitle1">
                	 				<h5>Neural Networks</h5> 
                	 				<h5>Foundations</h5>
                	 			</div>
                	 		</div>
                		</div>
                		<div className="col l4">
                	 		<div className="nanodegree">
                       <img className="dsa" src={dsa} alt="dsa" height="150" width="392"></img>
                	 			<div className="nanotitle2">
                	 				<h5>Data Structures &</h5> 
                	 				<h5>Algorithms Foundations</h5>
                	 			</div>
                	 		</div>
                		</div>
                		<div className="col l4">
                	 		<div className="nanodegree">
                	 		 <img className="python" src={python} alt="python" height="150" width="392"></img>
                      	<div className="nanotitle3">
                	 				<h5>Python Foundation</h5> 
                	 				<h5>Nanodegree</h5>
                	 			</div>
                	 		</div>
                		</div>
                		<div className="col l4">
                	 		<div className="nanodegree">
                	 		 <img className="ml" src={ml} alt="ml" height="150" width="392"></img>
                        <div className="nanotitle4">
                	 				<h5>Machine Learning</h5> 
                	 				<h5>Nanodegree</h5>
                	 			</div>
                	 		</div>
                		</div>
                		<div className="col l4">
                	 		<div className="nanodegree">
                       <img className="ai" src={ai} alt="ai" height="150" width="392"></img>
                	 			<div className="nanotitle5">
                	 				<h5>Artificial Intelligence</h5> 
                	 				<h5>Nanodegree</h5>
                	 			</div>
                	 		</div>
                		</div>
                		<div className="col l4">
                	 		<div className="nanodegree">
                       <img className="dl" src={dl} alt="dl" height="150" width="392"></img>
                	 			<div className="nanotitle6">
                	 				<h5>Deep Learning</h5> 
                	 				<h5>Nanodegree</h5>
                	 			</div>
                	 		</div>
                		</div>
                </div>

                <div className="col l12">
                	 <div className="getstarted">
                	 	  <div className="info">
                	 	  		<h4>Imagine your future!</h4>
                	 	  		<h6>What do you want to learn today? 
                	 	  		What's your dream job? Discover the program
                	 	  		that's right for you!</h6>
                	 	  		<a class="waves-effect waves-light btn startbtn">Get Started</a>
                	 	  </div>
                	 </div>
                </div>

          </div>

      </div>
    );
  }
}

export default Content;