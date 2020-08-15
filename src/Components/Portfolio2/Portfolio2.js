import React from "react";
import "./Portfolio.css";

const Portfolio2 = () => {
	return(
		<section id="projects" style={{background: "#16464B"}}>
      <div className="projects">

      	<div className="row mb5">

         		<div className="header-col">

            		<h1 className="projects_title"><span>Projects</span></h1>

        		</div>
        </div>

    		<div id="project-grid">
            <div className="project_box br4 ba w-100-l shadow-5 pa4 bg-white"> 
              <p className="mb2 mt2 f2 fw6" style={{color: "#16464B"}}>Texas Hold'em</p>
              <img src="/images/portfolio/poker.png" width="200px"/>
              <p className="tc" style={{color: "#333333"}}>Four-player Poker Texas Hold'em game in the command line, created in Java. Three bots are programmed to make legal moves at random to capture the true nature of a real game of poker. Hand-evaluator programmed from scratch. User interface in ReactJs under development.</p>
              <a className="link has-text-primary button bg-transparent not_done" style={{padding: "0", height: "27px", color: "#16464B"}} disabled=""><span className="icon pr4"><svg className="svg-inline--fa fa-tools fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="tools" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.6 389.5L378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4 0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480L287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9 0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8 0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9 0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7 0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2 0-17.1-17.1-17.1-45.1 0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8 0 107.5C36.5 504.1 55.6 512 75.9 512c20.3 0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z"></path></svg></span><span>In development</span></a>
            </div>
            <div className="project_box br4 ba w-100-l shadow-5 pa4 bg-white"> 
              <p className="mb2 mt2 f2 fw6" style={{color: "#16464B"}}>Face Finder</p>
              <img className="mt3 mb4"src="/images/portfolio/face-recog.png" width="340px"/>
              <p className="tc" style={{color: "#333333"}}>A full-stack web application that leverages the Clarifai image recognition API to detect faces in input images. Frontend built in ReactJs, backend API in NodeJs and Express. Database managed using PostgreSQL. User passwords stored securely using Bcrypt.</p>
              <a target="_blank"href="https://my-face-recog.herokuapp.com/" className="hvr-sweep-to-right">See Live</a>
            </div>
            <div className="project_box br4 ba w-100-l shadow-5 pa4 bg-white"> 
              <p className="mb2 mt2 f2 fw6" style={{color: "#16464B"}}>Gaussian Elimination Visualizer</p>
              <img className="mb4" src="/images/portfolio/gaussian.png" width="215px"/>
              <p className="tc" style={{color: "#333333"}}>A tool to help students visualize the Gauss-Jordan elimination algorithm for nonsingular real-valued n by n matrices, step by step. Algorithm created in Python using NumPy. User interface under development in ReactJs.</p>
              <a className="link has-text-primary button bg-transparent not_done" style={{padding: "0", height: "27px", color: "#16464B"}} disabled=""><span className="icon pr4"><svg className="svg-inline--fa fa-tools fa-w-16" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="tools" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.6 389.5L378.2 265c-15.6-15.6-36.1-23.4-56.6-23.4-15.4 0-30.8 4.4-44.1 13.3L192 169.4V96L64 0 0 64l96 128h73.4l85.5 85.5c-20.6 31.1-17.2 73.3 10.2 100.7l124.5 124.5c6.2 6.2 14.4 9.4 22.6 9.4 8.2 0 16.4-3.1 22.6-9.4l67.9-67.9c12.4-12.6 12.4-32.8-.1-45.3zM160 158.1v1.9h-48L42.3 67 67 42.3l93 69.7v46.1zM412.1 480L287.7 355.5c-9.1-9.1-14.1-21.1-14.1-33.9 0-12.8 5-24.9 14.1-33.9 9.1-9.1 21.1-14.1 33.9-14.1 12.8 0 24.9 5 33.9 14.1L480 412.1 412.1 480zM64 432c0 8.8 7.2 16 16 16s16-7.2 16-16-7.2-16-16-16-16 7.2-16 16zM276.8 66.9C299.5 44.2 329.4 32 360.6 32c6.9 0 13.8.6 20.7 1.8L312 103.2l13.8 83 83.1 13.8 69.3-69.3c6.7 38.2-5.3 76.8-33.1 104.5-8.9 8.9-19.1 16-30 21.5l23.6 23.6c10.4-6.2 20.2-13.6 29-22.5 37.8-37.8 52.7-91.4 39.7-143.3-2.3-9.5-9.7-17-19.1-19.6-9.5-2.6-19.7 0-26.7 7l-63.9 63.9-44.2-7.4-7.4-44.2L410 50.3c6.9-6.9 9.6-17.1 7-26.5-2.6-9.5-10.2-16.8-19.7-19.2C345.6-8.3 292 6.5 254.1 44.3c-12.9 12.9-22.9 27.9-30.1 44v67.8l22.1 22.1c-9.6-40.4 1.6-82.2 30.7-111.3zM107 467.1c-16.6 16.6-45.6 16.6-62.2 0-17.1-17.1-17.1-45.1 0-62.2l146.1-146.1-22.6-22.6L22.2 382.3c-29.6 29.6-29.6 77.8 0 107.5C36.5 504.1 55.6 512 75.9 512c20.3 0 39.4-7.9 53.7-22.3L231.4 388c-6.7-9.2-11.8-19.3-15.5-29.8L107 467.1z"></path></svg></span><span>In development</span></a>
            </div>
        </div>
        <div className="bottom_line w-70 center mt5"></div>
        </div>
    	</section>
	);
}

export default Portfolio2;